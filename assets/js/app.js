var urlObj = urlObject();
var max3D = angular.module('max3D', []);
max3D.controller('learning3Dmax', function($scope, $http) {   
    var city = urlObj.parameters.city;
    
    $http.get('data.json').success(function(data) {
        if (city) {
            $scope.data = data[city];
        } else {
            $http.get("http://ipinfo.io").success(function(response) {
                $scope.data = getData(response.city, response.country, data);
            })  
        }
        
    });
    
    function getData(aCity, aCountry, aData) {
        var res = "Moscow";
        for (var j in aData) {
            if (aCity === j || aData[j].country === aCountry) {
                res = j;
                break;
            }
        }
        return aData[res];
    }
});


function getUTM() {
    return {
        source: urlObj.parameters.utm_source,
        campaing: urlObj.parameters.utm_campaing,
        medium: urlObj.parameters.utm_medium,
        term: urlObj.parameters.utm_term
    }
}