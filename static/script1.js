


const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
});


document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("open");
    });
});




const d = new Date();
let year = d.getFullYear();
document.getElementById("footer").innerHTML = "Copyright &copy MR22xx " +  year;