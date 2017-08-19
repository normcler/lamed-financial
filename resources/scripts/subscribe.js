var subscriberData = {
    lastName: "",
    firstName: "",
    email: "",
    password: ""
};

(function() {
    "use strict";

    angular.module("subscribeApp", []);

    angular.module("subscribeApp").controller("SubscribeController", function($scope) {
        $scope.Model = subscriberData;

        $scope.setData = function(data) {
            $scope.Model = data;
        };
    });
}());

