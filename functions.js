
var online = window.navigator.onLine;
if (!online){
    alert('You are not currently connected to the internet. Please try again later.');
    $("body").remove();
}

addEventListener('DOMContentLoaded', function() {

    var url = window.location.pathname;
    // var filename = url.substring(url.lastIndexOf('/')+1);    
    // if (filename == "index.html") {
    if (!url.includes("projects") && !url.includes("resume")) {

        // Scroll down
        document.getElementById("scroll-down").addEventListener("click", function() {
            window.scroll({
                top: window.innerHeight,
                behavior: "smooth"
            });
        });
    // } else if (filename == "projects.html") {
    } else if (url.includes("projects")) {

        document.getElementById("projects-back").addEventListener("click", function() {    
            const backButton = document.getElementById("projects-back");
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get("origin") === "resume") {
                backButton.href = "resume.html";
            } else {
                backButton.href = "index.html";
            }
        });
    }

    // Scroll to top
    var element = document.getElementsByClassName("scroll-up");
    for(var i = 0; i < element.length; i++) {
        element[i].addEventListener('click', function() {    
            window.scroll({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    
});

