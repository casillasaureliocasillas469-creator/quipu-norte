/*==================================================
                    MAPA
==================================================*/

gsap.registerPlugin(ScrollTrigger);

/*==================================================
            ANIMACIONES DE ENTRADA
==================================================*/

gsap.from(".map-container", {

    scrollTrigger: {
        trigger: ".map-section",
        start: "top 70%",
        once: true
    },

    x: -120,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    clearProps: "x,opacity"

});

gsap.from(".map-card", {

    scrollTrigger: {
        trigger: ".map-section",
        start: "top 70%",
        once: true
    },

    x: 120,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    clearProps: "x,opacity"

});

gsap.from(".map-region", {

    scrollTrigger: {
        trigger: ".map-container",
        start: "top 75%",
        once: true
    },

    scale: .6,
    opacity: 0,
    transformOrigin: "center",
    transformBox: "fillBox",
    stagger: .12,
    duration: .6,
    ease: "back.out(2)",
    clearProps: "scale,opacity"

});

/*==================================================
            ELEMENTOS
==================================================*/

const regions = document.querySelectorAll(".map-region");

const mapPhoto = document.getElementById("map-photo");

const mapRegion = document.getElementById("map-region");

const mapPlace = document.getElementById("map-place");

const mapTradition = document.getElementById("map-tradition");

const mapFood = document.getElementById("map-food");

/*==================================================
        CAMBIO DE INFORMACIÓN
==================================================*/

regions.forEach(region => {

    region.addEventListener("click", () => {

        regions.forEach(btn => {

            btn.classList.remove("active");

        });

        region.classList.add("active");

        gsap.timeline()

            .to(".map-card", {

                opacity: 0,

                y: 25,

                duration: .25

            })

            .add(() => {

                mapPhoto.src = region.dataset.image;

                mapPhoto.alt = region.dataset.region;

                mapRegion.textContent = region.dataset.region;

                mapPlace.textContent = region.dataset.place;

                mapTradition.textContent = region.dataset.tradition;

                mapFood.textContent = region.dataset.food;

            })

            .to(".map-card", {

                opacity: 1,

                y: 0,

                duration: .45,

                ease: "power2.out"

            });

    });

});

/*==================================================
            EFECTO 3D TARJETA
==================================================*/

const card = document.querySelector(".map-card");

card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;

    const rotateX = ((y / rect.height) - 0.5) * -8;

    gsap.to(card, {

        rotationY: rotateY,

        rotationX: rotateX,

        transformPerspective: 1200,

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

/*==================================================
        REFRESH AL CARGAR LA PÁGINA
==================================================*/

window.addEventListener("load", () => {

    ScrollTrigger.refresh();

});
