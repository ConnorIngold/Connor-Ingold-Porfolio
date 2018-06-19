import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#hello', {
    strings: ["HTML/CSS", "Ruby", "JavaScript", "Ruby On Rails", "Git", "Heroku", "PhotoShop", "Sketch", "Bootstrap", "SCSS/SASS", "Type.js"],
    typeSpeed: 100,
    loop: true
  });
}

export { loadDynamicBannerText };
