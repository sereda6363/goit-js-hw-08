// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery")

const imageEl = galleryItems.map(elem => `<a class="gallery__item" href="${elem.original}">
    <img
    class="gallery__image"
    src="${elem.preview}"
    data-source="${elem.original}"   
    alt="${elem.description}"/>
  </a>`).join("");
galleryEl.insertAdjacentHTML("beforeend", imageEl);

galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault()
  if (evt.target.nodeName !== 'IMG') {
    return
  }
  const dataEl = evt.target.getAttribute('data-source')
  const modalEl = basicLightbox.create(`
		<img src="${dataEl}" width="1280">
	`, {
		onShow: () => document.body.addEventListener ('keydown', closeEsc),
		onClose: () => document.body.removeEventListener  ('keydown', closeEsc)
  })
  
  modalEl.show()

  function closeEsc(evt){
    if (evt.key === 'Escape'){
      modalEl.close()
    }
  }
}
