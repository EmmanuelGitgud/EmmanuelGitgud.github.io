function refreshPage(){
    window.location = window.location.href;
}
//setInterval('refreshPage()', 1000)
// Get references to the menu toggle button and the navigation bar

const menuToggle = document.getElementById('menu-toggle');
const navBar = document.getElementById('nav-bar');
const navLabel = document.getElementById('nav-label');

// Add click event listener to the menu toggle button
menuToggle.addEventListener('click', function() {
    // Toggle the 'active' class on the menu toggle button
    this.classList.toggle('active');
    
    // Toggle the 'active' class on the navigation bar to show/hide it
    navBar.classList.toggle('active');
});

// Function to check screen size and show/hide hamburger menu
function checkScreenSize() {
    if (window.innerWidth <= 1200) {
        menuToggle.style.display = 'block';
        navBar.style.display = 'none';
        navLabel.style.fontSize = '1.5rem';
    } else {
        menuToggle.style.display = 'none';
        navBar.style.display = 'block';
        navLabel.style.fontSize = '2.5rem';
    }
}

// Check screen size on page load and resize
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);
