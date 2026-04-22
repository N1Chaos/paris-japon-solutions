/* =========================
   📩 EMAIL DISPLAY
========================= */
function showEmail() {
    document.getElementById("email").innerHTML =
        "contact@parisjapon-solutions.com";
}

/* =========================
   🌿 FADE-IN JAPONAIS (SAFE)
   IntersectionObserver clean
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");

                // option optimisation : arrêter d'observer après apparition
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px"
    });

    elements.forEach(el => observer.observe(el));
});

/* =========================
   🌐 LANGUAGE MEMORY (optionnel mais PRO)
   utile pour ton FR/JP site
========================= */

function setLanguage(lang) {
    localStorage.setItem("lang", lang);
}

function getLanguage() {
    return localStorage.getItem("lang");
}

/* =========================
   🔁 AUTO REDIRECTION (optionnel)
   si tu veux activer navigation intelligente
========================= */

(function autoRedirectLanguage() {

    const savedLang = getLanguage();

    if (savedLang) return;

    const browserLang = navigator.language || navigator.userLanguage;

    let lang = "jp";

    if (browserLang.startsWith("fr")) {
        lang = "fr";
    } else if (browserLang.startsWith("ja")) {
        lang = "jp";
    }

    setLanguage(lang);

    // ⚠️ désactivé par défaut pour éviter redirection surprise
    // window.location.href = lang + "/index.html";

})();

// 🌐 GESTION LANGUE ACTIVE
const currentLang = document.documentElement.lang;

const frBtn = document.querySelector(".lang-fr");
const jpBtn = document.querySelector(".lang-jp");

if (currentLang === "fr") {
    frBtn.style.opacity = "0.4";
    frBtn.style.pointerEvents = "none"; // désactive le clic
}

if (currentLang === "ja") {
    jpBtn.style.opacity = "0.4";
    jpBtn.style.pointerEvents = "none";
}

const lang = window.location.pathname.includes("/jp") ? "jp" : "fr";

document.querySelectorAll(".nav-lang a").forEach(a => {
    a.classList.remove("active");

    if (lang === "jp" && a.textContent.includes("JP")) {
        a.classList.add("active");
    }

    if (lang === "fr" && a.textContent.includes("FR")) {
        a.classList.add("active");
    }
});