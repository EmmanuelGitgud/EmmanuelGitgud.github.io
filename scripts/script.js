const hamburgerNav = document.getElementById("hamburger-nav");
const closeNav = document.getElementById("close-nav");
const sidebar = document.getElementById("sidebar");

const typedStrings = [
    "Web Designer.",
    "Fullstack Developer.",
    "Game Developer.",
];

const AboutMe = [{
    Personal_Info:{
        Name: "Emmanuel-Eljohn Arabit",
        Age: 21,
    },
    Graduated:{
        School: "Institute of Creative Computer Technology",
        Year: 2023,
        Course: "Bachelor of Science in Information Technology",
    },
    Interests:{
        Likes:[
            "Coffee",
            "Cats",
            "Computers",
        ],
        Hobbies:[
            "Coding",
            "Drawing",
            "Cubing",
        ]
    }
}];

function toggleSidebar(){
    sidebar.classList.toggle("hide");
}

var typed = new Typed('#element', {
    strings: [...typedStrings],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
  });

hamburgerNav.addEventListener("click", toggleSidebar);
closeNav.addEventListener("click", toggleSidebar);

