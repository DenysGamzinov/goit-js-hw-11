import { refs } from "./refs";
import { getImagesByQuery } from "./pixabay-api";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
} from "./render-functions";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export async function onFormSubmit(event) {
    event.preventDefault();

    const userInput = refs.input.value.trim();

    if (userInput === '') {
        iziToast.error({
            message: 'Please enter something to search for images!',
            position: 'topRight',
        });
        return;
    }

    clearGallery();
    showLoader();

    try {
        const data = await getImagesByQuery(userInput);

        if (data.hits.length === 0) {
            iziToast.info({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
            return;
        }

        createGallery(data.hits);

    } catch (error) {
        console.error('Error during image search:', error);
        iziToast.error({
            message: 'Unfortunately, there was an error loading images. Please try again later!',
            position: 'topRight',
        });
    } finally {
        hideLoader();
    }
}