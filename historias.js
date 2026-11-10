// Lista de histórias. livro: código do livro (padrão USFM), de/ate: [capítulo, versículo].
// "contexto" aparece antes do texto; "leitura" é a interpretação curta que aparece depois.
const HISTORIAS = [
  {
    titulo: "Abraão sobe o monte com Isaque",
    livro: "GEN", de: [22, 1], ate: [22, 14],
    contexto: "Depois de esperar décadas por um filho, Abraão finalmente tem Isaque. Agora Deus pede algo que parece não fazer sentido.",
    leitura: "Isaque carrega a lenha e pergunta pelo cordeiro. O pai responde com uma frase que ele mesmo ainda não entende. Tem dia que a gente sobe o monte só com metade da resposta, e vai assim mesmo."
  },
  {
    titulo: "Caim e Abel",
    livro: "GEN", de: [4, 1], ate: [4, 16],
    contexto: "Adão e Eva já saíram do Éden. Nascem os dois primeiros irmãos da história.",
    leitura: "Antes de qualquer coisa acontecer, Deus avisa Caim: o pecado está na porta, te esperando. Ele teve tempo de mudar. A raiva quase nunca chega de surpresa, ela fica rondando um tempo antes."
  },
  {
    titulo: "A torre de Babel",
    livro: "GEN", de: [11, 1], ate: [11, 9],
    contexto: "Depois do dilúvio, a humanidade inteira ainda fala uma só língua e mora junta numa planície.",
    leitura: "Eles queriam fazer um nome para si mesmos. É curioso que o lugar ficou conhecido justamente pelo nome que eles não escolheram: confusão."
  },
  {
    titulo: "Jacó luta a noite inteira",
    livro: "GEN", de: [32, 22], ate: [32, 32],
    contexto: "Anos atrás, Jacó enganou o irmão Esaú e fugiu. Agora está voltando para casa, e Esaú vem ao seu encontro com quatrocentos homens.",
    leitura: "Jacó sai da luta com uma bênção e mancando. As duas coisas vieram juntas. Ninguém passa uma noite dessas e volta andando igual."
  },
  {
    titulo: "José se revela aos irmãos",
    livro: "GEN", de: [45, 1], ate: [45, 15],
    contexto: "Os irmãos venderam José como escravo. Anos depois, ele governa o Egito, e eles vêm pedir comida sem reconhecê-lo.",
    leitura: "José chora tão alto que o Egito inteiro ouve. Ele tinha poder para se vingar e escolheu chorar. Perdoar, aqui, não parece leve. Parece uma coisa que sai de dentro com barulho."
  },
  {
    titulo: "A sarça que não se apagava",
    livro: "EXO", de: [3, 1], ate: [3, 14],
    contexto: "Moisés cresceu no palácio do faraó, matou um egípcio e fugiu. Há quarenta anos vive como pastor no deserto.",
    leitura: "Moisés estava no trabalho de todo dia, cuidando das ovelhas do sogro. Deus só falou quando ele parou para olhar. Muita coisa importante passa porque a gente não desvia o caminho nem um pouco."
  },
  {
    titulo: "Rute não abandona Noemi",
    livro: "RUT", de: [1, 1], ate: [1, 18],
    contexto: "Em tempo de fome, uma família de Belém vai morar em Moabe, terra estrangeira. É lá que esta história começa.",
    leitura: "Noemi manda as noras embora, e ela tinha razão: não havia nada para elas em Belém. Rute fica mesmo assim. Às vezes a lealdade não tem lógica nenhuma, e é por isso que ela vale tanto."
  },
  {
    titulo: "Ana pede um filho",
    livro: "1SA", de: [1, 9], ate: [1, 20],
    contexto: "Ana não podia ter filhos. Todo ano, na viagem ao templo, a outra mulher do marido a provocava por isso.",
    leitura: "O sacerdote achou que ela estava bêbada. Ela só estava rezando do jeito que dava, mexendo os lábios sem som. Nem toda oração bonita parece bonita para quem olha de fora."
  },
  {
    titulo: "Samuel ouve chamarem seu nome",
    livro: "1SA", de: [3, 1], ate: [3, 10],
    contexto: "Ana cumpriu a promessa e deixou o filho Samuel no templo, para crescer ao lado do velho sacerdote Eli.",
    leitura: "Três vezes o menino corre até Eli, achando que era ele. Foi o velho, já meio cego, que percebeu primeiro de onde vinha a voz. Às vezes a gente precisa de alguém mais velho para entender o que está ouvindo."
  },
  {
    titulo: "Davi e Golias",
    livro: "1SA", de: [17, 32], ate: [17, 50],
    contexto: "Há quarenta dias um gigante filisteu desafia o exército de Israel e ninguém tem coragem de enfrentá-lo. Davi, ainda menino, veio só trazer comida para os irmãos.",
    leitura: "Saul empresta a armadura dele e Davi não consegue nem andar. Ele devolve e vai com o que já sabia usar. Tem batalha que não se vence com o equipamento dos outros."
  },
  {
    titulo: "Natã conta a história da ovelhinha",
    livro: "2SA", de: [12, 1], ate: [12, 7],
    contexto: "O rei Davi tomou Bate-Seba, mulher de Urias, e mandou o marido para morrer na guerra. Ninguém disse nada, até agora.",
    leitura: "Davi ficou furioso com o homem rico da história, até descobrir que o homem era ele. É bem mais fácil enxergar o erro quando ele está na vida de outra pessoa."
  },
  {
    titulo: "A viúva de Sarepta",
    livro: "1KI", de: [17, 8], ate: [17, 16],
    contexto: "Há uma seca longa na terra. Elias, perseguido pelo rei, é mandado para uma cidade estrangeira.",
    leitura: "Ela ia fazer o último pão e esperar a morte. Elias pede que ela faça o dele primeiro. A farinha não acabou, mas também nunca sobrou. Durou um dia de cada vez."
  },
  {
    titulo: "Elias e a voz mansa",
    livro: "1KI", de: [19, 1], ate: [19, 13],
    contexto: "Elias acabou de vencer os profetas de Baal no monte Carmelo. Agora a rainha Jezabel jura matá-lo.",
    leitura: "Vento forte, terremoto, fogo, e Deus não estava em nenhum deles. Estava num sussurro. Antes disso, um anjo só mandou Elias comer e dormir. Às vezes o primeiro passo é esse mesmo."
  },
  {
    titulo: "Naamã se lava no Jordão",
    livro: "2KI", de: [5, 1], ate: [5, 14],
    contexto: "Naamã comanda o exército da Síria, inimiga de Israel. Na casa dele trabalha uma menina israelita levada como escrava.",
    leitura: "Naamã estava pronto para uma coisa grandiosa e ficou ofendido com uma ordem simples. Foram os servos que convenceram ele. O orgulho às vezes atrapalha mais que a doença."
  },
  {
    titulo: "Ester decide entrar",
    livro: "EST", de: [4, 10], ate: [4, 16],
    contexto: "Ester, judia, virou rainha da Pérsia sem contar sua origem. Acaba de sair uma ordem para exterminar todos os judeus do reino.",
    leitura: "Mardoqueu não diz que vai dar certo. Diz que talvez ela esteja ali para isso. E Ester entra sem garantia nenhuma: se eu morrer, morri. Coragem de verdade é bem assim, sem promessa de final feliz."
  },
  {
    titulo: "Daniel na cova dos leões",
    livro: "DAN", de: [6, 16], ate: [6, 23],
    contexto: "Por inveja, os colegas de Daniel conseguem uma lei que proíbe orar a qualquer deus além do rei. Daniel continua orando três vezes por dia, de janela aberta.",
    leitura: "O rei passa a noite sem comer e sem dormir, e quem está na cova é Daniel. O texto não diz como foi a noite de Daniel. Só a do rei, que tinha todo o poder e não conseguiu usar."
  },
  {
    titulo: "Jonas foge para o outro lado",
    livro: "JON", de: [1, 1], ate: [1, 17],
    contexto: "Nínive era a capital da Assíria, o império mais cruel da época e inimigo do povo de Jonas.",
    leitura: "Deus manda ir para Nínive e Jonas compra passagem para o lado oposto. Enquanto a tempestade quebra o navio, ele está dormindo no porão. Dá para fugir de muita coisa dormindo."
  },
  {
    titulo: "Jonas e a planta que secou",
    livro: "JON", de: [4, 1], ate: [4, 11],
    contexto: "Jonas acabou pregando em Nínive, a cidade inteira se arrependeu e Deus desistiu de destruí-la.",
    leitura: "Jonas fica com raiva porque Deus perdoou a cidade, e depois fica com raiva de novo porque uma planta morreu. A história termina com uma pergunta sem resposta. Parece que ela ficou para quem está lendo."
  },
  {
    titulo: "A tempestade no barco",
    livro: "MRK", de: [4, 35], ate: [4, 41],
    contexto: "Depois de um dia inteiro ensinando a multidão na beira do lago, Jesus pede para atravessar para o outro lado ao anoitecer.",
    leitura: "Os discípulos acordam Jesus com uma acusação: não te importa que a gente morra? Ele não discute, acalma o mar. Depois do silêncio, eles ficam com mais medo do que antes. Agora era medo de outra coisa."
  },
  {
    titulo: "A mulher que tocou o manto",
    livro: "MRK", de: [5, 25], ate: [5, 34],
    contexto: "Jesus vai às pressas para a casa de um líder cuja filha está morrendo. Pela lei, uma mulher com hemorragia era impura e não podia tocar em ninguém.",
    leitura: "Ela queria ser curada sem ninguém ver. Jesus para tudo e pergunta quem foi. Não era para expor, era para chamar ela de filha na frente de todo mundo. Doze anos sendo evitada, e agora alguém olhava para ela."
  },
  {
    titulo: "O paralítico que desceu pelo telhado",
    livro: "MRK", de: [2, 1], ate: [2, 12],
    contexto: "Jesus voltou para Cafarnaum e a notícia se espalhou. A casa ficou tão cheia que não dava nem para chegar à porta.",
    leitura: "Quatro amigos abriram um buraco no telhado de outra pessoa. O texto diz que Jesus viu a fé deles, dos amigos. Tem hora que alguém precisa ser carregado pela fé dos outros."
  },
  {
    titulo: "O jovem rico",
    livro: "MRK", de: [10, 17], ate: [10, 22],
    contexto: "Jesus está pegando a estrada, a caminho de Jerusalém, quando um homem chega correndo e se ajoelha diante dele.",
    leitura: "Antes de dizer a parte difícil, Jesus olhou para ele e o amou. O rapaz foi embora triste, e ninguém correu atrás. Amar alguém também é deixar a pessoa escolher."
  },
  {
    titulo: "O cego Bartimeu",
    livro: "MRK", de: [10, 46], ate: [10, 52],
    contexto: "Jericó é a última cidade antes de Jerusalém. Jesus passa cercado de gente, e na beira da estrada há um cego pedindo esmola.",
    leitura: "Todo mundo manda ele calar a boca e ele grita mais alto. Depois Jesus pergunta o óbvio: o que você quer? Parece que dizer em voz alta o que a gente quer faz parte da cura."
  },
  {
    titulo: "A oferta da viúva",
    livro: "MRK", de: [12, 41], ate: [12, 44],
    contexto: "São os últimos dias de Jesus antes de ser preso. Ele está no templo e acabou de criticar os mestres da lei que exploram as viúvas.",
    leitura: "Jesus estava sentado, olhando as pessoas colocarem dinheiro. Só ele reparou nas duas moedinhas. Ninguém mais viu, e talvez ela nunca tenha sabido que alguém viu."
  },
  {
    titulo: "Pedro anda sobre as águas",
    livro: "MAT", de: [14, 22], ate: [14, 33],
    contexto: "Jesus acabou de alimentar cinco mil pessoas. Ele manda os discípulos atravessarem o lago e sobe sozinho ao monte para orar.",
    leitura: "Pedro afunda quando olha para o vento. Mas foi o único que saiu do barco. Os outros ficaram secos e nunca souberam como era pisar na água."
  },
  {
    titulo: "O bom samaritano",
    livro: "LUK", de: [10, 25], ate: [10, 37],
    contexto: "Judeus e samaritanos se desprezavam havia séculos. Um especialista na lei vem testar Jesus com uma pergunta.",
    leitura: "O homem pergunta quem é o próximo dele, querendo saber até onde precisa ir. Jesus devolve outra pergunta: quem agiu como próximo? Não é sobre quem merece ajuda, é sobre quem a gente escolhe ser."
  },
  {
    titulo: "Marta e Maria",
    livro: "LUK", de: [10, 38], ate: [10, 42],
    contexto: "Em viagem, Jesus para na casa de duas irmãs que eram suas amigas próximas.",
    leitura: "Marta não estava fazendo nada errado, estava servindo. O problema era a irritação, e a cobrança em cima da irmã. Dá para estar ocupado fazendo uma coisa boa e perder a melhor."
  },
  {
    titulo: "A ovelha perdida",
    livro: "LUK", de: [15, 1], ate: [15, 7],
    contexto: "Os religiosos reclamam porque Jesus anda com cobradores de impostos e gente de má fama, e ainda come com eles.",
    leitura: "A conta não fecha: deixar noventa e nove para buscar uma. Mas quem já foi a uma sabe que essa matemática faz todo sentido."
  },
  {
    titulo: "O filho que voltou",
    livro: "LUK", de: [15, 11], ate: [15, 32],
    contexto: "Ainda respondendo aos religiosos que reclamavam, Jesus conta a terceira história seguida sobre algo perdido.",
    leitura: "O pai viu o filho quando ele ainda estava longe, então devia estar olhando a estrada fazia tempo. E a história acaba sem a gente saber se o irmão mais velho entrou na festa. Talvez porque cada um decide isso sozinho."
  },
  {
    titulo: "Zaqueu sobe na árvore",
    livro: "LUK", de: [19, 1], ate: [19, 10],
    contexto: "Zaqueu é chefe dos cobradores de impostos em Jericó. Para o povo, ele era um traidor que enriquecia trabalhando para Roma.",
    leitura: "Um homem rico e importante subindo numa árvore feito criança, só para ver. Jesus não dá sermão, convida a si mesmo para jantar. A mudança de Zaqueu veio depois de ser aceito, não antes."
  },
  {
    titulo: "Pedro nega três vezes",
    livro: "LUK", de: [22, 54], ate: [22, 62],
    contexto: "Horas antes, Pedro jurou que iria com Jesus até a morte. Agora Jesus foi preso e levado para a casa do sumo sacerdote.",
    leitura: "Depois do galo cantar, o Senhor se virou e olhou para Pedro. Não diz que foi um olhar de bronca. Foi esse olhar que fez ele chorar."
  },
  {
    titulo: "No caminho de Emaús",
    livro: "LUK", de: [24, 13], ate: [24, 35],
    contexto: "É o domingo depois da crucificação. Algumas mulheres disseram que o túmulo estava vazio, mas quase ninguém acreditou.",
    leitura: "Eles andaram quilômetros conversando com Jesus sem saber quem era. Só reconheceram quando ele partiu o pão. Às vezes a gente só entende quem estava do nosso lado na hora mais simples."
  },
  {
    titulo: "A mulher no poço",
    livro: "JHN", de: [4, 5], ate: [4, 26],
    contexto: "Jesus atravessa Samaria, região que os judeus evitavam. Cansado da viagem, senta-se sozinho perto de um poço.",
    leitura: "Ela foi buscar água ao meio-dia, a hora em que ninguém vai, provavelmente para não encontrar ninguém. E foi justo ali que teve a conversa mais longa que Jesus tem com alguém nos evangelhos."
  },
  {
    titulo: "Os cinco pães e dois peixes",
    livro: "JHN", de: [6, 5], ate: [6, 13],
    contexto: "Uma multidão seguiu Jesus até um lugar afastado, do outro lado do lago. Já é tarde e não há onde comprar comida.",
    leitura: "André aponta o menino e já desconta: mas o que é isso para tanta gente? Mesmo assim levou. O pouco só serviu porque alguém teve coragem de entregar mesmo achando que era pouco."
  },
  {
    titulo: "A mulher pega em adultério",
    livro: "JHN", de: [8, 1], ate: [8, 11],
    contexto: "Os religiosos procuram um jeito de acusar Jesus. A lei de Moisés mandava apedrejar quem fosse pego em adultério.",
    leitura: "Os mais velhos foram os primeiros a ir embora. Faz sentido: tiveram mais tempo para acumular coisa na consciência. No fim só sobram os dois, e ele não a condena, mas também não finge que nada aconteceu."
  },
  {
    titulo: "Jesus chora por Lázaro",
    livro: "JHN", de: [11, 32], ate: [11, 44],
    contexto: "Lázaro, amigo de Jesus e irmão de Marta e Maria, morreu há quatro dias. Jesus chega a Betânia depois do enterro.",
    leitura: "Ele sabia que ia ressuscitar Lázaro dali a pouco, e mesmo assim chorou. Não chorou por falta de esperança. Chorou porque os amigos estavam sofrendo, e isso bastava."
  },
  {
    titulo: "Jesus lava os pés",
    livro: "JHN", de: [13, 1], ate: [13, 15],
    contexto: "É a última ceia, na noite antes da crucificação. Lavar os pés dos convidados era tarefa do servo mais baixo da casa.",
    leitura: "Pedro não aceita no começo, e faz sentido: é desconfortável ser servido por quem você admira. Deixar alguém cuidar da gente também exige humildade."
  },
  {
    titulo: "Pedro na beira do lago",
    livro: "JHN", de: [21, 15], ate: [21, 19],
    contexto: "Depois da ressurreição, alguns discípulos voltaram a pescar na Galileia. Jesus aparece na praia e prepara comida para eles.",
    leitura: "Três negações, três perguntas: você me ama? Pedro fica triste na terceira. Mas Jesus não está cobrando a dívida, está dando a ele uma resposta para cada vez que falhou."
  },
  {
    titulo: "O etíope na estrada",
    livro: "ACT", de: [8, 26], ate: [8, 39],
    contexto: "Um alto funcionário da rainha da Etiópia foi adorar em Jerusalém e está voltando para casa, lendo o profeta Isaías na carruagem.",
    leitura: "Ele estava lendo e não entendia, e admitiu: como vou entender se ninguém me explica? Depois seguiu o caminho alegre, sozinho. Precisou de alguém só por um trecho da estrada."
  },
  {
    titulo: "Paulo e Silas cantam na prisão",
    livro: "ACT", de: [16, 25], ate: [16, 34],
    contexto: "Em Filipos, Paulo e Silas foram espancados em público e jogados na prisão, com os pés presos no tronco.",
    leitura: "As portas abrem e eles não fogem. Ficam por causa do carcereiro, que ia se matar. Liberdade, aqui, foi poder escolher ficar por alguém."
  }
];
