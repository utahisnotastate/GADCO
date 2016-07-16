var odApp = angular.module('odApp', ['angularUtils.directives.dirPagination']);


odApp.controller('ctrl', ['$scope', function($scope) {
			$scope.activeTemplate = 'partials/content.html';
		}]);
        
odApp.controller("RepeatDoor", function() {
    this.doors = [{
            productID: "MTD001",
            productline: "Modern Design",
            description: "Description for MTD001",
            image: "images/MTD001.jpeg"

        }, {
            productID: "MTD003",
            productline: "Modern Design",
            description: "Description for MTD003",
            image: "images/MTD003.jpeg"
        }, {
            productID: "MTD005",
            productline: "Modern Design",
            description: "Description for MTD005",
            image: "images/MTD005.jpeg"
        }, {
            productID: "MTD006",
            productline: "Modern Design",
            description: "Description for MTD006",
            image: "images/MTD006.jpeg"
        }, {
            productID: "MTD007",
            productline: "Modern Design",
            description: "Description for MTD007",
            image: "images/MTD007.jpeg"
        }, {
            productID: "MTD008",
            productline: "Modern Design",
            description: "Description for MTD008",
            image: "images/MTD008.jpeg"
        }, {
            productID: "MTD010",
            productline: "Modern Design",
            description: "Description for MTD010",
            image: "images/MTD010.jpeg"
        }, {
            productID: "MTD0011",
            productline: "Modern Design",
            description: "Description for MTD011",
            image: "images/MTD011.jpeg"
        }, {
            productID: "MTD0013",
            productline: "Modern Design",
            description: "Description for MTD013",
            image: "images/MTD013.jpeg"
        }, {
            productID: "MTD0013",
            productline: "Modern Design",
            description: "Description for MTD013",
            image: "images/MTD013.jpeg"
        }, {
            productID: "MTD0014",
            productline: "Modern Design",
            description: "Description for MTD014",
            image: "images/MTD014.jpeg"
        }, {
            productID: "MTD0015",
            productline: "Modern Design",
            description: "Description for MTD015",
            image: "images/MTD015.jpeg"
        }, {
            productID: "MTD0016",
            productline: "Modern Design",
            description: "Description for MTD016",
            image: "images/MTD016.jpeg"
        }, {
            productID: "MTD0017",
            productline: "Modern Design",
            description: "Description for MTD017",
            image: "images/MTD017.jpeg"
        }, {
            productID: "MTD0018",
            productline: "Modern Design",
            description: "Description for MTD018",
            image: "images/MTD018.jpeg"
        }, {
            productID: "MTD0019",
            productline: "Modern Design",
            description: "Description for MTD019",
            image: "images/MTD019.jpeg"
        }, {
            productID: "MTD0020",
            productline: "Modern Design",
            description: "Description for MTD020",
            image: "images/MTD020.jpeg"
        }, {
            productID: "MTD0021",
            productline: "Modern Design",
            description: "Description for MTD021",
            image: "images/MTD021.jpeg"
        },
        {
            productID: "MTD022",
            productline: "Modern Design",
            description: "Description for MTD022",
            image: "images/MTD006.jpeg"

        },{
            productID: "MTS001",
            productline: "Modern Design",
            description: "Description for MTS001",
            image: "images/MTS001.jpeg"
        }, {
            productID: "MTS002",
            productline: "Modern Design",
            description: "Description for MTS002",
            image: "images/MTS002.jpeg"
        }, {
            productID: "MTS003",
            productline: "Modern Design",
            description: "Description for MTS003",
            image: "images/MTS003.jpeg"
        }, {
            productID: "MTS004",
            productline: "Modern Design",
            description: "Description for MTS004",
            image: "images/MTS004.jpeg"
        }, {
            productID: "MTS005",
            productline: "Modern Design",
            description: "Description for MTS005",
            image: "images/MTS005.jpeg"
        },{
            productID: "MTS006",
            productline: "Modern Design",
            description: "Description for MTS006",
            image: "images/MTS006.jpeg"
        }, {
            productID: "MTS007",
            productline: "Modern Design",
            description: "Description for MTS007",
            image: "images/MTS007.jpeg"
        }, {
            productID: "MTS008",
            productline: "Modern Design",
            description: "Description for MTS008",
            image: "images/MTS008.jpeg"
        }, {
            productID: "MTS009",
            productline: "Modern Design",
            description: "Description for MTS009",
            image: "images/MTS009.jpeg"
        }, {
            productID: "MTS010",
            productline: "Modern Design",
            description: "Description for MTS010",
            image: "images/MTS010.jpeg"
        }, {
            productID: "MTS0011",
            productline: "Modern Design",
            description: "Description for MTS011",
            image: "images/MTS011.jpeg"
        }, {
            productID: "MTS0012",
            productline: "Modern Design",
            description: "Description for MTS012",
            image: "images/MTS012.jpeg"
        }, {
            productID: "MTS0013",
            productline: "Modern Design",
            description: "Description for MTS013",
            image: "images/MTS013.jpeg"
        }, {
            productID: "MTS0014",
            productline: "Modern Design",
            description: "Description for MTS014",
            image: "images/MTS014.jpeg"
        }, {
            productID: "MTS0015",
            productline: "Modern Design",
            description: "Description for MTS015",
            image: "images/MTS015.jpeg"
        }


    ];



});

odApp.controller("RepeatIron", function() {
this.irondoors = [
		{
            productID: "TYD001",
            productline: "Iron Works",
            description: "Description for TYD001",
            image: "images/TYD001.jpeg"

        }, {
            productID: "TYD002",
            productline: "Iron Works",
            description: "Description for TYD002",
            image: "images/TYD002.jpeg"
        }, {
            productID: "TYD003",
            productline: "Iron Works",
            description: "Description for TYD003",
            image: "images/TYD003.jpeg"
        }, {
            productID: "TYD005",
            productline: "Iron Works",
            description: "Description for TYD005",
            image: "images/TYD005.jpeg"
        }, {
            productID: "TYD006",
            productline: "Iron Works",
            description: "Description for TYD006",
            image: "images/TYD006.jpeg"
        }, {
            productID: "TYD007",
            productline: "Iron Works",
            description: "Description for TYD007",
            image: "images/TYD007.jpeg"
        }, {
            productID: "TYD009",
            productline: "Iron Works",
            description: "Description for TYD009",
            image: "images/TYD009.jpeg"
        }, {
            productID: "TYD010",
            productline: "Iron Works",
            description: "Description for TYD010",
            image: "images/TYD010.jpeg"
        }, {
            productID: "TYD0011",
            productline: "Iron Works",
            description: "Description for TYD011",
            image: "images/TYD011.jpeg"
        }, {
            productID: "TYD0012",
            productline: "Iron Works",
            description: "Description for TYD012",
            image: "images/TYD012.jpeg"
        }, {
            productID: "TYD0013",
            productline: "Iron Works",
            description: "Description for TYD013",
            image: "images/TYD013.jpeg"
        },{
            productID: "TYD0016",
            productline: "Iron Works",
            description: "Description for TYD016",
            image: "images/TYD016.jpeg"
        }, {
            productID: "TYD0017",
            productline: "Iron Works",
            description: "Description for TYD017",
            image: "images/TYD017.jpeg"
        }, {
            productID: "TYD0018",
            productline: "Iron Works",
            description: "Description for TYD018",
            image: "images/TYD018.jpeg"
        }, {
            productID: "TYD0019",
            productline: "Iron Works",
            description: "Description for TYD019",
            image: "images/TYD019.jpeg"
        }, {
            productID: "TYD020",
            productline: "Iron Works",
            description: "Description for TYD020",
            image: "images/TYD020.jpeg"
        }, {
            productID: "TYD0023",
            productline: "Iron Works",
            description: "Description for TYD023",
            image: "images/TYD023.jpeg"
        }, {
            productID: "TYD0024",
            productline: "Iron Works",
            description: "Description for TYD024",
            image: "images/TYD024.jpeg"
        }, {
            productID: "TYD0026",
            productline: "Iron Works",
            description: "Description for TYD026",
            image: "images/TYD026.jpeg"
        }, {
            productID: "TYD0027",
            productline: "Iron Works",
            description: "Description for TYD027",
            image: "images/TYD027.jpeg"
        }, {
            productID: "TYD0029",
            productline: "Iron Works",
            description: "Description for TYD029",
            image: "images/TYD029.jpeg"
        },
        {
            productID: "TYD030",
            productline: "Iron Works",
            description: "Description for TYD030",
            image: "images/TYD030.jpeg"

        },{
            productID: "TYS001",
            productline: "Modern Design",
            description: "Description for TYS001",
            image: "images/TYS001.jpeg"

        }, {
            productID: "TYS002",
            productline: "Modern Design",
            description: "Description for TYS002",
            image: "images/TYS002.jpeg"
        }, {
            productID: "TYS003",
            productline: "Modern Design",
            description: "Description for TYS003",
            image: "images/TYS003.jpeg"
        }, {
            productID: "TYS005",
            productline: "Modern Design",
            description: "Description for TYS005",
            image: "images/TYS005.jpeg"
        }, {
            productID: "TYS006",
            productline: "Modern Design",
            description: "Description for TYS006",
            image: "images/TYS006.jpeg"
        }, {
            productID: "TYS007",
            productline: "Modern Design",
            description: "Description for TYS007",
            image: "images/TYS007.jpeg"
        }, {
            productID: "TYS008",
            productline: "Modern Design",
            description: "Description for TYS008",
            image: "images/TYS008.jpeg"
        }, {
            productID: "TYS009",
            productline: "Modern Design",
            description: "Description for TYS009",
            image: "images/TYS009.jpeg"
        }, {
            productID: "TYS010",
            productline: "Modern Design",
            description: "Description for TYS010",
            image: "images/TYS010.jpeg"
        },{
            productID: "TYS012",
            productline: "Modern Design",
            description: "Description for TYS012",
            image: "images/TYS012.jpeg"
        }, {
            productID: "TYS013",
            productline: "Modern Design",
            description: "Description for TYS013",
            image: "images/TYS013.jpeg"
        }, {
            productID: "TYS014",
            productline: "Modern Design",
            description: "Description for TYS014",
            image: "images/TYS014.jpeg"
        }, {
            productID: "TYS016",
            productline: "Modern Design",
            description: "Description for TYS016",
            image: "images/TYS016.jpeg"
        },{
            productID: "TYS018",
            productline: "Modern Design",
            description: "Description for TYS018",
            image: "images/TYS018.jpeg"
        },{
            productID: "TYS020",
            productline: "Modern Design",
            description: "Description for TYS020",
            image: "images/TYS020.jpeg"
        }, {
            productID: "TYS022",
            productline: "Modern Design",
            description: "Description for TYS022",
            image: "images/TYS022.jpeg"
        }, {
            productID: "TYS023",
            productline: "Modern Design",
            description: "Description for TYS023",
            image: "images/TYS023.jpeg"
        },  {
            productID: "TYS0024",
            productline: "Modern Design",
            description: "Description for TYS024",
            image: "images/TYS024.jpeg"
        },  {
            productID: "TYS0025",
            productline: "Modern Design",
            description: "Description for TYS025",
            image: "images/TYS025.jpeg"
        },{
            productID: "TYS0027",
            productline: "Modern Design",
            description: "Description for TYS027",
            image: "images/TYS027.jpeg"
        },{
            productID: "TYS0028",
            productline: "Modern Design",
            description: "Description for TYS028",
            image: "images/TYS028.jpeg"
        },  {
            productID: "TYS0029",
            productline: "Modern Design",
            description: "Description for TYS029",
            image: "images/TYS029.jpeg"
        },
        {
            productID: "TYS031",
            productline: "Modern Design",
            description: "Description for TYS031",
            image: "images/TYS031.jpeg"

        },{
            productID: "TYS032",
            productline: "Modern Design",
            description: "Description for TYS032",
            image: "images/TYS032.jpeg"

        },{
            productID: "TYS035",
            productline: "Modern Design",
            description: "Description for TYS035",
            image: "images/TYS035.jpeg"

        },{
            productID: "TYS038",
            productline: "Modern Design",
            description: "Description for TYS038",
            image: "images/TYS038.jpeg"

        }


    ];
});