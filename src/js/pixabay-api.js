import axios from 'axios';

const API_KEY = "42305784-5d55228baaa9a6392a5b2668b";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data; 
  } catch (error) {
    console.error("Error fetching images from Pixabay API:", error);
    throw error; 
  }
}