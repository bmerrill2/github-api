var app = angular.module('github-api');

app.controller('githubController', function($scope, githubService){
  
  $scope.getUserData = function() {
    $scope.getUser = githubService.getUser($scope.searchText)
    .then(function(res){
      $scope.user = res.data;
      console.log($scope.user)
    });
  };
  
  
});