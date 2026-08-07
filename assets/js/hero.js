gsap.registerPlugin(ScrollTrigger);

/*=========================================
            HERO ANIMATION
=========================================*/

window.addEventListener("load", () => {

    const tl = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });

    /*=============================
            SOL
    =============================*/

    tl.from(".hero__sun", {

        scale: 0,

        opacity: 0,

        duration: 1.8

    });

    /*=============================
            MONTAÑAS
    =============================*/

    tl.from(".mountain-3", {

        y: 200,

        opacity: 0,

        duration: 1

    }, "-=1.2")

        .from(".mountain-2", {

            y: 180,

            opacity: 0,

            duration: 1

        }, "-=.8")

        .from(".mountain-1", {

            y: 150,

            opacity: 0,

            duration: 1

        }, "-=.8");

    /*=============================
            BADGE
    =============================*/

    tl.from(".hero__badge", {

        y: 40,

        opacity: 0,

        duration: .7

    });

    /*=============================
            TITULO
    =============================*/

    tl.from(".hero__title", {

        y: 60,

        opacity: 0,

        duration: .9

    }, "-=.3");

    /*=============================
            DESCRIPCIÓN
    =============================*/

    tl.from(".hero__description", {

        y: 40,

        opacity: 0,

        duration: .8

    }, "-=.4");

    /*=============================
            BOTONES
    =============================*/

    tl.from(".hero__buttons", {

        y: 30,

        opacity: 0,

        duration: .6

    }, "-=.4");

    /*=============================
            STATS
    =============================*/

    tl.from(".stat", {

        y: 30,

        opacity: 0,

        stagger: .15,

        duration: .5

    });

    /*=============================
            QUIPU
    =============================*/

    const rope = document.querySelector("#mainRope");

    const length = rope.getTotalLength();

    rope.style.strokeDasharray = length;

    rope.style.strokeDashoffset = length;

    gsap.to(rope, {

        strokeDashoffset: 0,

        duration: 2.5,

        ease: "power2.out",

        delay: 1.5

    });

    gsap.from(".node", {

        scale: 0,

        opacity: 0,

        stagger: .20,

        delay: 2,

        ease: "back.out(2)"

    });

    gsap.from(".thread", {

        scaleY: 0,

        transformOrigin: "top",

        stagger: .20,

        delay: 2.2

    });

});


/*=========================================
            FLOATING SUN
=========================================*/

gsap.to(".hero__sun", {

    y: -20,

    repeat: -1,

    yoyo: true,

    duration: 4,

    ease: "sine.inOut"

});


/*=========================================
            QUIPU FLOAT
=========================================*/

gsap.to(".hero__quipu", {

    y: -12,

    repeat: -1,

    yoyo: true,

    duration: 3,

    ease: "sine.inOut"

});


/*=========================================
            MOUSE PARALLAX
=========================================*/

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth) - 0.5;

    const y = (e.clientY / window.innerHeight) - 0.5;

    gsap.to(".mountain-1", {

        x: x * 20,

        y: y * 15,

        duration: 1

    });

    gsap.to(".mountain-2", {

        x: x * 35,

        y: y * 25,

        duration: 1

    });

    gsap.to(".mountain-3", {

        x: x * 50,

        y: y * 35,

        duration: 1

    });

    gsap.to(".hero__quipu", {

        x: x * 30,

        y: y * 20,

        duration: 1

    });

    gsap.to(".hero__content", {

        x: x * 15,

        y: y * 10,

        duration: 1

    });

});


/*=========================================
            SCROLL INDICATOR
=========================================*/

gsap.to(".scroll span", {

    y: 15,

    repeat: -1,

    yoyo: true,

    duration: 1,

    ease: "power1.inOut"

});