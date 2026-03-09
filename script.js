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
//Dark Mode Toggle
const themeToggle = document.querySelector('#themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');
    if(document.body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');  
    }
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
const lcTotal = document.querySelector(".lc-total h2");
const lcEasy = document.querySelector(".lc-diff.easy .diff-count");
const lcMed = document.querySelector(".lc-diff.med .diff-count");
const lcHard = document.querySelector(".lc-diff.hard .diff-count");
const lcCurrStreak = document.querySelector(".lc-streak");
const lcActiveDays = document.querySelector(".lc-active");
const lcRank = document.querySelector(".lc-rank");
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
        lcHard.textContent = "05";
        lcRank.textContent = "Global Rank : 1424209";
    }
}
    lcData();
async function fetchCalendar(){
try{
    const response = await fetch("https://alfa-leetcode-api.onrender.com/aaryansingh31/calendar");
    data = await response.json();
    console.log(data);
    lcCurrStreak.textContent = `🔥Current Streak : ${data.streak} days`;
    lcActiveDays.textContent = `Active days : ${data.totalActiveDays}`;
    
}
catch(error){
    console.error("Error fetching Leetcode data:", error);
    //Hard Coded Val
    lcCurrStreak.textContent = "Current Streak : 28 days";
    lcActiveDays.textContent = "Active days : 91";
  }
}
fetchCalendar();
//Effect for LC card
const lcCard = document.querySelector(".lc-card");
lcCard.addEventListener('click', () => {
    lcCard.classList.toggle('active');
});
//Code for CC Card
const ccCard = document.querySelector(".cc-card");
ccCard.addEventListener('click', () => {
    ccCard.classList.toggle('active');
});
//Api for CC card
const ccRatings = document.querySelector(".ratings");
const ccContests = document.querySelector(".contests");
const ccTotal = document.querySelector(".cc-total h2");

//Fetcing fn
async function ccData() {
    console.log("Check");
    try{
        const response = await fetch("https://codechef-api.vercel.app/aaryan_singh31");
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("Error fetching CodeChef data: ", error);
        //Hard coded values if API slows down
        ccRatings.textContent = "Ratings : 1231";
        ccContests.textContent = "Contests Participated : 7";
        ccTotal.textContent = "100+";
    }
}
ccData();