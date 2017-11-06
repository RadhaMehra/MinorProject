var Test = angular.module('onlineTest',['ngRoute']);     //module
Test.config(function ($routeProvider) {
	$routeProvider
	.when('/login',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'

	})
	.when('/',{
		templateUrl: 'pages/home.html',
		controller: 'mainController'
	})

	.when('/register',{
		templateUrl: 'pages/register.html',
		controller: 'RegisterController'
	})
	.when('/cse',{
		templateUrl: 'pages/cse.html',
		controller: 'CseController'
	})
	.when('/civ',{
		templateUrl: 'pages/civ.html',
		controller: 'CivController'
	})
	.when('/ee',{
		templateUrl: 'pages/ee.html',
		controller: 'EeController'
	})
	.when('/Ece',{
		templateUrl: 'pages/ece.html',
		controller: 'EceController'
	})
	.when('/mech',{
		templateUrl: 'pages/mech.html',
		controller: 'MechController'
	})

})

Test.controller('mainController', function($scope,$location){				//mainController

      $scope.goToRegister = function() {
           console.log('Go to register');
          $location.url('register');
        }
				$scope.goToLogin = function() {
					 console.log('Go to home page')
					$location.url('login');
				}

})
Test.controller('loginController',function($scope,$location) {						//loginController
	$scope.goToRegister = function() {
			 console.log('Go to register');
			$location.url('register');
		}
})
Test.controller('RegisterController',function($scope,$location) {				//RegisterController
	$scope.goToRegister = function() {
		 console.log('Go to home page')
		$location.url('register');
	}
})
Test.controller('CseController',function($scope,$location) {						//CseController
	$scope.goToCse = function() {
		 console.log('Go to cse page')
		$location.url('cse');
	}
})
Test.controller('CivController',function($scope,$location) {						//CivController
	$scope.goToCiv = function() {
		 console.log('Go to civil page')
		$location.url('civ');
	}
})
Test.controller('EceController',function($scope,$location) {						//EceController
	$scope.goToEce = function() {
		 console.log('Go to Ece page')
		$location.url('ece');
	}
})
Test.controller('EeController',function($scope,$location) {						//EeController
	$scope.goToEe = function() {
		 console.log('Go to Ee page')
		$location.url('ee');
	}
})
Test.controller('MechController',function($scope,$location) {						//MechController
	$scope.goToMech = function() {
		 console.log('Go to Mech page')
		$location.url('mech');
	}
})
