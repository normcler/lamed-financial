var subscriberData = {
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

(function () {
    "use strict";

    angular.module("subscribeModule", []);

    angular.module("subscribeModule").directive("subscribeTemplate", function () {
        return {
            templateUrl: "resources/templates/subscribe-template.html",
            controller: function ($scope) {
                $scope.Model = subscriberData;

                $scope.setData = function (data) {
                    $scope.Model = data;
                };

                $scope.passwordValid = true;

                $scope.validConfirm = function () {
                    if ($scope.Model.password ===
                        $scope.Model.confirmPassword) {
                        $scope.passwordValid = true;
                    } else {
                        $scope.passwordValid = false;
                    }
                }
            }
        };
    });
}());

