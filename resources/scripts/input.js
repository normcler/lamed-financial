
/*
  Create an array of 25 object literals for the data entry.
*/
var t = [];
for (var i=0; i<25; i++) {
    t.push({checked: false, ticker: "", shares: ""});
}

( function() {
    "use strict";

    angular.module("input", [])

    angular.module("input").
        controller("inputController", function($scope) {
            // holdings - the object literals.
            $scope.holdings = t;
        });

    // This is a custom directive that I've defined, not something built into
    // angular. I can stitch the div into my code by putting <my-directive>
    angular.module("input").
        directive("populateForm",function () {
            return {
                template: "<div>This is a custom directive</div>"
            }
        });
})();

/*
Original jQuery code used to populate the form
*/

/*var populateTable = function () {
    var inputForm = $(".input-form")
    for (var jRow = 0; jRow < 25; jRow++) {
        var d = document.createElement("div");
        d.className = "entry-row";
        inputForm.append(d);
    }
    var entryRows = $(".entry-row");
    for (var jRow = 0; jRow < entryRows.length; jRow++) {
        for (jSpan = 0; jSpan <= 2; jSpan++) {
            var sp = document.createElement("span");
            sp.className = "td";
            entryRows[jRow].append(sp);
            var p = document.createElement("input");
            if (jSpan === 0) {
                p.type = "checkbox";
            } else {
                p.type = "text";
            }
            sp.append(p);
        }
    }
}

populateTable();*/
