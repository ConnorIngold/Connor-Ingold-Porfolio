import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["One half logical the other half creative"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
