var elem = document.querySelectorAll(".image");

elem.forEach(function(val){
    val.addEventListener("mouseenter", function(){
        val.childNodes[3].style.opacity = 1
        val.childNodes[3].style.boxShadow = "5px 5px 10px yellow"
    });
    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = 0
    });
    val.addEventListener("mousemove", function(aa){
        val.childNodes[3].style.left = aa.x + "px";
        val.childNodes[3].style.top = aa.y + "px";
    });
})