

const cursor =
document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});



const reveals =
document.querySelectorAll(".reveal");

function revealSections(){

reveals.forEach((el)=>{

const top =
el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

el.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();



const words = [

"Backend Developer ",
"Frontend Developer ",

"UI UX Designer "
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typingText =
document.querySelector(".typing-text span");

function typeEffect(){

currentWord = words[wordIndex];

if(isDeleting){

typingText.textContent =
currentWord.substring(0,letterIndex--);

}else{

typingText.textContent =
currentWord.substring(0,letterIndex++);

}

let speed = isDeleting ? 60 : 120;

if(!isDeleting && letterIndex === currentWord.length){

speed = 1500;
isDeleting = true;

}else if(isDeleting && letterIndex === 0){

isDeleting = false;
wordIndex++;

if(wordIndex === words.length){
wordIndex = 0;
}

speed = 300;

}

setTimeout(typeEffect,speed);

}

typeEffect();





let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};


function toggleText() {

    let moreText = document.getElementById("moreText");
    let btn = document.getElementById("btn");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        btn.innerHTML = "Read Less";
    } else {
        moreText.style.display = "none";
        btn.innerHTML = "Read More";
    }
}


const projectCards = document.querySelectorAll('.project-card');
const projectsSection = document.querySelector('.projects');

function showProjectCards() {
    if (!projectsSection) return;

    const sectionTop = projectsSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 120;

    if (sectionTop < triggerPoint) {
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('show');
            }, index * 250);
        });
    }
}

window.addEventListener('scroll', showProjectCards);
window.addEventListener('load', showProjectCards);

const contactForm =
document.querySelector(".contact-form");

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

const btn =
document.querySelector(".contact-btn");

btn.innerHTML =
'<i class="bi bi-check-circle-fill"></i> Message Sent';

btn.style.background =
'linear-gradient(90deg,#00c853,#00e676)';

setTimeout(()=>{

btn.innerHTML =
'<span>Send Message</span><i class="bi bi-send-fill"></i>';

btn.style.background =
'linear-gradient(90deg,var(--primary),var(--secondary))';

contactForm.reset();

},2500);

});

