const translations = {
    "en": {
        "nav-home": "HOME",
        "nav-content": "CONTENT",
        "nav-community": "COMMUNITY",
        "nav-raje": "RAJE",
        "login": "Log in",
        "cta": "START NOW<br />NO FEES REQUIRED",
        "comunidad-texto": `Be part of a vibrant and authentic community, where no one keeps their thoughts to themselves, and recommendations about TV shows, movies, and books flow unfiltered. At Raje, we don't just share opinions: we've created a family united by a passion for content and freedom of expression.`,
        "sobre-texto": `Raje by Caleta Innovations is the platform where you can rant without shame about movies, TV shows, books, and more. Here we speak openly, without filters. You give your opinion, rate content, and we recommend things that truly connect with you. We also show you where to watch or get what you like, and everything is saved in your profile. At Raje, sincerity rules and every opinion counts.`,
        "footer-eslogan": "RAJE – Uncensored, with style.",
        "footer-nav": "NAVIGATION",
        "footer-peliculas": "Movies",
        "footer-series": "Series",
        "footer-libros": "Books",
        "footer-comunidad": "COMMUNITY",
        "footer-lema": "Raje is freedom"
    },
    "es": {
        "nav-home": "INICIO",
        "nav-content": "CONTENIDO",
        "nav-community": "COMUNIDAD",
        "nav-raje": "RAJE",
        "login": "Iniciar sesión",
        "cta": "INICIA AHORA<br />NO SE COBRAN CUPOS",
        "comunidad-texto": `Formá parte de una comunidad vibrante y auténtica, donde nadie se guarda lo que piensa y las recomendaciones sobre series, películas y libros fluyen sin filtros. En Raje, no solo compartimos opiniones: creamos una familia unida por la pasión por el contenido y la libertad de expresión.`,
        "sobre-texto": `Raje de Caleta Innovations es la plataforma donde podés rajar sin roche sobre pelis, series, libros y más. Acá se habla claro, sin floro. Opinás, calificás y te recomendamos cosas que de verdad van contigo. También te mostramos dónde ver o conseguir lo que te gusta, y todo queda en tu perfil. En Raje, la sinceridad manda y cada opinión suma.`,
        "footer-eslogan": "RAJE - Sin censura, con estilo.",
        "footer-nav": "NAVEGACIÓN",
        "footer-peliculas": "Películas",
        "footer-series": "Series",
        "footer-libros": "Libros",
        "footer-comunidad": "COMUNIDAD",
        "footer-lema": "Raje es libertad"
    }
};


const langLinks = document.querySelectorAll('.lang-switch a');

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

langLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('.lang-switch .active')?.classList.remove('active');
        link.classList.add('active');
        const lang = link.getAttribute('data-lang');
        setLanguage(lang);
    });
});

// Idioma por defecto
setLanguage('es');
