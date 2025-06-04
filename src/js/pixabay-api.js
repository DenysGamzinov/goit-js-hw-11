import { refs } from "./refs";

export function pixabayApi(userText) {
    const API_KEY = "42305784-5d55228baaa9a6392a5b2668b";
    const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + userText + "&image_type=photo&orientation=horizontal&safesearch=true";
    refs.gallery.classList.add("loader");
    return fetch(URL).then(res => res.json());
}