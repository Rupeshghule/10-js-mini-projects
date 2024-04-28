var arr = [
    {
        dp: "/Multiple Image hovering animation/images/IMG_0241-1.JPG", story: "/smoke.png"
    },
    {
        dp: "/Multiple Image hovering animation/images/IMG_20220520_165904441.jpg", story: "/clear.png"
    },
    { dp: "/Multiple Image hovering animation/images/IMG_7412.JPG", story: "/clouds.jpeg" },
    { dp: "/Multiple Image hovering animation/images/IMG_7422.JPG", story: "/drizzle.png" },
    { dp: "/Multiple Image hovering animation/images/IMG_20220520_165904441.jpg", story: "/drizzle.png" }
]

var storiyaan = document.querySelector("#storiyan");
var clutter = ""
arr.forEach(function (elem, ii) {
    clutter += ` <div class="story">
    <img id="${ii}" src="${elem.dp}" alt="">
</div>` //template literals
})
storiyaan.innerHTML = clutter
storiyaan.addEventListener("click", function (dd) {
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dd.target.id].story})`
    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },3000)
})
