import config from '../config';

const VIDEOS_URL = `${config.API_URL}/videos`;

function create(video) {
  return fetch(`${VIDEOS_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (response) => {
      if (response.ok) {
        const json = response.json();
        return json;
      }

      throw new Error('Could not fetch data');
    });
}

export default {
  create,
};
