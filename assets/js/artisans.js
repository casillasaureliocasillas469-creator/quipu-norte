/*==================================================
                    ARTESANOS
==================================================*/

gsap.registerPlugin(ScrollTrigger);

/*==================================================
            ANIMACIÓN AL HACER SCROLL
==================================================*/

gsap.from(".artisan-image", {

    scrollTrigger: {
        trigger: ".artisans",
        start: "top 70%",
        once: true
    },

    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    clearProps: "x,opacity"

});

gsap.from(".artisan-info", {

    scrollTrigger: {
        trigger: ".artisans",
        start: "top 70%",
        once: true
    },

    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    clearProps: "x,opacity"

});

gsap.from(".artisan-gallery img", {

    scrollTrigger: {
        trigger: ".artisan-gallery",
        start: "top 85%",
        once: true
    },

    y: 50,
    opacity: 0,
    stagger: .08,
    duration: .8,
    ease: "power2.out",
    clearProps: "y,opacity"

});

/*==================================================
        CAMBIO DE ARTESANO
==================================================*/

const photo = document.getElementById("artisan-photo");
const region = document.getElementById("artisan-region");
const name = document.getElementById("artisan-name");
const job = document.getElementById("artisan-job");
const description = document.getElementById("artisan-description");
const quote = document.getElementById("artisan-quote");

const skill1 = document.getElementById("skill1");
const skill2 = document.getElementById("skill2");
const skill3 = document.getElementById("skill3");

const thumbs = document.querySelectorAll(".artisan-gallery img");

thumbs.forEach(thumb => {

    thumb.addEventListener("click", () => {

        thumbs.forEach(img => img.classList.remove("active"));

        thumb.classList.add("active");

        gsap.timeline()

            .to(".artisan-image", {

                opacity: 0,
                scale: .95,
                duration: .25

            })

            .to(".artisan-info", {

                opacity: 0,
                y: 20,
                duration: .20

            }, "<")

            .add(() => {

                photo.src = thumb.src;

                photo.alt = thumb.dataset.name;

                region.textContent = thumb.dataset.region;

                name.textContent = thumb.dataset.name;

                job.textContent = thumb.dataset.job;

                description.textContent = thumb.dataset.description;

                quote.textContent = `"${thumb.dataset.quote}"`;

                skill1.textContent = thumb.dataset.skill1;

                skill2.textContent = thumb.dataset.skill2;

                skill3.textContent = thumb.dataset.skill3;

            })

            .to(".artisan-image", {

                opacity: 1,
                scale: 1,
                duration: .45,
                ease: "power2.out"

            })

            .to(".artisan-info", {

                opacity: 1,
                y: 0,
                duration: .45,
                ease: "power2.out"

            }, "<");

    });

});

/*==================================================
            EFECTO 3D FOTO
==================================================*/

const image = document.querySelector(".artisan-image");

image.addEventListener("mousemove", (e) => {

    const rect = image.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;

    const rotateX = ((y / rect.height) - 0.5) * -10;

    gsap.to(image, {

        rotationY: rotateY,
        rotationX: rotateX,
        transformPerspective: 1200,
        transformOrigin: "center",
        duration: .35,
        ease: "power2.out"

    });

});

image.addEventListener("mouseleave", () => {

    gsap.to(image, {

        rotationX: 0,
        rotationY: 0,
        duration: .4,
        ease: "power2.out"

    });

});

/*==================================================
            PARALLAX FOTO
==================================================*/

gsap.to("#artisan-photo", {

    y: -40,

    ease: "none",

    scrollTrigger: {

        trigger: ".artisan-image",

        start: "top bottom",

        end: "bottom top",

        scrub: true

    }

});

/*==================================================
        REFRESH AL CARGAR LA PÁGINA
==================================================*/

window.addEventListener("load", () => {

    ScrollTrigger.refresh();

});