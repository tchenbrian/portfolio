function displayNav() {
    
    var mobileNav = document.getElementById("mobile-nav");
    
    if (mobileNav.style.display == "block") {
        
        mobileNav.style.display = "none";
        
    } else if (mobileNav.style.display == "none") {
        mobileNav.style.display = "block";
    }
     
}