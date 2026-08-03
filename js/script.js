/* ==========================================
   PORTFOLIO JAVASCRIPT
   ========================================== */

/* ---------- Mobile Navigation ---------- */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("open");
        menuBtn.innerHTML = navbar.classList.contains("open") ? "✕" : "☰";
    });

    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("open");
            menuBtn.innerHTML = "☰";
        });
    });
}

/* ---------- Typing Animation ---------- */

const typing = document.getElementById("typing");

if (typing) {

    const roles = [
        "Software Engineer",
        "Java Developer",
        "Spring Boot Developer",
        "Docker & Kubernetes",
        "DevOps Enthusiast"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const current = roles[roleIndex];

        if (!deleting) {

            typing.textContent = current.substring(0, charIndex++);

            if (charIndex > current.length) {
                deleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }

        } else {

            typing.textContent = current.substring(0, charIndex--);

            if (charIndex < 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }

        }

        setTimeout(typeEffect, deleting ? 50 : 90);

    }

    typeEffect();

}

/* ---------- Scroll Reveal Animation ---------- */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".section").forEach(section => {

    section.classList.add("hidden");
    observer.observe(section);

});

/* ---------- Active Navigation ---------- */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/* ---------- Navbar Blur on Scroll ---------- */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background = "rgba(10,15,30,.75)";
        header.style.backdropFilter = "blur(25px)";

    } else {

        header.style.background = "rgba(255,255,255,.05)";
        header.style.backdropFilter = "blur(20px)";

    }

});

/* ---------- Smooth Button Hover ---------- */

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-6px) scale(1.02)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0) scale(1)";

    });

});

console.log("Portfolio Loaded Successfully 🚀");
/* ===========================
   LOADER
=========================== */

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

loader.classList.add("loader-hide");

});


/* ===========================
   SCROLL BAR
=========================== */

window.addEventListener("scroll",()=>{

const winScroll=

document.body.scrollTop||

document.documentElement.scrollTop;

const height=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

document.getElementById("progressBar").style.width=

scrolled+"%";

});


/* ===========================
   TOP BUTTON
=========================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
/*==============================
    MOUSE SPOTLIGHT
==============================*/

const spotlight = document.getElementById("spotlight");

document.addEventListener("mousemove", (e) => {

    spotlight.style.left = e.clientX + "px";
    spotlight.style.top = e.clientY + "px";

});
/*=========================================
        ANIMATED COUNTERS
=========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 40;

            const update = ()=>{

                if(count < target){

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target + "+";

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

},{
    threshold:0.6
});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});