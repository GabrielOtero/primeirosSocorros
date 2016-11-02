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
})

.controller('AidQuizCtrl', function($scope, $stateParams, $ionicScrollDelegate, aidService) {
	$scope.questions = aidService.get($stateParams.aidId).quiz.questions;

	$scope.hasAnswered = false;

	$scope.send = function(){
		$scope.hasAnswered = true;
		$ionicScrollDelegate.scrollTop(true);
	}

	$scope.bla = function(selected, question){
		if(selected == question.correct){
			console.info(question.title);
			console.info("correct");
		}
		$scope.radioawn = selected;
	}
});
