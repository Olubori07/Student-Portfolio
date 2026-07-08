// ==========================
// MOBILE NAVIGATION
// ==========================

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("active");

    });

}

// ==========================
// ANIMATED COUNTERS
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let count = 0;

    const updateCounter = () => {

        const increment = Math.max(1, Math.ceil(target / 100));

        if (count < target) {

            count += increment;

            if (count > target) {
                count = target;
            }

            counter.textContent = count;

            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent = target + "+";

        }

    };

    updateCounter();

});

// ==========================
// SCROLL REVEAL
// ==========================

function revealSections() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}