

var tabApp = angular.module('tabApp', ['ngAnimate']);
  tabApp.controller('TabController', ['$scope', function($scope) {
    $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
}]);

tabApp.controller('TabAnim', function(){
    
    this.myArray = ["w3-animate-left", "w3-animate-right", "w3-animate-top", "w3-animate-bottom"];
     this.rand = myArray[Math.floor(Math.random() * myArray.length)]; 
    
});

angular.module('productsApp',[])
    .controller('productCtrl', ['$scope', function($scope){
       $scope.moderndesigns = [
            {
                'productid': 'MTD001', 
                'description': 'first door' 
            },
            {
                'productid': 'MTD002',
                'description': 'second door'
            },
            {
                'productid': 'MTD003',
                'description': 'third door'
            }
            
        ];
        
    }]);
