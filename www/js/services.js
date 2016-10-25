angular.module('starter.services', [])

.factory('aidService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var aids = [
  {
    id: 0,
    name: 'Trauma',
    steps: ["../img/adam.jpg", "../img/ben.png", "../img/ionic.png"],
    quiz: {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend tincidunt turpis nec viverra?",
            awnsers: ["Curabitur vel", "Felis eli", "Vivamus volutpat", "Lectus efficitur"],
            correct: 2
          }
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
