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
//Name Animation
const words = ["Software Developer", "Web Developer", "Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const heroInfo = document.getElementById('hero-info');
    const currentWord = words[wordIndex];

    if (isDeleting) {
        heroInfo.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        heroInfo.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, 1500);  // pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    const speed = isDeleting ? 60 : 100;
    setTimeout(typeEffect, speed);
}

typeEffect();
//Bar colorful
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.skill-fill').forEach(bar => {
                bar.style.width = bar.dataset.level + '%';
            });
        }
    });
}, { threshold: 0.3 });

observer.observe(document.querySelector('#skills'));
//Color change on click
document.querySelectorAll('.skills-card').forEach(card => {
    card.addEventListener('click', () => {
        const isActive = card.classList.contains('active');
        document.querySelectorAll('.skills-card').forEach(c => c.classList.remove('active'));
        if (!isActive) card.classList.add('active');
    });
});
