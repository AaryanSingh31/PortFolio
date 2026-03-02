const navtoggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navtoggle.addEventListener("click", () => {
    navtoggle.classList.toggle("active");
    navLinks.classList.toggle("active");
});

document.addEventListener('click', (e) => {
    const clickedOutside = !navLinks.contains(e.target) && !navtoggle.contains(e.target);
    
    if (clickedOutside) {
        navtoggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});
window.addEventListener('scroll', () => {
    navtoggle.classList.remove('active');
    navLinks.classList.remove('active');
});