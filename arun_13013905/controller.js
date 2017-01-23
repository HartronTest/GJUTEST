var app = angular.module('myApp', ['ng-route']);
app.controller('myCtrl', function($scope) {
    
	console.log("Hello world from controller.");

$scope.submitForm = function() {
		$http({
          method  : 'POST',
          url     : 'clone.php',
          data    : $scope.user, //forms user object
          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         })
          .success(function(data) {
            if (data.errors) {
              // Showing errors.
             console.log("error");
            } 
            else {
             
            }
          });
        };
    });

	$scope.reset = function() {
        $scope.data = angular.copy($scope.master);
    };
    $scope.reset();
});