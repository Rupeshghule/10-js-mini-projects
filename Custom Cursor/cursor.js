var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", function(fff){
    crsr.style.left = fff.x + "px";
    crsr.style.top = fff.y + "px";

})