var urlObj = urlObject();
var max3D = angular.module('max3D', []);
max3D.controller('learning3Dmax', function($scope, $http) {   
    var city = urlObj.parameters.city;
    
    $http.get('data.json').success(function(data) {
        if (city) {
            $scope.data = data[city];
        } else {
            $http.get("http://ipinfo.io").success(function(response) {
                $scope.data = data[getCity(response.city, response.country)];
            })  
        }
        
    });
    
    function getCity(aCity, aCountry) {
        var res = "Moscow";
        switch (aCity) {
            case "Moscow" : {
                res = "Moscow";
                break;
            }
            default: {
                switch (aCountry) {
                    case "RU": {
                        res = "Moscow";
                        break;
                    }
                }
            }
        }
        return res;
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