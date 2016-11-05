angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AidsCtrl', function($scope, aidService) {
  $scope.aids = aidService.all();
})

.controller('AidDetailCtrl', function($scope, $stateParams, $ionicSlideBoxDelegate, aidService) {
  $scope.aid = aidService.get($stateParams.aidId);

  $scope.$on('$ionicView.beforeEnter', function(){
		$ionicSlideBoxDelegate.slide(0);
	});
})

.controller('AidQuizCtrl', function($scope, $stateParams, $ionicScrollDelegate ,aidService) {
	$scope.questions = aidService.get($stateParams.aidId).quiz.questions;
	$scope.hasAnswered = false;
	$scope.radioawn = [];

	$scope.$on('$ionicView.beforeEnter', function(){
	  $scope.hasAnswered = false;
	  $scope.radioawn = [];
	  $ionicScrollDelegate.scrollTop(true);

	});

	$scope.send = function(){
		$ionicScrollDelegate.scrollTop(true);
		$scope.hasAnswered = true;
	}

	$scope.select = function(selected, question, parentIdx){
		$scope.radioawn[parentIdx] = selected;
	}
});
