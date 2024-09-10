window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//service modals
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) =>{
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtns) => {
    modalCloseBtns.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrrollTop = 0;
    document.documentElement.scrollTop = 0;
});



let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('.nav-items');

window.onscroll =()=> {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset =sec.offsetTop - 50;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-items a[href*='+ id +']').classList.add('active');
            });
        }
        else{
            document.querySelector('.nav-items a[href*='+ id +']').classList.remove('active');
        }

    });
};

//light/dark theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");

});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
    
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

//scroll revel animations
ScrollReveal({ 
    //reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 400, origin: 'right' });
ScrollReveal().reveal('.home .info .btn', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home-img, .about-img', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .contact-right', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.skills-description, .services-descriptions, .contact-left h2', { delay: 700, origin: 'left' });
ScrollReveal().reveal('.project-card, .service-card, .education', { delay: 800, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('footer, .group', { delay: 200, origin: 'top', interval: 200 });

