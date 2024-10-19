function redirectToLanguageVersionManual(language) {
  switch (language) {
    case "en":
      window.location.href = "index-en.html";
      break;
    default:
      window.location.href = "./";
      break;
  }
}

function redirectToLanguageVersion(language) {
  const urlParams = new URLSearchParams(window.location.search);
  if (!urlParams.get('manualRedirect') && !urlParams.get('outraCondicao')) {
    switch (language) {
      case "en":
        window.location.href = "index-en.html?redirected=true";
        break;
      default:
        window.location.href = "./?redirected=true";
        break;
    }
  }
}


document.getElementById('language').addEventListener('click', function() {
  redirectToLanguageVersionManual("en");
});


redirectToLanguageVersion(browserLanguage);
