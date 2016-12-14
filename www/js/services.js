angular.module('starter.services', [])

.factory('aidService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var aids = [
  {
    id: 0,
    name: 'O que é',
    steps: ["img/sobre/sobre1.png"]
  },
  {
    id: 1,
    name: 'Trauma',
    alias: 'Trauma',
    steps: ["img/trauma/trauma1.png", "img/trauma/trauma2.png", 
            "img/trauma/trauma3.png", "img/trauma/trauma4.png", 
            "img/trauma/trauma5.png", ],
    quiz: {
            questions: [
              {
                title: "O que é um trauma?",
                awnsers: ["É um tipo de fratura óssea.", "É uma doença transmitida pelo ar.", "É uma doença do coração.", "É uma lesão causada por um golpe ou impacto."],
                correct: 3
              },
              {
                title: "Qual a primeira coisa a se fazer em uma situação de trauma?",
                awnsers: ["Tocar no ombro da vítima sem movimentá-la.", "Chamar a pessoa pelo nome, se possível.", "Não movimentar a pessoa, para não causar maiores problemas.", "Segurar a cabeça."],
                correct: 2
              },
              {
                title: "Qual situação não caracteriza uma situação que pode gerar um trauma?",
                awnsers: ["Acidente de carro.", "Engasgo.", "Queda de lugares altos.", "Esmagamento."],
                correct: 1
              }
            ]
          }
  },
  {
    id: 2,
    name: 'Engasgo',
    alias: 'Engasgo',
    steps: ["img/engasgo/engasgo1.png", "img/engasgo/engasgo2.png", 
            "img/engasgo/engasgo3.png", "img/engasgo/engasgo4.png", 
            "img/engasgo/engasgo5.png" ],
    quiz: {
            questions: [
              {
                title: "O que é um engasgo?",
                awnsers: ["É um corpo estranho que impede a passagem do ar até chegar no pulmão.", "É uma doença do pulmão.", "É quando o cérebro fica sem oxigênio.", "É um tipo de queda."],
                correct: 0
              },
              {
                title: "Qual é o lugar que se posiciona o polegar para realizar a manobra de desengasgo?",
                awnsers: ["No meio do peito da pessoa.", "No umbigo da pessoa.", "Acima do umbigo da pessoa.", "Abaixo do umbigo da pessoa."],
                correct: 2
              },
              {
                title: "O que não deve se fazer na manobra de desengasgo em bebês menores de 1 ano?",
                awnsers: ["Golpear 5 vezes as costas do bebê.", "Colocar o bebê para cima.", "Fazer 5 compressões torácicas.", "Colocar o bebê para baixo."],
                correct: 1
              }
            ]
          }
  },
  {
    id: 3,
    name: 'Convulsão',
    alias: 'Convulsao',
    steps: ["img/convulcao/convulcao1.png", "img/convulcao/convulcao2.png", 
            "img/convulcao/convulcao3.png", "img/convulcao/convulcao4.png"],
    quiz: {
            questions: [
              {
                title: "O que é Convulsão?",
                awnsers: ["É quando uma pessoa que desmaia com o corpo tenso e apresenta movimento.", "É uma doença contagiosa que não pode se aproximar da pessoa.", "É quando a pessoa desmaia e apresenta movimentos na tentativa de se levantar.", "É uma doença que causa problemas no cérebro e deixa a pessoa acamada."],
                correct: 0
              },
              {
                title: "Qual é a primeira coisa a se fazer com a pessoa que está tendo convulsão?",
                awnsers: ["Tentar impedir os movimentos.", "Abrir a boca da pessoa.", "Ligar para o SAMU.", "Dar água ou remédio para a pessoa."],
                correct: 2
              },
              {
                title: "O que não deve se fazer com uma pessoa que está tendo convulsão?",
                awnsers: ["Afastar tudo que estiver por perto da pessoa.", "Abrir a boca da pessoa.", "Ligar para o SAMU.", "Afrouxar roupas e esperar que os movimentos parem."],
                correct: 1
              }
            ]
          }
  },
  {
    id: 4,
    name: 'Desmaio',
    alias: 'Desmaio',
    steps: ["img/desmaio/desmaio1.png", "img/desmaio/desmaio2.png"],
    quiz: {
            questions: [
              {
                title: "O que é Desmaio?",
                awnsers: ["É quando a pessoa cai depois de tropeçar em algo.", "É a perda temporária e repentina da consciência.", "É a perda do equilíbrio.", "Sempre vai acontecer nas pessoas que vão começar a convulsionar."],
                correct: 1
              },
              {
                title: "O que deve ser feito com a pessoa que desmaia?",
                awnsers: ["Deixar a pessoa de pé e esperar o socorro.", "Deixar a pessoa deitada com a cabeça mais alta que o corpo até o socorro chegar.", "Deixar a pessoa sozinha e chamar o socorro.", "Deixar a pessoa deitada com a cabeça mais baixa que o corpo até o socorro chegar."],
                correct: 3
              },
              {
                title: "O que não deve ser feito com a pessoa que desmaia?",
                awnsers: ["Deixar a pessoa de pé e esperar o socorro.", "Ficar do lado da pessoa até o socorro chegar.", "Chamar Socorro e proporcionar espaço para a pessoa respirar.", "Deixar a pessoa deitada com a cabeça mais baixa que o corpo até o socorro chegar."],
                correct: 0
              }
            ]
          }
  },
  {
    id: 5,
    name: 'Parada Cardiorrespiratória',
    alias: 'Parada',
    steps: ["img/parada/parada1.png", "img/parada/parada2.png", 
            "img/parada/parada3.png", "img/parada/parada4.png", 
            "img/parada/parada5.png", "img/parada/parada6.png"],
    quiz: {
            questions: [
              {
                title: "O que é uma parada cardiorrespiratória?",
                awnsers: ["É quando a pessoa para de respirar e o coração dela para de bater.", "É somente quando a pessoa para de respirar.", "É somente quando o coração para de bater.", "É quando a pessoa precisa de ajuda para respirar."],
                correct: 0
              },
              {
                title: "Como sabemos que a pessoa está tendo uma parada respiratória?",
                awnsers: ["Sentindo a temperatura do corpo.", "Vendo a pessoa desesperada para respirar, movimentando-se para todos os lados", "Vendo o tórax não se mexer, não ouvir o barulho da respiração ou não sentir a saída de ar na pele ao aproximar a mão perto do nariz da pessoa.", "Ouvindo a pessoa chamar socorro, dizendo que não consegue respirar."],
                correct: 2
              },
              {
                title: "O que devemos fazer em toda a parada cardiorrespiratória?",
                awnsers: ["Deixar a pessoa sozinha e procurar ajuda.", "Ficar do lado da pessoa até o socorro chegar.", "Gritar desesperadamente por socorro.", "Ficar do lado da pessoa até começarem as compressões."],
                correct: 1
              },
              {
                title: "Quantas compressões deve se fazer em 1 minuto?",
                awnsers: ["80-100 compressões.", "90-100 compressões.", "90-110 compressões.", "90-120 compressões."],
                correct: 3
              },
              {
                title: "O que é DEA? Quem pode usá-lo?",
                awnsers: ["Dispositivo Externo Automático. Somente o SAMU.", "Desfibrilador Externo Automático. Qualquer pessoa orientada para uso.", "Dispositivo Externo Automático. Qualquer pessoa orientada para uso.", "Desfibrilador Externo Automático. Somente o SAMU."],
                correct: 1
              },
              {
                title: "O que o DEA faz?",
                awnsers: ["Ele analisa o coração da pessoa e aplica um choque para o coração voltar a bater.", "Ele analisa o coração da pessoa e faz compressão no tórax dela.", "Ele aplica um choque no coração da pessoa para que ele volte a bater.", "Ele analisa o coração da pessoa."],
                correct: 0
              }
            ]
          }
  },
  {
    id: 99,
    name: 'Sobre',
    steps: ["img/sobre/sobre1.png", "img/sobre/sobre2.png", 
            "img/sobre/sobre3.png", "img/sobre/sobre4.png", 
            "img/sobre/sobre5.png", ],
  }];

  return {
    all: function() {
      return aids;
    },
    get: function(aidId) {
      for (var i = 0; i < aids.length; i++) {
        if (aids[i].id === parseInt(aidId)) {
          return aids[i];
        }
      }
      return null;
    }
  };
});
