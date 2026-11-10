// Lista de histórias. livro: código do livro (padrão USFM), de/ate: [capítulo, versículo].
// "leitura" é a interpretação curta que aparece depois do texto.
const HISTORIAS = [
  {
    titulo: "Abraão sobe o monte com Isaque",
    livro: "GEN", de: [22, 1], ate: [22, 14],
    leitura: "Isaque carrega a lenha e pergunta pelo cordeiro. O pai responde com uma frase que ele mesmo ainda não entende. Tem dia que a gente sobe o monte só com metade da resposta, e vai assim mesmo."
  },
  {
    titulo: "Caim e Abel",
    livro: "GEN", de: [4, 1], ate: [4, 16],
    leitura: "Antes de qualquer coisa acontecer, Deus avisa Caim: o pecado está na porta, te esperando. Ele teve tempo de mudar. A raiva quase nunca chega de surpresa, ela fica rondando um tempo antes."
  },
  {
    titulo: "A torre de Babel",
    livro: "GEN", de: [11, 1], ate: [11, 9],
    leitura: "Eles queriam fazer um nome para si mesmos. É curioso que o lugar ficou conhecido justamente pelo nome que eles não escolheram: confusão."
  },
  {
    titulo: "Jacó luta a noite inteira",
    livro: "GEN", de: [32, 22], ate: [32, 32],
    leitura: "Jacó sai da luta com uma bênção e mancando. As duas coisas vieram juntas. Ninguém passa uma noite dessas e volta andando igual."
  },
  {
    titulo: "José se revela aos irmãos",
    livro: "GEN", de: [45, 1], ate: [45, 15],
    leitura: "José chora tão alto que o Egito inteiro ouve. Ele tinha poder para se vingar e escolheu chorar. Perdoar, aqui, não parece leve. Parece uma coisa que sai de dentro com barulho."
  },
  {
    titulo: "A sarça que não se apagava",
    livro: "EXO", de: [3, 1], ate: [3, 14],
    leitura: "Moisés estava no trabalho de todo dia, cuidando das ovelhas do sogro. Deus só falou quando ele parou para olhar. Muita coisa importante passa porque a gente não desvia o caminho nem um pouco."
  },
  {
    titulo: "Rute não abandona Noemi",
    livro: "RUT", de: [1, 1], ate: [1, 18],
    leitura: "Noemi manda as noras embora, e ela tinha razão: não havia nada para elas em Belém. Rute fica mesmo assim. Às vezes a lealdade não tem lógica nenhuma, e é por isso que ela vale tanto."
  },
  {
    titulo: "Ana pede um filho",
    livro: "1SA", de: [1, 9], ate: [1, 20],
    leitura: "O sacerdote achou que ela estava bêbada. Ela só estava rezando do jeito que dava, mexendo os lábios sem som. Nem toda oração bonita parece bonita para quem olha de fora."
  },
  {
    titulo: "Samuel ouve chamarem seu nome",
    livro: "1SA", de: [3, 1], ate: [3, 10],
    leitura: "Três vezes o menino corre até Eli, achando que era ele. Foi o velho, já meio cego, que percebeu primeiro de onde vinha a voz. Às vezes a gente precisa de alguém mais velho para entender o que está ouvindo."
  },
  {
    titulo: "Davi e Golias",
    livro: "1SA", de: [17, 32], ate: [17, 50],
    leitura: "Saul empresta a armadura dele e Davi não consegue nem andar. Ele devolve e vai com o que já sabia usar. Tem batalha que não se vence com o equipamento dos outros."
  },
  {
    titulo: "Natã conta a história da ovelhinha",
    livro: "2SA", de: [12, 1], ate: [12, 7],
    leitura: "Davi ficou furioso com o homem rico da história, até descobrir que o homem era ele. É bem mais fácil enxergar o erro quando ele está na vida de outra pessoa."
  },
  {
    titulo: "A viúva de Sarepta",
    livro: "1KI", de: [17, 8], ate: [17, 16],
    leitura: "Ela ia fazer o último pão e esperar a morte. Elias pede que ela faça o dele primeiro. A farinha não acabou, mas também nunca sobrou. Durou um dia de cada vez."
  },
  {
    titulo: "Elias e a voz mansa",
    livro: "1KI", de: [19, 1], ate: [19, 13],
    leitura: "Vento forte, terremoto, fogo, e Deus não estava em nenhum deles. Estava num sussurro. Antes disso, um anjo só mandou Elias comer e dormir. Às vezes o primeiro passo é esse mesmo."
  },
  {
    titulo: "Naamã se lava no Jordão",
    livro: "2KI", de: [5, 1], ate: [5, 14],
    leitura: "Naamã estava pronto para uma coisa grandiosa e ficou ofendido com uma ordem simples. Foram os servos que convenceram ele. O orgulho às vezes atrapalha mais que a doença."
  },
  {
    titulo: "Ester decide entrar",
    livro: "EST", de: [4, 10], ate: [4, 16],
    leitura: "Mardoqueu não diz que vai dar certo. Diz que talvez ela esteja ali para isso. E Ester entra sem garantia nenhuma: se eu morrer, morri. Coragem de verdade é bem assim, sem promessa de final feliz."
  },
  {
    titulo: "Daniel na cova dos leões",
    livro: "DAN", de: [6, 16], ate: [6, 23],
    leitura: "O rei passa a noite sem comer e sem dormir, e quem está na cova é Daniel. O texto não diz como foi a noite de Daniel. Só a do rei, que tinha todo o poder e não conseguiu usar."
  },
  {
    titulo: "Jonas foge para o outro lado",
    livro: "JON", de: [1, 1], ate: [1, 17],
    leitura: "Deus manda ir para Nínive e Jonas compra passagem para o lado oposto. Enquanto a tempestade quebra o navio, ele está dormindo no porão. Dá para fugir de muita coisa dormindo."
  },
  {
    titulo: "Jonas e a planta que secou",
    livro: "JON", de: [4, 1], ate: [4, 11],
    leitura: "Jonas fica com raiva porque Deus perdoou a cidade, e depois fica com raiva de novo porque uma planta morreu. A história termina com uma pergunta sem resposta. Parece que ela ficou para quem está lendo."
  },
  {
    titulo: "A tempestade no barco",
    livro: "MRK", de: [4, 35], ate: [4, 41],
    leitura: "Os discípulos acordam Jesus com uma acusação: não te importa que a gente morra? Ele não discute, acalma o mar. Depois do silêncio, eles ficam com mais medo do que antes. Agora era medo de outra coisa."
  },
  {
    titulo: "A mulher que tocou o manto",
    livro: "MRK", de: [5, 25], ate: [5, 34],
    leitura: "Ela queria ser curada sem ninguém ver. Jesus para tudo e pergunta quem foi. Não era para expor, era para chamar ela de filha na frente de todo mundo. Doze anos sendo evitada, e agora alguém olhava para ela."
  },
  {
    titulo: "O paralítico que desceu pelo telhado",
    livro: "MRK", de: [2, 1], ate: [2, 12],
    leitura: "Quatro amigos abriram um buraco no telhado de outra pessoa. O texto diz que Jesus viu a fé deles, dos amigos. Tem hora que alguém precisa ser carregado pela fé dos outros."
  },
  {
    titulo: "O jovem rico",
    livro: "MRK", de: [10, 17], ate: [10, 22],
    leitura: "Antes de dizer a parte difícil, Jesus olhou para ele e o amou. O rapaz foi embora triste, e ninguém correu atrás. Amar alguém também é deixar a pessoa escolher."
  },
  {
    titulo: "O cego Bartimeu",
    livro: "MRK", de: [10, 46], ate: [10, 52],
    leitura: "Todo mundo manda ele calar a boca e ele grita mais alto. Depois Jesus pergunta o óbvio: o que você quer? Parece que dizer em voz alta o que a gente quer faz parte da cura."
  },
  {
    titulo: "A oferta da viúva",
    livro: "MRK", de: [12, 41], ate: [12, 44],
    leitura: "Jesus estava sentado, olhando as pessoas colocarem dinheiro. Só ele reparou nas duas moedinhas. Ninguém mais viu, e talvez ela nunca tenha sabido que alguém viu."
  },
  {
    titulo: "Pedro anda sobre as águas",
    livro: "MAT", de: [14, 22], ate: [14, 33],
    leitura: "Pedro afunda quando olha para o vento. Mas foi o único que saiu do barco. Os outros ficaram secos e nunca souberam como era pisar na água."
  },
  {
    titulo: "O bom samaritano",
    livro: "LUK", de: [10, 25], ate: [10, 37],
    leitura: "O homem pergunta quem é o próximo dele, querendo saber até onde precisa ir. Jesus devolve outra pergunta: quem agiu como próximo? Não é sobre quem merece ajuda, é sobre quem a gente escolhe ser."
  },
  {
    titulo: "Marta e Maria",
    livro: "LUK", de: [10, 38], ate: [10, 42],
    leitura: "Marta não estava fazendo nada errado, estava servindo. O problema era a irritação, e a cobrança em cima da irmã. Dá para estar ocupado fazendo uma coisa boa e perder a melhor."
  },
  {
    titulo: "A ovelha perdida",
    livro: "LUK", de: [15, 1], ate: [15, 7],
    leitura: "A conta não fecha: deixar noventa e nove para buscar uma. Mas quem já foi a uma sabe que essa matemática faz todo sentido."
  },
  {
    titulo: "O filho que voltou",
    livro: "LUK", de: [15, 11], ate: [15, 32],
    leitura: "O pai viu o filho quando ele ainda estava longe, então devia estar olhando a estrada fazia tempo. E a história acaba sem a gente saber se o irmão mais velho entrou na festa. Talvez porque cada um decide isso sozinho."
  },
  {
    titulo: "Zaqueu sobe na árvore",
    livro: "LUK", de: [19, 1], ate: [19, 10],
    leitura: "Um homem rico e importante subindo numa árvore feito criança, só para ver. Jesus não dá sermão, convida a si mesmo para jantar. A mudança de Zaqueu veio depois de ser aceito, não antes."
  },
  {
    titulo: "Pedro nega três vezes",
    livro: "LUK", de: [22, 54], ate: [22, 62],
    leitura: "Depois do galo cantar, o Senhor se virou e olhou para Pedro. Não diz que foi um olhar de bronca. Foi esse olhar que fez ele chorar."
  },
  {
    titulo: "No caminho de Emaús",
    livro: "LUK", de: [24, 13], ate: [24, 35],
    leitura: "Eles andaram quilômetros conversando com Jesus sem saber quem era. Só reconheceram quando ele partiu o pão. Às vezes a gente só entende quem estava do nosso lado na hora mais simples."
  },
  {
    titulo: "A mulher no poço",
    livro: "JHN", de: [4, 5], ate: [4, 26],
    leitura: "Ela foi buscar água ao meio-dia, a hora em que ninguém vai, provavelmente para não encontrar ninguém. E foi justo ali que teve a conversa mais longa que Jesus tem com alguém nos evangelhos."
  },
  {
    titulo: "Os cinco pães e dois peixes",
    livro: "JHN", de: [6, 5], ate: [6, 13],
    leitura: "André aponta o menino e já desconta: mas o que é isso para tanta gente? Mesmo assim levou. O pouco só serviu porque alguém teve coragem de entregar mesmo achando que era pouco."
  },
  {
    titulo: "A mulher pega em adultério",
    livro: "JHN", de: [8, 1], ate: [8, 11],
    leitura: "Os mais velhos foram os primeiros a ir embora. Faz sentido: tiveram mais tempo para acumular coisa na consciência. No fim só sobram os dois, e ele não a condena, mas também não finge que nada aconteceu."
  },
  {
    titulo: "Jesus chora por Lázaro",
    livro: "JHN", de: [11, 32], ate: [11, 44],
    leitura: "Ele sabia que ia ressuscitar Lázaro dali a pouco, e mesmo assim chorou. Não chorou por falta de esperança. Chorou porque os amigos estavam sofrendo, e isso bastava."
  },
  {
    titulo: "Jesus lava os pés",
    livro: "JHN", de: [13, 1], ate: [13, 15],
    leitura: "Pedro não aceita no começo, e faz sentido: é desconfortável ser servido por quem você admira. Deixar alguém cuidar da gente também exige humildade."
  },
  {
    titulo: "Pedro na beira do lago",
    livro: "JHN", de: [21, 15], ate: [21, 19],
    leitura: "Três negações, três perguntas: você me ama? Pedro fica triste na terceira. Mas Jesus não está cobrando a dívida, está dando a ele uma resposta para cada vez que falhou."
  },
  {
    titulo: "O etíope na estrada",
    livro: "ACT", de: [8, 26], ate: [8, 39],
    leitura: "Ele estava lendo e não entendia, e admitiu: como vou entender se ninguém me explica? Depois seguiu o caminho alegre, sozinho. Precisou de alguém só por um trecho da estrada."
  },
  {
    titulo: "Paulo e Silas cantam na prisão",
    livro: "ACT", de: [16, 25], ate: [16, 34],
    leitura: "As portas abrem e eles não fogem. Ficam por causa do carcereiro, que ia se matar. Liberdade, aqui, foi poder escolher ficar por alguém."
  }
];
