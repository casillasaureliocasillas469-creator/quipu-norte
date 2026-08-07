// =========================
// MENÚ ACTIVO
// =========================

const links = document.querySelectorAll(".quipu-menu a");

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});

// =========================
// MENÚ ACTIVO AL HACER SCROLL
// =========================

const navSections = Array.from(links).map(link => {

    return document.getElementById(link.getAttribute("href").slice(1));

});

function updateActiveMenu() {

    const offset = Math.min(window.innerHeight * 0.35, 200);

    const scrollPos = window.scrollY + offset;

    let currentId = navSections[0].id;

    navSections.forEach(section => {

        if (section.offsetTop <= scrollPos) {

            currentId = section.id;

        }

    });

    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {

        currentId = navSections[navSections.length - 1].id;

    }

    links.forEach(link => {

        link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);

    });

}

window.addEventListener("scroll", updateActiveMenu, { passive: true });

window.addEventListener("load", updateActiveMenu);

// =========================
// ANIMACIÓN DE LA CUERDA
// =========================

const rope = document.querySelector("#rope");

if (typeof gsap !== "undefined") {

    const length = rope.getTotalLength();

    rope.style.strokeDasharray = length;

    rope.style.strokeDashoffset = length;

    gsap.to(rope, {

        strokeDashoffset: 0,

        duration: 2,

        ease: "power2.out"

    });

    // =========================
    // APARECEN LOS NUDOS
    // =========================

    gsap.from(".knot", {

        scale: 0,

        opacity: 0,

        duration: .6,

        stagger: .20,

        delay: 1,

        ease: "back.out(2)"

    });

    // =========================
    // APARECE EL TEXTO
    // =========================

    gsap.from(".quipu-menu span:last-child", {

        opacity: 0,

        y: 20,

        stagger: .15,

        delay: 1.5,

        duration: .5

    });

}
