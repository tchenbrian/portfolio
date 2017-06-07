function select() {
    
    var creativity = document.getElementsByClassName("creativity");
var animation = document.getElementsByClassName("animation");
var logos = document.getElementsByClassName("logo");
var websites = document.getElementsByClassName("website");
var community = document.getElementsByClassName("community");
var worksSelect = document.getElementById("worksSelect");
    
    if (worksSelect.value == creativity) {
        creativity.style.display = "block";  
        animation.style.display = "none";  
        logos.style.display = "none";  
        websites.style.display = "none";  
        community.style.display = "none";  
    }
    
}