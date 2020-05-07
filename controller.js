var app = angular.module("App", []);
app.controller("appCtrl", function($scope) {

    $scope.items = [];

    $scope.error = "";

    $scope.addItem = function() {       
        if ($scope.items.indexOf($scope.item) == -1) 
        {
            $scope.items.push($scope.item);
        }
        else 
        {
            
        }
    }

    $scope.rmItem = function(index) {
        $scope.items.splice(index, 1);
    }
});