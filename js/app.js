var app = angular.module("monapp", ['ngRoute']);


app.config(function($routeProvider){
  $routeProvider.
  when('/home', {
    templateUrl:'partials/home.html',
    controller:'homeCtrl',
  }).
  when('/login', {
    templateUrl:'partials/login.html',
    controller:'loginCtrl',
  }).
  otherwise({
    redirectTo: '/home'
  });
});


app.controller('loginCtrl', ['$scope', '$http', function($scope, $http) {        
            this.login = function() {
                var encodedString = 'username=' +
                    encodeURIComponent(this.inputData.username) +
                    '&password=' +
                    encodeURIComponent(this.inputData.password);
 
                $http({
                    method: 'POST',
                    url: 'api/login.php',
                    data: encodedString,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                
                .success(function(data) {
                        //console.log(data);
                        if ( data.trim() === 'correct') {
                            window.location.href = 'success.html';
                        } else {
                            $scope.errorMsg = "Username and password do not match.";
                        }
                })            
            }
    }]);