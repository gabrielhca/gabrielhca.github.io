// Menu Ativo

const links = document.querySelectorAll(".header nav a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
