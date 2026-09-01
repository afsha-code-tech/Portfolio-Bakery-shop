/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});


/* ================= PRODUCT DRAG / SWIPE ================= */

/*
   Mobile:
   → normal finger swipe

   Laptop/Desktop:
   → mouse drag works too

   IMPORTANT:
   → NO automatic scrolling
*/

const slider = document.getElementById("productSlider");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("dragging");

  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;

  e.preventDefault();

  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.4;

  slider.scrollLeft = scrollLeft - walk;
});


/* ================= IMAGE ERROR PROTECTION ================= */

/*
   If an image ever fails to load, hide the broken-image
   instead of showing the ugly broken-image icon.
*/

document.querySelectorAll("img").forEach(img => {

  img.addEventListener("error", () => {

    img.style.display = "none";

    const parent = img.parentElement;

    if (parent) {
      parent.classList.add("image-error");
    }

  });

});
