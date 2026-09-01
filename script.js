// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");

    if (navLinks.classList.contains("mobile-open")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
        menuToggle.textContent = "☰";
    });
});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


// ===============================
// IMAGE MARQUEE PAUSE ON TOUCH
// ===============================

const marquees = document.querySelectorAll(
    ".marquee, .reverse-marquee"
);

marquees.forEach(marquee => {

    marquee.addEventListener("touchstart", () => {
        const track = marquee.querySelector(
            ".marquee-track, .reverse-track"
        );

        track.style.animationPlayState = "paused";
    });

    marquee.addEventListener("touchend", () => {
        const track = marquee.querySelector(
            ".marquee-track, .reverse-track"
        );

        track.style.animationPlayState = "running";
    });

});


// ===============================
// SMOOTH ANCHOR CLICK
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});
