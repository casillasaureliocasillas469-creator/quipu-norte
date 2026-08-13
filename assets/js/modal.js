/*==================================================
                    MODAL
==================================================*/

/* ================================================
        DATOS DE CADA ELEMENTO
================================================ */

const MODAL_DATA = {

    /* ---------- TURISMO ---------- */

    "chan-chan": {
        title: "Chan Chan",
        tag: "Turismo · Patrimonio UNESCO",
        badge: "La Libertad",
        image: "assets/img/turismo/chan-chan.jpg",
        color: "#f2703a",
        soft: "rgba(242,112,58,.12)",
        features: [
            "Ciudad de adobe más grande de América, con cerca de 20 km² de extensión.",
            "Construida íntegramente con barro y adobe por el Reino Chimú.",
            "Nueve palacios amurallados llamados ciudadadelas.",
            "Frisos decorados con olas, peces y redes que reflejan su vínculo con el mar.",
            "Canales hidráulicos que abastecían de agua a toda la ciudad."
        ],
        importance: "Fue la capital del Reino Chimú y la expresión máxima de la arquitectura de barro en el mundo. Su diseño urbano y tecnológico la convierte en una de las ciudades prehispánicas más sofisticadas de Sudamérica.",
        fact: "Declarada Patrimonio de la Humanidad por la UNESCO en 1986, sigue en pie después de más de 700 años."
    },

    "kuelap": {
        title: "Kuélap",
        tag: "Turismo · Sitio Arqueológico",
        badge: "Amazonas",
        image: "assets/img/turismo/kuelap.jpg",
        color: "#f2703a",
        soft: "rgba(242,112,58,.12)",
        features: [
            "Fortaleza construida por los Chachapoyas entre los años 1100 y 1300 d.C.",
            "Más de 400 edificaciones circulares de piedra caliza.",
            "Murallas de hasta 19 metros de alto que envuelven la ciudadela.",
            "Ubicada sobre la cima del cerro Barreta, a unos 3.000 m s.n.m."
        ],
        importance: "Fue el principal centro político, religioso y militar de los Guerreros de las Nubes. Por su imponencia se le conoce como el Machu Picchu del Norte.",
        fact: "Toda su arquitectura fue construida sin mortero: las piedras encajan con una precisión milimétrica."
    },

    "gocta": {
        title: "Catarata Gocta",
        tag: "Turismo · Naturaleza",
        badge: "Amazonas",
        image: "assets/img/turismo/gocta.jpg",
        color: "#f2703a",
        soft: "rgba(242,112,58,.12)",
        features: [
            "Aproximadamente 771 metros de caída repartidos en dos saltos.",
            "Nace de las aguas del río Cocahuayco.",
            "Rodeada de bosque nublado y una gran biodiversidad.",
            "Sendero de acceso entre orquídeas y aves endémicas."
        ],
        importance: "Es una de las cataratas más altas del mundo y el principal atractivo ecoturístico de Amazonas, impulsando el desarrollo de las comunidades locales.",
        fact: "Fue dada a conocer al mundo en 2006, cuando el Instituto Geográfico Nacional del Perú la midió de manera oficial."
    },

    "mancora": {
        title: "Máncora",
        tag: "Turismo · Playa",
        badge: "Piura",
        image: "assets/img/turismo/mancora.jpg",
        color: "#f2703a",
        soft: "rgba(242,112,58,.12)",
        features: [
            "Playas de arena dorada y mar cálido que promedia los 26 °C.",
            "Sol durante más de 300 días al año.",
            "Ideal para surf, kitesurf y deportes acuáticos.",
            "Gastronomía marina y vida nocturna reconocidas."
        ],
        importance: "Es el principal destino de playa del norte peruano y el motor turístico de Piura, atrayendo visitantes nacionales y extranjeros durante todo el año.",
        fact: "Sus aguas cálidas permiten bañarse los 12 meses del año, algo poco común en el Pacífico."
    },

    "huanchaco": {
        title: "Huanchaco",
        tag: "Turismo · Tradición Viva",
        badge: "La Libertad",
        image: "assets/img/turismo/huanchaco.jpg",
        color: "#f2703a",
        soft: "rgba(242,112,58,.12)",
        features: [
            "Balneario frente a las aguas del océano Pacífico.",
            "Puerto de salida de los tradicionales caballitos de totora.",
            "Riqueza arqueológica de las culturas Mochica y Chimú."
        ],
        importance: "Es la cuna de una tradición marinera milenaria: los caballitos de totora, embarcaciones ancestrales que aún usan los pescadores.",
        fact: "Los caballitos de totora existen hace más de 3.000 años y fueron declarados Patrimonio Cultural de la Nación en el año 2000."
    },

    "canchaque": {
        title: "Canchaque",
        tag: "Turismo · Naturaleza y Tradición",
        badge: "Piura",
        image: "assets/img/turismo/canchaque.jpg",
        color: "#f2703a",
        soft: "rgba(242,112,58,.12)",
        features: [
            "Conocida como la Suiza Piurana por sus verdes paisajes.",
            "Montañas y bosques de neblina en la sierra de Piura.",
            "Cataratas, ríos y miradores naturales.",
            "Acceso natural hacia los bosques de neblina de la sierra de Huancabamba."
        ],
        importance: "Es el destino natural que conecta la costa con la sierra de Piura y conserva ecosistemas de neblina únicos en el norte del Perú.",
        fact: "Su clima fresco y sus montañas nubladas contrastan con el calor de la costa, a pocas horas de distancia."
    },

    /* ---------- HISTORIA ---------- */

    "mochica": {
        title: "Cultura Mochica",
        tag: "Historia · 100 - 800 d.C.",
        badge: "Historia",
        image: "assets/img/historia/mochica.jpg",
        color: "#0ea5a0",
        soft: "rgba(14,165,160,.12)",
        features: [
            "Cerámica naturalista de fama mundial, con huacos retratos.",
            "Avanzada ingeniería hidráulica con acueductos como Ascope y La Cumbre.",
            "Grandes centros ceremoniales: Huacas del Sol y de la Luna.",
            "Sociedad organizada en torno a la agricultura y el mar."
        ],
        importance: "Los Mochicas fueron los maestros ceramistas del antiguo Perú y una de las civilizaciones más sofisticadas de América en su época.",
        fact: "Sus huacos retrato son considerados los primeros retratos realistas de la humanidad."
    },

    "chimu": {
        title: "Reino Chimú",
        tag: "Historia · 900 - 1470 d.C.",
        badge: "Historia",
        image: "assets/img/historia/chimu.jpg",
        color: "#0ea5a0",
        soft: "rgba(14,165,160,.12)",
        features: [
            "Capital en Chan Chan, la ciudad de barro más grande de América.",
            "Tradición metalúrgica en oro, plata y cobre.",
            "Red de comercio marítimo con balsas de totora.",
            "Extenso territorio que llegó hasta la costa central."
        ],
        importance: "Fue el reino más poderoso de la costa antes de los Incas y un ejemplo de organización estatal y urbana prehispánica.",
        fact: "Su imperio se extendió desde Tumbes hasta el valle del río Chillón, a más de mil kilómetros de costa."
    },

    "chachapoyas": {
        title: "Cultura Chachapoyas",
        tag: "Historia · 800 - 1470 d.C.",
        badge: "Historia",
        image: "assets/img/historia/chachapoyas.jpg",
        color: "#0ea5a0",
        soft: "rgba(14,165,160,.12)",
        features: [
            "Conocidos como los Guerreros de las Nubes por habitar los Andes amazónicos.",
            "Construyeron la fortaleza de Kuélap con arquitectura monumental.",
            "Sarcófagos de Karajía y mausoleos en los acantilados.",
            "Cultivos en las laderas de las montañas nubladas."
        ],
        importance: "Desarrollaron una de las culturas más enigmáticas del norte, entre la sierra y la selva, dejando obras maestras de ingeniería.",
        fact: "Su escritura, sus momias y gran parte de su historia siguen siendo un misterio sin descifrar."
    },

    "actualidad": {
        title: "Un legado vivo",
        tag: "Historia · Actualidad",
        badge: "Historia",
        image: "assets/img/historia/actualidad.jpg",
        color: "#0ea5a0",
        soft: "rgba(14,165,160,.12)",
        features: [
            "Patrimonio arqueológico abierto al turismo en todo el norte.",
            "Tradiciones vivas como la marinera y los caballitos de totora.",
            "Artesanía transmitida de generación en generación.",
            "Reconocimientos nacionales e internacionales."
        ],
        importance: "El legado de las culturas del norte sigue vivo y fortalece la identidad cultural, la economía y el turismo de la región.",
        fact: "Cada año, miles de visitantes recorren Chan Chan, Kuélap y las Huacas del Sol y la Luna."
    },

    /* ---------- TRADICIONES ---------- */

    "marinera": {
        title: "Marinera Norteña",
        tag: "Tradiciones · Danza",
        badge: "Tradiciones",
        image: "assets/img/tradiciones/marinera.jpg",
        color: "#d6336c",
        soft: "rgba(214,51,108,.10)",
        features: [
            "Baile de pareja con pañuelo y movimientos elegantes.",
            "Ritmo alegre que combina el zapateo y el coqueteo.",
            "Trajes coloridos y cuidadosamente elaborados.",
            "Nacida en la costa norte del Perú."
        ],
        importance: "Es el baile símbolo del Perú y fue declarada Patrimonio Cultural de la Nación en 1986.",
        fact: "El Concurso Nacional de Marinera de Trujillo reúne cada enero a miles de participantes: es el certamen de danza más importante del país."
    },

    "caballitos": {
        title: "Caballitos de Totora",
        tag: "Tradiciones · Patrimonio",
        badge: "Tradiciones",
        image: "assets/img/tradiciones/caballitos.jpg",
        color: "#d6336c",
        soft: "rgba(214,51,108,.10)",
        features: [
            "Embarcaciones hechas a mano con totora.",
            "Técnica ancestral de pesca y navegación.",
            "Se construyen amarrando manojos de totora, sin madera ni metal.",
            "Usados por pescadores de Huanchaco y toda la costa norte."
        ],
        importance: "Representan una tradición marinera viva de más de 3.000 años, ligada a las culturas Mochica y Chimú.",
        fact: "Son anteriores a la llegada de los caballos a América: existen desde mucho antes que los españoles pisaran el Perú."
    },

    "gastronomia": {
        title: "Sabores del Norte",
        tag: "Tradiciones · Gastronomía",
        badge: "Tradiciones",
        image: "assets/img/tradiciones/gastronomia.jpg",
        color: "#d6336c",
        soft: "rgba(214,51,108,.10)",
        features: [
            "Ceviche de conchas negras, seco de cabrito y arroz con pato.",
            "Shambar, caldo verde y platos de costa, sierra y selva.",
            "Recetas heredadas por generaciones.",
            "Ingredientes locales como ajíes, maíz y pescados frescos."
        ],
        importance: "La cocina norteña es la base de la reconocida gastronomía peruana y una de sus mayores riquezas culturales.",
        fact: "El ceviche, cuyo origen se atribuye a la costa norte, fue declarado Patrimonio Cultural de la Nación en 2004."
    },

    "tejidos": {
        title: "Tejidos Ancestrales",
        tag: "Tradiciones · Artes Textiles",
        badge: "Tradiciones",
        image: "assets/img/tradiciones/tejidos.jpg",
        color: "#d6336c",
        soft: "rgba(214,51,108,.10)",
        features: [
            "Telar de cintura y técnicas prehispánicas.",
            "Fibras de algodón nativo en colores naturales.",
            "Tintes extraídos de plantas e insectos.",
            "Diseños heredados de culturas ancestrales."
        ],
        importance: "El tejido andino es un lenguaje cultural que transmite historia, identidad y conocimiento de generación en generación.",
        fact: "El algodón nativo peruano existe en 22 colores naturales, uno de los tesoros textiles más raros del mundo."
    },

    "cumananas": {
        title: "Cumananas",
        tag: "Tradiciones · Expresión Oral",
        badge: "Tradiciones",
        image: "assets/img/tradiciones/cumananas.jpg",
        color: "#d6336c",
        soft: "rgba(214,51,108,.10)",
        features: [
            "Coplas de contrapunto con tono picaresco.",
            "Improvisación poética en las festividades.",
            "Juego de ingenio entre contadores rivales.",
            "Tradición de la sierra de Piura y Cajamarca."
        ],
        importance: "Son la voz poética del norte andino y una expresión viva de la lengua y el humor popular.",
        fact: "Durante las fiestas, los contadores se retan en duelo verbal: gana quien improvise la copla más ocurrente."
    },

    "festividades": {
        title: "Festividades Populares",
        tag: "Tradiciones · Celebraciones",
        badge: "Tradiciones",
        image: "assets/img/tradiciones/festividades.jpg",
        color: "#d6336c",
        soft: "rgba(214,51,108,.10)",
        features: [
            "Carnaval de Cajamarca, uno de los más grandes del país.",
            "Fiestas patronales y religiosas en cada región.",
            "Danza de los diablicos de huancabamba, música y gastronomía típica de piura canchaque.",
            "Reúnen a familias y comunidades enteras."
        ],
        importance: "Las festividades fortalecen los lazos comunitarios y conservan las creencias y costumbres de los pueblos del norte.",
        fact: "El Carnaval de Cajamarca es la segunda celebración más grande del Perú y atrae a miles de turistas cada febrero."
    },

    /* ---------- ARTESANOS ---------- */

    "juan-perez": {
        title: "Juan Pérez",
        tag: "Maestro Textil · Piura",
        badge: "Piura",
        image: "assets/img/artesanos/artesano1.jpg",
        color: "#7c4dd6",
        soft: "rgba(124,77,214,.12)",
        features: [
            "Más de 30 años de experiencia en el telar.",
            "Técnicas de tejido heredadas de su familia.",
            "Fibras y algodón nativo del norte.",
            "Diseños con iconografía tradicional."
        ],
        importance: "Mantiene vivo el tejido tradicional norteño y enseña el oficio a los jóvenes de su comunidad.",
        fact: "Sus piezas han sido exhibidas en ferias nacionales e internacionales de artesanía."
    },

    "maria-lopez": {
        title: "María López",
        tag: "Ceramista · Lambayeque",
        badge: "Lambayeque",
        image: "assets/img/artesanos/artesano2.jpg",
        color: "#7c4dd6",
        soft: "rgba(124,77,214,.12)",
        features: [
            "Cerámica inspirada en la cultura Mochica.",
            "Modelado a mano y quema artesanal.",
            "Técnicas de alfarería precolombina.",
            "Acabados con motivos de la huaca."
        ],
        importance: "Revaloriza la cerámica Mochica y resguarda una de las tradiciones más importantes de Lambayeque.",
        fact: "Replica técnicas de alfarería usadas hace más de 1.000 años."
    },

    "pedro-sanchez": {
        title: "Pedro Sánchez",
        tag: "Artesano de Totora · La Libertad",
        badge: "La Libertad",
        image: "assets/img/artesanos/artesano3.jpg",
        color: "#7c4dd6",
        soft: "rgba(124,77,214,.12)",
        features: [
            "Construcción artesanal de caballitos de totora.",
            "Técnicas ancestrales de amarrado.",
            "Pesca tradicional en Huanchaco.",
            "Materiales 100% naturales."
        ],
        importance: "Preserva la técnica de navegación ancestral más antigua de la costa peruana.",
        fact: "Enseña el oficio a las nuevas generaciones para que la tradición nunca se pierda."
    },

    "ana-torres": {
        title: "Ana Torres",
        tag: "Tejedora · Amazonas",
        badge: "Amazonas",
        image: "assets/img/artesanos/artesano4.jpg",
        color: "#7c4dd6",
        soft: "rgba(124,77,214,.12)",
        features: [
            "Tejidos con diseños Chachapoyas.",
            "Tintes naturales de la selva.",
            "Telar de cintura.",
            "Iconografía de los Guerreros de las Nubes."
        ],
        importance: "Conserva la iconografía Chachapoya y el conocimiento textil de los Andes amazónicos.",
        fact: "Usa tintes extraídos de plantas y frutos de su propia región."
    },

    "luis-diaz": {
        title: "Luis Díaz",
        tag: "Tallador · Cajamarca",
        badge: "Cajamarca",
        image: "assets/img/artesanos/artesano5.jpg",
        color: "#7c4dd6",
        soft: "rgba(124,77,214,.12)",
        features: [
            "Tallado en piedra y madera.",
            "Técnicas tradicionales de la sierra.",
            "Esculturas religiosas y decorativas.",
            "Herramientas artesanales."
        ],
        importance: "Rescata las técnicas de tallado que adornan iglesias y casas de Cajamarca.",
        fact: "Sus tallados decoran iglesias y casas históricas de la región."
    },

    "rosa-castillo": {
        title: "Rosa Castillo",
        tag: "Artesana Marina · Tumbes",
        badge: "Tumbes",
        image: "assets/img/artesanos/artesano6.jpg",
        color: "#7c4dd6",
        soft: "rgba(124,77,214,.12)",
        features: [
            "Arte decorativo con conchas marinas.",
            "Inspirado en el mar de Tumbes.",
            "Piezas únicas hechas a mano.",
            "Materiales reciclados y naturales."
        ],
        importance: "Revalora el arte marino y el cuidado de los ecosistemas costeros.",
        fact: "Recicla conchas y materiales del mar para crear arte sostenible."
    },

    /* ---------- MAPA / REGIONES ---------- */

    "tumbes": {
        title: "Tumbes",
        tag: "Región · Costa Norte",
        badge: "Tumbes",
        image: "assets/img/mapa/tumbes.jpg",
        color: "#d99a1b",
        soft: "rgba(217,154,27,.14)",
        features: [
            "Única región con manglares de la costa peruana.",
            "Reserva Nacional de Tumbes.",
            "Playas como Punta Sal y Zorritos.",
            "Ceviche de conchas negras."
        ],
        importance: "Su riqueza ecológica y su frontera con Ecuador la convierten en un punto estratégico del turismo del norte.",
        fact: "El manglar de Tumbes es el más septentrional de Sudamérica y hogar de cocodrilos y aves únicas."
    },

    "piura": {
        title: "Piura",
        tag: "Región · Costa y Sierra",
        badge: "Piura",
        image: "assets/img/mapa/piura.jpg",
        color: "#d99a1b",
        soft: "rgba(217,154,27,.14)",
        features: [
            "Destinos de playa como Máncora y Colán.",
            "Orfebrería y picantería de Catacaos.",
            "Sierra verde con bosques de neblina.",
            "Platos como el seco de chabelo."
        ],
        importance: "Es la puerta turística del norte y combina desierto, playa y montaña en una sola región.",
        fact: "Catacaos es famoso por su orfebrería en oro y plata, heredada de los talleres virreinales."
    },

    "lambayeque": {
        title: "Lambayeque",
        tag: "Región · Arqueología",
        badge: "Lambayeque",
        image: "assets/img/mapa/lambayeque.jpg",
        color: "#d99a1b",
        soft: "rgba(217,154,27,.14)",
        features: [
            "Museo Tumbas Reales de Sipán.",
            "Tradición alfarera y textil.",
            "Huaca Rajada, donde se halló al Señor de Sipán.",
            "Arroz con pato y causa norteña."
        ],
        importance: "Guardó el hallazgo arqueológico más importante de América: la tumba del Señor de Sipán.",
        fact: "El Señor de Sipán fue descubierto en 1987 y su ajuar dorado revolucionó la arqueología mundial."
    },

    "cajamarca": {
        title: "Cajamarca",
        tag: "Región · Sierra Norte",
        badge: "Cajamarca",
        image: "assets/img/mapa/cajamarca.jpg",
        color: "#d99a1b",
        soft: "rgba(217,154,27,.14)",
        features: [
            "Baños del Inca, aguas termales de origen inca.",
            "Carnaval de Cajamarca.",
            "Historia del encuentro entre Incas y españoles (1532).",
            "Platos como el caldo verde y el cuy frito."
        ],
        importance: "Es la cuna de la historia andina del norte y su carnaval es una fiesta Patrimonio del Perú.",
        fact: "Sus baños termales fueron usados por el Inca Atahualpa antes del histórico encuentro de Cajamarca."
    },

    "amazonas": {
        title: "Amazonas",
        tag: "Región · Andes Amazónicos",
        badge: "Amazonas",
        image: "assets/img/mapa/amazonas.jpg",
        color: "#d99a1b",
        soft: "rgba(217,154,27,.14)",
        features: [
            "Fortaleza de Kuélap.",
            "Sarcófagos de Karajía y mausoleos de Revash.",
            "Bosques de neblina y gran biodiversidad.",
            "Juane y platos de la selva alta."
        ],
        importance: "Conserva la herencia de los Guerreros de las Nubes y paisajes de selva andina únicos.",
        fact: "Kuélap, conocida como el Machu Picchu del Norte, se visita hoy con un moderno teleférico."
    },

    "lalibertad": {
        title: "La Libertad",
        tag: "Región · Costa y Sierra",
        badge: "La Libertad",
        image: "assets/img/mapa/lalibertad.jpg",
        color: "#d99a1b",
        soft: "rgba(217,154,27,.14)",
        features: [
            "Chan Chan, ciudad de barro Patrimonio de la UNESCO.",
            "Huacas del Sol y de la Luna en Moche.",
            "Balneario de Huanchaco y sus caballitos de totora.",
            "Trujillo, cuna de la marinera."
        ],
        importance: "Reúne la mayor concentración de patrimonio arqueológico y tradición viva del norte peruano.",
        fact: "Trujillo, su capital, es conocida como la Ciudad de la Primavera Eterna por su clima."
    }

};

/* ================================================
            ELEMENTOS DEL MODAL
================================================ */

const modal = document.getElementById("info-modal");
const modalImage = document.getElementById("modal-image");
const modalBadge = document.getElementById("modal-badge");
const modalTag = document.getElementById("modal-tag");
const modalTitle = document.getElementById("modal-title");
const modalFeatures = document.getElementById("modal-features");
const modalImportance = document.getElementById("modal-importance");
const modalFact = document.getElementById("modal-fact");

/* ================================================
            NORMALIZADOR DE REGIONES
================================================ */

const normalizeRegion = (name) => name.trim().toLowerCase().replace(/[^a-z0-9]/g, "");

/* ================================================
            ABRIR / CERRAR
================================================ */

function openModal(data) {

    if (!data) return;

    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalBadge.textContent = data.badge;
    modalTag.textContent = data.tag;
    modalTitle.textContent = data.title;

    modalFeatures.innerHTML = "";

    data.features.forEach((f) => {

        const li = document.createElement("li");
        li.textContent = f;
        modalFeatures.appendChild(li);

    });

    modalImportance.textContent = data.importance;
    modalFact.textContent = data.fact;

    modal.style.setProperty("--modal-accent", data.color);
    modal.style.setProperty("--modal-accent-soft", data.soft);

    document.body.style.overflow = "hidden";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    gsap.fromTo(modalImage, { scale: 1.15 }, { scale: 1, duration: 1, ease: "power2.out" });
    gsap.from(".modal__body > *", { y: 18, opacity: 0, stagger: .06, duration: .5, ease: "power2.out", clearProps: "all" });

}

function closeModal() {

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

}

document.querySelectorAll("[data-close]").forEach((el) => {

    el.addEventListener("click", closeModal);

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") closeModal();

});

/* ================================================
            BOTÓN "VER MÁS"
================================================ */

function injectViewMore(container, onClick) {

    const btn = document.createElement("span");
    btn.className = "view-more";
    btn.textContent = "Ver más";
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        onClick();
    });
    container.appendChild(btn);

}

document.querySelectorAll(".tour-card").forEach((card) => {

    injectViewMore(card.querySelector(".tour-card__overlay"), () => openModal(MODAL_DATA[card.dataset.key]));

});

document.querySelectorAll(".tradition-card").forEach((card) => {

    injectViewMore(card.querySelector(".tradition-overlay"), () => openModal(MODAL_DATA[card.dataset.key]));

});

document.querySelectorAll(".timeline-item").forEach((item) => {

    injectViewMore(item.querySelector(".timeline-content"), () => openModal(MODAL_DATA[item.dataset.key]));

});

injectViewMore(document.querySelector(".artisan-info"), () => {

    const active = document.querySelector(".artisan-thumb img.active");
    openModal(MODAL_DATA[active.dataset.key]);

});

injectViewMore(document.querySelector(".map-card"), () => {

    const name = document.getElementById("map-region").textContent;
    openModal(MODAL_DATA[normalizeRegion(name)]);

});

/* ================================================
            CLIC EN TARJETAS
================================================ */

document.querySelectorAll("[data-key]").forEach((card) => {

    card.addEventListener("click", () => {

        if (card.dataset.key === "mapa") {

            const name = document.getElementById("map-region").textContent;
            openModal(MODAL_DATA[normalizeRegion(name)]);
            return;

        }

        openModal(MODAL_DATA[card.dataset.key]);

    });

});
