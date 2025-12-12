if (window.SimpleAnime) {
  new SimpleAnime();
}

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

function initAnimationScroll() {
  const sections = document.querySelectorAll(".js-animation");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimationScroll();

var idiomaNavegador = navigator.language || navigator.userLanguage;

function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  if (themeToggle) {
    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      body.classList.add(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
      } else {
        localStorage.removeItem('theme');
      }
    });
  }
}
initThemeToggle();

