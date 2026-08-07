/*==================================================
                    FOOTER
==================================================*/

gsap.registerPlugin(ScrollTrigger);

/*==================================================
            ANIMACIÓN FOOTER
==================================================*/

const footerTimeline = gsap.timeline({

    scrollTrigger: {

        trigger: ".footer",

        start: "top 80%"

    }

});

footerTimeline

    .from(".footer-quote", {

        y: 60,

        opacity: 0,

        duration: .8,

        ease: "power3.out"

    })

    .from(".footer-brand", {

        x: -60,

        opacity: 0,

        duration: .7

    }, "-=.4")

    .from(".footer-links", {

        y: 50,

        opacity: 0,

        duration: .6

    }, "-=.5")

    .from(".footer-contact", {

        y: 50,

        opacity: 0,

        duration: .6

    }, "-=.45")

    .from(".footer-bottom", {

        y: 40,

        opacity: 0,

        duration: .6

    }, "-=.35");


/*==================================================
        BOTÓN VOLVER ARRIBA
==================================================*/

const backTop = document.createElement("button");

backTop.className = "back-to-top";

backTop.innerHTML = '<i class="fas fa-chevron-up"></i>';

document.body.appendChild(backTop);


/*==================================================
            MOSTRAR BOTÓN
==================================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backTop.classList.add("show");

    }

    else {

        backTop.classList.remove("show");

    }

});


/*==================================================
            SCROLL SUAVE
==================================================*/

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==================================================
        HOVER BOTÓN
==================================================*/

backTop.addEventListener("mouseenter", () => {

    gsap.to(backTop, {

        scale: 1.12,

        duration: .25

    });

});

backTop.addEventListener("mouseleave", () => {

    gsap.to(backTop, {

        scale: 1,

        duration: .25

    });

});