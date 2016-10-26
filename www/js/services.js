angular.module('starter.services', [])

.factory('aidService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var aids = [
  {
    id: 1,
    name: 'Trauma',
    steps: ["../img/trauma/trauma1.png", "../img/trauma/trauma2.png", 
            "../img/trauma/trauma3.png", "../img/trauma/trauma4.png", 
            "../img/trauma/trauma5.png", ],
    quiz: {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend tincidunt turpis nec viverra?",
            awnsers: ["Curabitur vel", "Felis eli", "Vivamus volutpat", "Lectus efficitur"],
            correct: 2
          }
  },
  {
    id: 2,
    name: 'Engasgo',
    steps: ["../img/engasgo/engasgo1.png", "../img/engasgo/engasgo2.png", 
            "../img/engasgo/engasgo3.png", "../img/engasgo/engasgo4.png", 
            "../img/engasgo/engasgo5.png", ],
    quiz: {
            question: "",
            awnsers: [""],
            correct: 0
          }
  },
  {
    id: 3,
    name: 'Convulção',
    steps: ["../img/convulcao/convulcao1.png", "../img/convulcao/convulcao2.png", 
            "../img/convulcao/convulcao3.png", "../img/convulcao/convulcao4.png"],
    quiz: {
            question: "",
            awnsers: [""],
            correct: 0
          }
  },
  {
    id: 4,
    name: 'Desmaio',
    steps: ["../img/desmaio/desmaio1.png", "../img/desmaio/desmaio2.png"],
    quiz: {
            question: "",
            awnsers: [""],
            correct: 0
          }
  },
  {
    id: 5,
    name: 'Parada Cardiorrespiratória',
    steps: ["../img/parada/parada1.png", "../img/parada/parada2.png", 
            "../img/parada/parada3.png", "../img/parada/parada4.png", 
            "../img/parada/trauma5.png", "../img/parada/trauma6.png"],
    quiz: {
            question: "",
            awnsers: [""],
            correct: 0
          }
  },
  {
    id: 99,
    name: 'Sobre',
    steps: ["../img/sobre/sobre1.png", "../img/sobre/sobre2.png", 
            "../img/sobre/sobre3.png", "../img/sobre/sobre4.png", 
            "../img/sobre/sobre5.png", ],
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
