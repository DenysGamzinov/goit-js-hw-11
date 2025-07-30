import { refs } from "./refs";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let galleryLightboxInstance;

export function createGallery(images) {
  const markup = images
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `<li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" title="${tags}"/>
          <div class="info">
            <h3>Likes</h3>
            <p>${likes}</p>
            <h3>Views</h3>
            <p>${views}</p>
            <h3>Comments</h3>
            <p>${comments}</p>
            <h3>Downloads</h3>
            <p>${downloads}</p>
          </div>
        </a>
      </li>`;
    })
    .join("");

  refs.gallery.innerHTML = markup;

  if (!galleryLightboxInstance) {
    galleryLightboxInstance = new SimpleLightbox(".gallery a", {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    galleryLightboxInstance.refresh();
  }
}

export function clearGallery() {
  refs.gallery.innerHTML = "";
}

export function showLoader() {
  refs.loader.classList.remove("is-hidden");
}

export function hideLoader() {
  refs.loader.classList.add("is-hidden");
}