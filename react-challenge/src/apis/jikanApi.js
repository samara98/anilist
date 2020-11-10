const { default: Axios } = require('axios');

const jikanApi = Axios.create({
  baseURL: 'https://api.jikan.moe/v3',
});

export default jikanApi;
