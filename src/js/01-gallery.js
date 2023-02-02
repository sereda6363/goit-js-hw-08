import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery")

const imageEl = galleryItems.map(elem => `<a class="gallery__link" href="${elem.original}">
    <img
    class="gallery__image"
    src="${elem.preview}" 
    data-source="${elem.original}" 
    alt="${elem.description}"/>
  </a>`).join("");
galleryEl.insertAdjacentHTML("beforeend", imageEl);
new SimpleLightbox(".gallery a",{captionDelay:250, captionPosition:"botton", captionsData:"alt"})