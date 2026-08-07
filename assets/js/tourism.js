/*==================================================
                TOURISM
==================================================*/

gsap.registerPlugin(ScrollTrigger);

/*==========================================
        ENTRADA DE TARJETAS
==========================================*/

gsap.from(".tour-card", {

    scrollTrigger: {
        trigger: ".tourism-grid",
        start: "top 75%",
        once: true
    },

    y: 30,
    opacity: 0,
    duration: 1,
    stagger: .18,
    ease: "power3.out",
    clearProps: "y,opacity"

});


/*==========================================
            ZOOM AL APARECER
==========================================*/

gsap.from(".tour-card img", {

    scrollTrigger: {
        trigger: ".tourism-grid",
        start: "top 75%",
        once: true
    },

    scale: 1.25,
    duration: 1.4,
    stagger: .18,
    ease: "power2.out",
    clearProps: "scale"

});


/*==========================================
        EFECTO 3D AL MOUSE
==========================================*/

document.querySelectorAll(".tour-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 8;

        const rotateX = ((y / rect.height) - 0.5) * -6;

        gsap.to(card, {

            rotationY: rotateY,
            rotationX: rotateX,
            transformPerspective: 1000,
            transformOrigin: "center",
            zIndex: 10,
            duration: .35,
            ease: "power2.out"

        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {

            rotationX: 0,
            rotationY: 0,
            zIndex: 0,
            duration: .45,
            ease: "power2.out"

        });

    });

});


/*==========================================
        FLECHA
==========================================*/

document.querySelectorAll(".tour-card").forEach(card => {

    const arrow = card.querySelector(".arrow");

    card.addEventListener("mouseenter", () => {

        gsap.to(arrow, {

            x: 8,
            duration: .3

        });

    });

    card.addEventListener("mouseleave", () => {
        gsap.to(arrow, {

            x: 0,

            duration: .3

        });

    });

});

/*==========================================
        REFRESH AL CARGAR LA PÁGINA
==========================================*/

window.addEventListener("load", () => {

    ScrollTrigger.refresh();

});