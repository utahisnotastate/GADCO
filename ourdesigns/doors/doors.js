odApp.controller('TabController', ['$scope', function($scope) {
    $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
}]);

odApp.controller("RepeatGlass", function(){
    this.glasses = [
        {
            name: "Angel Hair",
            productID: "angelhair"
            
        },{
            name: "Chartreuse",
            productID: "chartreuse"
            
        },{
            name: "Chartreuse",
            productID: "chartreuse"
            
        },{
            name: "Clear Atlas",
            productID: "clearatlas"
            
        },{
            name: "Crystal",
            productID: "crystal"
            
        },{
            name: "Emerald",
            productID: "emerald"
            
        },{
            name: "Frosted Atlas",
            productID: "frostedatlas"
            
        },{
            name: "Lemon Lime",
            productID: "lemonlime"
            
        },{
            name: "Pacific Green",
            productID: "pacificgreen"
            
        },{
            name: "Perrsimmon",
            productID: "perrsimmon"
            
        },{
            name: "Pink Orchard",
            productID: "pinkorchard"
            
        },{
            name: "Scarlet",
            productID: "scarlet"
            
        },{
            name: "Shamrock",
            productID: "shamrock"
            
        },{
            name: "Silk",
            productID: "silk"
            
        },{
            name: "Silver Diamond",
            productID: "silverdiamond"
            
        },{
            name: "Snow Flower",
            productID: "snowflower"
            
        },{
            name: "Two Way",
            productID: "twoway"
            
        },{
            name: "Violet Diamond",
            productID: "violetdiamond"
            
        },{
            name: "Washboard",
            productID: "washboard"
            
        },{
            name: "Water Curtain",
            productID: "watercurtain"
            
        },{
            name: "Waterfall",
            productID: "waterfall"
            
        },{
            name: "White Diamond",
            productID: "whitediamond"
            
        },{
            name: "Wispy",
            productID: "wispy"
            
        },{
            name: "Yellow Diamond",
            productID: "yellowdiamond"
            
        }
        
        
    ];
    
    
});

odApp.controller("RepeatMahogany", function(){
    this.mahstains = [
        {
            name: "Clear Coat",
            productID: "100M"
        },{
            name: "Ebony",
            productID: "101M"
        },{
            name: "Plum",
            productID: "102M"
        },{
            name: "Cinnamon",
            productID: "103M"
        },{
            name: "Cedar",
            productID: "104M"
        },{
            name: "Hickory",
            productID: "105M"
        },{
            name: "Oak",
            productID: "106M"
        },{
            name: "Orangewood",
            productID: "107M"
        },{
            name: "Modern Mahogony",
            productID: "121M"
        },{
            name: "Brazilnut",
            productID: "125M"
        }
    ];
    
});

odApp.controller("RepeatAlder", function(){
    this.aldstains = [
        {
            name: "Clear Coat",
            productID: "100A"
        },{
            name: "Ebony",
            productID: "101A"
        },{
            name: "Plum",
            productID: "102A"
        },{
            name: "Cinnamon",
            productID: "103A"
        },{
            name: "Cedar",
            productID: "104A"
        },{
            name: "Hickory",
            productID: "105A"
        },{
            name: "Oak",
            productID: "106A"
        },{
            name: "Orangewood",
            productID: "107A"
        },{
            name: "Modern Mahogony",
            productID: "121A"
        },{
            name: "Brazilnut",
            productID: "125A"
        }
    ];
    
});