function refreshPage(){
    window.location = window.location.href;
}
//setInterval('refreshPage()', 1000)
// Get references to the menu toggle button and the navigation bar

const menuToggle = document.getElementById('menu-toggle');
const navBar = document.getElementById('nav-bar');
const headers = document.getElementsByTagName('h1');

// Add click event listener to the menu toggle button
menuToggle.addEventListener('click', function() {
    // Toggle the 'active' class on the menu toggle button
    this.classList.toggle('active');
    
    // Toggle the 'active' class on the navigation bar to show/hide it
    navBar.classList.toggle('active');
});

// Function to check screen size and show/hide hamburger menu
function checkScreenSize() {
    const headerOriginalSize = "3rem";
    if (window.innerWidth <= 1200) {
        menuToggle.style.display = 'block';
        navBar.style.display = 'none';
        headers.style.fontSize = "20px"
    } else {
        menuToggle.style.display = 'none';
        navBar.style.display = 'block';
        headers.style.fontSize = headerOriginalSize;
    }
}

// Check screen size on page load and resize
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);
