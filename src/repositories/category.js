import config from '../config';

const CATEGORY_URL = `${config.API_URL}/categories`;

function getVideos(extraPath = '') {
  return fetch(`${CATEGORY_URL}${extraPath}`)
    .then(async (response) => {
      if (response.ok) {
        const json = response.json();
        return json;
      }

      throw new Error('Could not fetch data');
    });
}

function getAllWithVideos() {
  return getVideos('?_embed=videos');
}

function getAll() {
  return getVideos();
}

export default {
  getAll,
  getAllWithVideos,
};
