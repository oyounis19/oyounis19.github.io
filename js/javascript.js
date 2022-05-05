const icon=document.getElementById("themeicon");
const currentTheme = localStorage.getItem("theme");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
}
icon.addEventListener("click", function () {
    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
        theme = "dark";
    }
    localStorage.setItem("theme", theme);
    if(document.body.classList.contains("dark-theme")){
        icon.src="images/sun.png";
    }
    else{
        icon.src="images/moon.png";
    }
    });
    if(currentTheme == "dark"){
        document.body.classList.toggle("dark-theme");
    }

//navbar hiding on scrolling up---------------------------------------
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navebar").style.top = "0";
} else {
    document.querySelector(".navebar").style.top = "-85px";
}
prevScrollpos = currentScrollPos;
}
