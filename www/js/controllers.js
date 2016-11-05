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
	$scope.aid = aidService.get($stateParams.aidId);
	
	$scope.questions = $scope.aid.quiz.questions;
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

		$scope.questions.forEach(function(question, idx){
			var selectedAwns = question.awnsers[$scope.radioawn[idx]];
			var correctAwns = question.awnsers[question.correct];
			var isCorrect = selectedAwns === correctAwns;

			var logObj = {
				"Pergunta" : question.title,
				"Acertou" : isCorrect ? "Sim" : "Nao",
			}

			if(!isCorrect){
				logObj["Resposta Selecionada"] = selectedAwns;
			}

			if(window && window.FirebasePlugin){
				window.FirebasePlugin.logEvent("Quiz "+ $scope.aid.name, logObj);	
			}else{
				console.log(">Firebase event not logged<");
				console.info("Quiz "+ $scope.aid.name);
				console.info(logObj);
			}
		})

		
	}

	$scope.select = function(selected, question, parentIdx){
		$scope.radioawn[parentIdx] = selected;
	}
});
