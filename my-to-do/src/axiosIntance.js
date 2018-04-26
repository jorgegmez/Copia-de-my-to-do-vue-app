import axios from 'axios';

const instance = axios.create({
  baseURL : 'https://dnamic.lib.id/practiceserver/',
  headers : {'X-Custom-Header' : 'foobar'},
});

export default instance;