/*==================================================
                TRADITIONS
==================================================*/

gsap.registerPlugin(ScrollTrigger);

/*==================================================
        ENTRADA DE TARJETAS
==================================================*/

gsap.from(".tradition-card", {

    scrollTrigger: {

        trigger: ".traditions-grid",

        start: "top 75%",

        once: true

    },

    y: 90,

    opacity: 0,

    duration: 1,

    stagger: .15,

    ease: "power3.out",

    clearProps: "y,opacity"

});

/*==================================================
            ZOOM DE IMÁGENES
==================================================*/

gsap.from(".tradition-card img", {

    scrollTrigger: {

        trigger: ".traditions-grid",

        start: "top 75%",

        once: true

    },

    scale: 1.25,

    duration: 1.5,

    stagger: .15,

    ease: "power2.out",

    clearProps: "scale"

});

/*==================================================
        REFRESH AL CARGAR LA PÁGINA
==================================================*/

window.addEventListener("load", () => {

    ScrollTrigger.refresh();

});

/*==================================================
        EFECTO 3D
==================================================*/

document.querySelectorAll(".tradition-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 8;

        const rotateX = ((y / rect.height) - 0.5) * -8;

        gsap.to(card, {

            rotationY: rotateY,

            rotationX: rotateX,

            transformPerspective: 1000,

            transformOrigin: "center",

            duration: .35,

            ease: "power2.out"

        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {

            rotationX: 0,

            rotationY: 0,

            duration: .45,

            ease: "power2.out"

        });

    });

});

/*==================================================
        OVERLAY
==================================================*/

document.querySelectorAll(".tradition-card").forEach(card => {

    const overlay = card.querySelector(".tradition-overlay");

    card.addEventListener("mouseenter", () => {

        gsap.to(overlay, {

            y: -8,

            duration: .3,

            ease: "power2.out"

        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(overlay, {

            y: 0,

            duration: .3,

            ease: "power2.out"

        });

    });

});