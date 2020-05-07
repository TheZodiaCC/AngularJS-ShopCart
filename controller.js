var app = angular.module("App", []);
app.controller("appCtrl", function($scope) {

    $scope.items = [{name:"milk", ammount:1},
    {name:"water", ammount:1}
    ];

    $scope.addItem = function() {  
        if($scope.item)
        {
            if (!$scope.findItem($scope.item)) 
            {
                $scope.newItem = {name:$scope.item, ammount:1};
                $scope.items.push($scope.newItem);
            }
            else 
            {
                tempObj = $scope.findItemIndex($scope.item);
                tempObj.ammount = tempObj.ammount + 1;
            }
        }      
    }

    $scope.findItem = function(name) {
        var result = $scope.items.find(n => n.name === name);

        if(result)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    $scope.findItemIndex = function(name)
    {
        tempObj = $scope.items.find(n => n.name === name);
        console.log(tempObj);
        return tempObj;
    }

    $scope.rmItem = function(index) {
        $scope.items.splice(index, 1);
    }
});