var Statuses = document.querySelector("h5");
var btn = document.getElementById("add");   // we can use "queryselector()" insted of getElementById() 

var check = 0;

btn.addEventListener("click", function () {
    if (check == 0) {
        Statuses.innerHTML = "Friends"
        Statuses.style.color = "green"
        btn.innerHTML = "Remove Friend"
        check = 1;
    } else {
        Statuses.innerHTML = "Stranger"
        Statuses.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0;
    }

});

