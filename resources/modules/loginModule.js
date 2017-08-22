(function() {
    "use strict";

    angular.module("loginModule", []);

    angular.module("loginModule").directive("loginTemplate", function (){
        return {
            templateUrl: "resources/templates/login-template.html",
            controller: function($scope) {
                /*var loginData = {
                    email: "",
                    password: ""
                };*/

                //$scope.Model = loginData;
                $scope.Model = {
                    email: "",
                    password: ""
                };

                $scope.setData = function(data) {
                    $scope.Model = data;
                };
            }
        };
    });
}());
