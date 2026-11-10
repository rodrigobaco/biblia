(function () {
  const API = "https://bible.helloao.org/api/por_blj";
  const $ = (id) => document.getElementById(id);

  // ---------- datas ----------
  const chaveDe = (d) =>
    d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const dataDe = (chave) => { const [a, m, d] = chave.split("-").map(Number); return new Date(a, m - 1, d); };
  const numeroDoDia = (chave) => { const [a, m, d] = chave.split("-").map(Number); return Math.round(Date.UTC(a, m - 1, d) / 864e5); };
  const somarDias = (chave, n) => { const d = dataDe(chave); d.setDate(d.getDate() + n); return chaveDe(d); };
  const hoje = () => chaveDe(new Date());

  // ---------- história do dia (aleatória, igual para todos, sem repetir até acabar a lista) ----------
  function sorteador(semente) {
    return function () {
      semente |= 0; semente = (semente + 0x6d2b79f5) | 0;
      let t = Math.imul(semente ^ (semente >>> 15), 1 | semente);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function historiaDoDia(chave) {
    const n = numeroDoDia(chave), total = HISTORIAS.length;
    const ciclo = Math.floor(n / total), posicao = ((n % total) + total) % total;
    const ordem = HISTORIAS.map((_, i) => i), rnd = sorteador(ciclo * 7919 + 31);
    for (let i = ordem.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [ordem[i], ordem[j]] = [ordem[j], ordem[i]]; }
    return HISTORIAS[ordem[posicao]];
  }

  // ---------- texto bíblico ----------
  const capitulos = new Map();
  function buscarCapitulo(livro, cap) {
    const k = livro + "/" + cap;
    if (!capitulos.has(k)) {
      capitulos.set(k, fetch(API + "/" + k + ".json").then((r) => {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      }).catch((e) => { capitulos.delete(k); throw e; }));
    }
    return capitulos.get(k);
  }

  async function carregarTexto(h) {
    const caps = [];
    for (let c = h.de[0]; c <= h.ate[0]; c++) caps.push(c);
    const dados = await Promise.all(caps.map((c) => buscarCapitulo(h.livro, c)));
    const paragrafos = [];
    let atual = [];
    const fechar = () => { if (atual.length) { paragrafos.push(atual); atual = []; } };

    dados.forEach((d, i) => {
      const cap = caps[i];
      for (const item of d.chapter.content) {
        if (item.type === "line_break" || item.type === "heading") { fechar(); continue; }
        if (item.type !== "verse") continue;
        const depoisDoInicio = cap > h.de[0] || item.number >= h.de[1];
        const antesDoFim = cap < h.ate[0] || item.number <= h.ate[1];
        if (!depoisDoInicio || !antesDoFim) continue;
        const texto = item.content.map((c) => (typeof c === "string" ? c : c.text || "")).join(" ").replace(/\s+/g, " ").trim();
        if (texto) atual.push({ numero: item.number, texto });
      }
    });
    fechar();
    return { livro: dados[0].book.name, paragrafos };
  }

  function referencia(nomeLivro, h) {
    if (h.de[0] === h.ate[0]) return nomeLivro + " " + h.de[0] + ":" + h.de[1] + "–" + h.ate[1];
    return nomeLivro + " " + h.de[0] + ":" + h.de[1] + "–" + h.ate[0] + ":" + h.ate[1];
  }

  // ---------- lidos ----------
  function lerLidos() { try { return new Set(JSON.parse(localStorage.getItem("lidos") || "[]")); } catch (e) { return new Set(); } }
  function salvarLidos(s) { try { localStorage.setItem("lidos", JSON.stringify([...s])); } catch (e) { /* sem armazenamento */ } }
  let lidos = lerLidos();

  function diasSeguidos() {
    let dia = lidos.has(hoje()) ? hoje() : somarDias(hoje(), -1), n = 0;
    while (lidos.has(dia)) { n++; dia = somarDias(dia, -1); }
    return n;
  }

  // ---------- tela ----------
  let diaAtual = hoje(), historiaAtual = null, textoAtual = null, pedido = 0;

  const NOVO_TESTAMENTO = new Set(["MAT", "MRK", "LUK", "JHN", "ACT", "ROM", "1CO", "2CO", "GAL", "EPH", "PHP", "COL", "1TH", "2TH", "1TI", "2TI", "TIT", "PHM", "HEB", "JAS", "1PE", "2PE", "1JN", "2JN", "3JN", "JUD", "REV"]);

  function quando(chave) {
    if (chave === hoje()) return "Hoje";
    if (chave === somarDias(hoje(), -1)) return "Ontem";
    const dias = numeroDoDia(hoje()) - numeroDoDia(chave);
    return "Há " + dias + " dias";
  }

  function atualizarLido() {
    const feito = lidos.has(diaAtual), ehHoje = diaAtual === hoje();
    const b = $("lido");
    b.classList.toggle("feito", feito);
    b.querySelector("span").textContent = feito ? "Lido" : ehHoje ? "Li hoje" : "Marcar como lido";
    const n = diasSeguidos();
    $("sequencia").textContent = n === 0 ? "" : n === 1 ? "1 dia de leitura" : n + " dias seguidos";
  }

  async function mostrar(chave) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(chave || "") || chave > hoje()) chave = hoje();
    diaAtual = chave;
    const meu = ++pedido;
    const h = historiaDoDia(chave);
    historiaAtual = h; textoAtual = null;

    $("quando").textContent = quando(chave);
    $("data").textContent = dataDe(chave).toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" });
    $("proximo").disabled = chave >= hoje();
    $("testamento").textContent = NOVO_TESTAMENTO.has(h.livro) ? "Novo Testamento" : "Antigo Testamento";
    $("titulo").textContent = h.titulo;
    $("referencia").textContent = "";
    $("contexto").textContent = h.contexto;
    $("leitura").textContent = h.leitura;
    $("texto").innerHTML = '<p class="carregando">Abrindo o livro…</p>';
    document.title = h.titulo + " · Uma história por dia";
    atualizarLido();

    try {
      const t = await carregarTexto(h);
      if (meu !== pedido) return;
      textoAtual = t;
      $("referencia").textContent = referencia(t.livro, h);
      const div = $("texto");
      div.innerHTML = "";
      t.paragrafos.forEach((par, ip) => {
        const p = document.createElement("p");
        par.forEach((v, i) => {
          // o primeiro versículo fica sem número, para a letra capitular
          if (ip > 0 || i > 0) {
            const sup = document.createElement("sup");
            sup.textContent = v.numero;
            p.append(sup);
          }
          p.append(v.texto + (i < par.length - 1 ? " " : ""));
        });
        div.append(p);
      });
    } catch (e) {
      if (meu !== pedido) return;
      $("texto").innerHTML = '<p class="erro">Não foi possível carregar o texto agora. Verifique a conexão e tente de novo.</p>';
    }
  }

  function irPara(chave) {
    if (chave === hoje()) history.replaceState(null, "", location.pathname + location.search);
    else location.hash = chave;
    mostrar(chave);
  }

  $("anterior").addEventListener("click", () => irPara(somarDias(diaAtual, -1)));
  $("proximo").addEventListener("click", () => { if (diaAtual < hoje()) irPara(somarDias(diaAtual, 1)); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") $("anterior").click();
    if (e.key === "ArrowRight") $("proximo").click();
  });
  window.addEventListener("hashchange", () => { const k = location.hash.slice(1); if (k !== diaAtual) mostrar(k); });

  $("lido").addEventListener("click", () => {
    if (lidos.has(diaAtual)) lidos.delete(diaAtual); else lidos.add(diaAtual);
    salvarLidos(lidos);
    atualizarLido();
  });

  $("compartilhar").addEventListener("click", async () => {
    const h = historiaAtual;
    let msg = h.titulo;
    if (textoAtual) {
      msg += "\n" + referencia(textoAtual.livro, h) + "\n\n" +
        textoAtual.paragrafos.map((p) => p.map((v) => v.texto).join(" ")).join("\n\n");
    }
    msg += "\n\n" + h.leitura;
    const url = location.protocol.startsWith("http") ? location.origin + location.pathname + "#" + diaAtual : "";
    if (navigator.share) {
      try { await navigator.share({ title: h.titulo, text: msg, url: url || undefined }); } catch (e) { /* cancelado */ }
    } else {
      window.open("https://wa.me/?text=" + encodeURIComponent(msg + (url ? "\n\n" + url : "")), "_blank", "noopener");
    }
  });

  // ---------- app instalável ----------
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
  const instalado = matchMedia("(display-mode: standalone)").matches || navigator.standalone;
  let pedidoInstalar = null;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    pedidoInstalar = e;
    $("instalar-box").hidden = false;
    $("instalar").hidden = false;
  });
  $("instalar").addEventListener("click", async () => {
    if (!pedidoInstalar) return;
    pedidoInstalar.prompt();
    await pedidoInstalar.userChoice.catch(() => {});
    pedidoInstalar = null;
    $("instalar-box").hidden = true;
  });
  window.addEventListener("appinstalled", () => { $("instalar-box").hidden = true; });
  if (!instalado && /iphone|ipad|ipod/i.test(navigator.userAgent)) {
    $("instalar-box").hidden = false;
    $("dica-ios").hidden = false;
  }

  mostrar(location.hash.slice(1));
})();
