import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID gcbjbSsPouLrN6mnFVCwrw578Cwv2YJ_ECaWfV-5rdw ',
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
