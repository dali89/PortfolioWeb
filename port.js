
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