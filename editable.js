javascript:(function () {
    var elements = document.querySelectorAll('*');
    var choice = prompt("Do you want to turn editable?\n1) Yes\n2) No");

    if (choice === "1") {
        elements.forEach(function (element) {
            element.setAttribute('contenteditable', 'true');
        });
    } else if (choice === "2") {
        elements.forEach(function (element) {
            element.setAttribute('contenteditable', 'false');
        });
    } else {
        alert("Invalid option, Run bookmarklet again.");
    }
})();
