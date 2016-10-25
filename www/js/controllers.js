angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AidsCtrl', function($scope, aidService) {
  $scope.aids = aidService.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('AidDetailCtrl', function($scope, $stateParams, aidService) {
  $scope.aid = aidService.get($stateParams.aidId);
});
