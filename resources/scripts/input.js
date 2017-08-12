/*var addColumns = function () {
    append('<span class="td"><input type="checkbox"/></span>');
    append('<span class="td"><input type="text"/></span>');
    append('<span class="td"><input type="number"/></span>');
}*/

var populateTable = function () {
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

populateTable();
