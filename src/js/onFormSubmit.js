import { refs } from "./refs";
import { pixabayApi } from "./pixabay-api";
import { checkFunction } from "./render-functions";

export function onFormSubmit(event) {
    event.preventDefault();
    refs.gallery.innerHTML = "";
    const userText = refs.input.value.trim();
    if (userText !== "") {
        pixabayApi(userText).then(checkFunction).catch().finally(()=>refs.gallery.classList.remove("loader"));
    };
}