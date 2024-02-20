const hamburgerNav = document.getElementById("hamburger-nav");
const closeNav = document.getElementById("close-nav");
const sidebar = document.getElementById("sidebar");

function toggleSidebar(){
    sidebar.classList.toggle("hide");
}



hamburgerNav.addEventListener("click", toggleSidebar);
closeNav.addEventListener("click", toggleSidebar);