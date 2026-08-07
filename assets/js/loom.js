/*==========================================
            TEJIDO
==========================================*/

gsap.registerPlugin(ScrollTrigger);

gsap.from(".loom__threads span", {

    scrollTrigger: {

        trigger: ".loom",

        start: "top 70%",

        once: true

    },

    scaleY: 0,

    transformOrigin: "top",

    stagger: .08,

    duration: 1.3,

    ease: "power3.out",

    clearProps: "scaleY"

});

/*==========================================
            TEXTO
==========================================*/

gsap.from(".loom__content h2", {

    scrollTrigger: {

        trigger: ".loom",

        start: "top 60%",

        once: true

    },

    y: 80,

    opacity: 0,

    duration: 1,

    clearProps: "y,opacity"

});

gsap.from(".loom__content p", {

    scrollTrigger: {

        trigger: ".loom",

        start: "top 55%",

        once: true

    },

    y: 60,

    opacity: 0,

    duration: 1,

    delay: .2,

    clearProps: "y,opacity"

});

/*==========================================
        REFRESH AL CARGAR LA PÁGINA
==========================================*/

window.addEventListener("load", () => {

    ScrollTrigger.refresh();

});
