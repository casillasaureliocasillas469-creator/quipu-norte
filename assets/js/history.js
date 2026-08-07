/*==================================================
                    HISTORY
==================================================*/

gsap.registerPlugin(ScrollTrigger);

/*==================================================
            LÍNEA CENTRAL
==================================================*/

gsap.from(".timeline-line", {
    scaleY: 0,
    transformOrigin: "top",
    duration: 2,
    ease: "power2.out",
    clearProps: "scaleY",
    scrollTrigger: {
        trigger: ".history",
        start: "top 65%",
        once: true
    }
});

/*==================================================
            NUDOS DEL QUIPU
==================================================*/

gsap.from(".timeline-node span", {

    scrollTrigger: {

        trigger: ".timeline",

        start: "top 70%",

        once: true

    },

    scale: 0,

    opacity: 0,

    stagger: .25,

    duration: .7,

    ease: "back.out(2)",

    clearProps: "scale,opacity"

});

/*==================================================
        TARJETAS IZQUIERDA
==================================================*/

gsap.utils.toArray(".timeline-item:not(.reverse) .timeline-content")
    .forEach((card) => {

        gsap.from(card, {

            x: -120,

            opacity: 0,

            duration: 1,

            ease: "power3.out",

            clearProps: "x,opacity",

            scrollTrigger: {

                trigger: card,

                start: "top 75%",

                once: true

            }

        });

    });

/*==================================================
        TARJETAS DERECHA
==================================================*/

gsap.utils.toArray(".timeline-item.reverse .timeline-content")
    .forEach((card) => {

        gsap.from(card, {

            x: 120,

            opacity: 0,

            duration: 1,

            ease: "power3.out",

            clearProps: "x,opacity",

            scrollTrigger: {

                trigger: card,

                start: "top 75%",

                once: true

            }

        });

    });

/*==================================================
            IMÁGENES
==================================================*/

gsap.utils.toArray(".timeline-image").forEach((image) => {

    gsap.from(image, {

        scale: .85,

        opacity: 0,

        duration: 1,

        ease: "power2.out",

        clearProps: "scale,opacity",

        scrollTrigger: {

            trigger: image,

            start: "top 80%",

            once: true

        }

    });

});

/*==================================================
        EFECTO HOVER EN IMAGEN
==================================================*/

document.querySelectorAll(".timeline-image").forEach((img) => {

    img.addEventListener("mousemove", (e) => {

        const rect = img.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 8;

        const rotateX = ((y / rect.height) - 0.5) * -8;

        gsap.to(img, {

            rotationY: rotateY,

            rotationX: rotateX,

            transformPerspective: 1000,

            transformOrigin: "center",

            duration: .35,

            ease: "power2.out"

        });

    });

    img.addEventListener("mouseleave", () => {

        gsap.to(img, {

            rotationX: 0,

            rotationY: 0,

            duration: .45,

            ease: "power2.out"

        });

    });

});

/*==================================================
            PARALLAX SUAVE
==================================================*/

gsap.utils.toArray(".timeline-image img").forEach((img) => {

    gsap.to(img, {

        y: -30,

        ease: "none",

        scrollTrigger: {

            trigger: img,

            start: "top bottom",

            end: "bottom top",

            scrub: true

        }

    });

});

/*==================================================
        REFRESH AL CARGAR LA PÁGINA
==================================================*/

window.addEventListener("load", () => {

    ScrollTrigger.refresh();

});
