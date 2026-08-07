gsap.registerPlugin(ScrollTrigger);

/*==================================
        FONDO
==================================*/

gsap.from(".about__sun", {

    scrollTrigger: {

        trigger: ".about",

        start: "top 70%",

        once: true

    },

    scale: 0,

    opacity: 0,

    duration: 1.2,

    ease: "power3.out",

    clearProps: "scale,opacity"

});

gsap.from(".about__mountain--3", {

    scrollTrigger: {

        trigger: ".about",

        start: "top 70%",

        once: true

    },

    y: 200,

    opacity: 0,

    duration: 1,

    clearProps: "y,opacity"

});

gsap.from(".about__mountain--2", {

    scrollTrigger: {

        trigger: ".about",

        start: "top 70%",

        once: true

    },

    y: 180,

    opacity: 0,

    duration: 1,

    clearProps: "y,opacity"

});

gsap.from(".about__mountain--1", {

    scrollTrigger: {

        trigger: ".about",

        start: "top 70%",

        once: true

    },

    y: 150,

    opacity: 0,

    duration: 1,

    clearProps: "y,opacity"

});

gsap.from(".about__pattern", {

    scrollTrigger: {

        trigger: ".about",

        start: "top 70%",

        once: true

    },

    opacity: 0,

    duration: 1.5,

    clearProps: "opacity"

});

/*==================================
        CONTENIDO
==================================*/

gsap.from(".about__image", {

    scrollTrigger: {

        trigger: ".about",

        start: "top 75%",

        once: true

    },

    x: -120,

    opacity: 0,

    duration: 1,

    clearProps: "x,opacity"

});

gsap.from(".about__content", {

    scrollTrigger: {

        trigger: ".about",

        start: "top 75%",

        once: true

    },

    x: 120,

    opacity: 0,

    duration: 1,

    clearProps: "x,opacity"

});

/*==================================
        REFRESH AL CARGAR LA PÁGINA
==================================*/

window.addEventListener("load", () => {

    ScrollTrigger.refresh();

});
