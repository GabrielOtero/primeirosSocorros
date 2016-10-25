angular.module('starter.services', [])

.factory('aidService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var aids = [{
    id: 0,
    name: 'Trauma'
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
