(function() {
    "use strict";

    var loginData = {
        email: "",
        password: ""
    };

    angular.module("loginModule", []);

    angular.module("loginModule").directive("loginTemplate", function (){
        return {
            templateUrl: "templates/login-template.html",
            controller: function($scope) {
                $scope.Model = loginData;

                $scope.setData = function(data) {
                    $scope.Model = data;
                };
            }
        };
    });
}());
