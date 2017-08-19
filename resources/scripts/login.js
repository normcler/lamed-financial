var loginData = {
    email: "",
    password: ""
};

(function() {
    "use strict";

    angular.module("loginApp", []);

    angular.module("loginApp").
    controller("LoginController", function($scope) {
        $scope.Model = loginData;

        $scope.setData = function(data) {
            $scope.Model = data;
        };
    });
}());

