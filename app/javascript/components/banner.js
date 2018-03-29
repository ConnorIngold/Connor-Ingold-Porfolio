import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#hello', {
    strings: ["HTML/CSS", "Ruby/Ruby On Rails", "Javascript", "Git", "Heroku", "PhotoShop", "Sketch", "Bootstrap", "SCSS/SASS", "Type.js"],
    typeSpeed: 100,
    loop: true
  });
}

export { loadDynamicBannerText };
