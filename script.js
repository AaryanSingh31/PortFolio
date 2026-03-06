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
console.log("Hello");

//Leetcode API Work
const lcTotal = document.querySelector(".lc-total");
const lcEasy = document.querySelector(".lc-diff.easy .diff-count");
const lcMed = document.querySelector(".lc-diff.easy .diff-count");
const lcHard = document.querySelector(".lc-diff.easy .diff-count");
const lcStreak = document.querySelector(".lc-footer span:first-child");
const lcRank = document.querySelector(".lc-footer span:last-child");
//Fetching fn
async function lcData() {
    try {
        const response = await fetch("https://alfa-leetcode-api.onrender.com/aaryansingh31/profile");
        const data = await response.json();
        lcTotal.textContent = data.totalSolved;
        lcEasy.textContent = data.easySolved;
        lcMed.textContent = data.mediumSolved;
        lcHard.textContent = data.hardSolved;
        lcRank.textContent = `Global Ranking : ${data.ranking}`;
        console.log(data);
    } catch (error) {
        console.error("Error fetching Leetcode data:", error);
        // hard coded values if API slows down
        lcTotal.textContent = "103";
        lcEasy.textContent = "43";
        lcMed.textContent = "55";
        lcHard.textContent = "5";
        lcRank.textContent = "Global Rank : 1424209";
    }
}
    lcData();