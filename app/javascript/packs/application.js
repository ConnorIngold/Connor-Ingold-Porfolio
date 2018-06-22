/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import { loadDynamicBannerText } from '../components/banner';
loadDynamicBannerText();

for (let i = 0; i < listItems.length; i++){
  listItems[i].addEventListener('mouseover', () =>{
  listItems[i].textContent = listItems[i].textContent.toUpperCase();
  });

  listItems[i].addEventListener('mouseout', () =>{
  listItems[i].textContent = listItems[i].textContent.toLowerCase();
  });
}


listDiv.addEventListener('mouseover', (event) =>{
event.target.textContent = event.target.textContent.toUpperCase();
});

listDiv.addEventListener('mouseout', (event) =>{
event.target.textContent = event.target.textContent.toLowerCase();
});
