angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AidsCtrl', function($scope, aidService) {
  	$scope.aids = aidService.all();

  	if(window && window.FirebasePlugin){
  		window.FirebasePlugin.logEvent("page_view", {page: "menu"});
	}
	$scope.$on('$ionicView.beforeEnter', function(){
	  window.screen.lockOrientation('portrait');
	});

})

.controller('AidDetailCtrl', function($scope, $stateParams, $ionicSlideBoxDelegate, aidService) {
  	$scope.$on('$ionicView.beforeEnter', function(){
		$ionicSlideBoxDelegate.slide(0);
		$scope.aid = aidService.get($stateParams.aidId);
		window.screen.lockOrientation('landscape');
	});

	$scope.$on('$ionicView.enter', function(){
		$ionicSlideBoxDelegate.update();
	});
})

.controller('AidQuizCtrl', function($scope, $stateParams, $ionicScrollDelegate ,aidService) {
	$scope.aid = aidService.get($stateParams.aidId);

	$scope.aidNextId = parseInt($stateParams.aidId) + 1;

	$scope.nextAid = aidService.get($scope.aidNextId);

	if($scope.nextAid){
		$scope.nextAidName  = $scope.nextAid.name;	
	}

	$scope.questions = $scope.aid.quiz.questions;
	$scope.hasAnswered = false;
	$scope.radioawn = [];

	$scope.$on('$ionicView.beforeEnter', function(){
	  	$scope.hasAnswered = false;
	  	$scope.radioawn = [];
	  	$ionicScrollDelegate.scrollTop(true);
		window.screen.lockOrientation('landscape');
	});

	$scope.send = function(){
		$ionicScrollDelegate.scrollTop(true);
		$scope.hasAnswered = true;

		$scope.questions.forEach(function(question, idx){
			var selectedAwns = question.awnsers[$scope.radioawn[idx]];
			var correctAwns = question.awnsers[question.correct];
			var isCorrect = selectedAwns === correctAwns;

			var choice = isCorrect ? "certa" : "errada"
			var logObj = {
				 "resp" : $scope.radioawn[idx] + 1
			}

			if(window && window.FirebasePlugin){
				window.FirebasePlugin.logEvent($scope.aid.alias+"_Q_"+ (idx+1)+"_resp_"+ choice, logObj);	
			}else{
				console.log(">Firebase event not logged<");
				console.info($scope.aid.alias+"_Q_"+ (idx+1)+"_resp_"+ choice);
				console.info(logObj);
			}
		})
	}

	$scope.select = function(selected, question, parentIdx){
		$scope.radioawn[parentIdx] = selected;
	}
});
