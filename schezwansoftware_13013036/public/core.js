// app.js
angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.sushi = [
    { name: 'vijay', fish: 'chandigarh', visiting: 2 },
    { name: 'mohan', fish: 'agroha', visiting: 4 },
    { name: 'mukesh', fish: 'delhi', visiting: 7 },
    { name: 'ajay', fish: 'kanpur', visiting: 6 }
  ];

  $scope.addEmployee()=function(employee){
$scope.sushi.push(employee);
  };
  
});