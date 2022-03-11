import axios from '../plugins/axios';

const getCharacters = (options = {}) => {
  return axios.get(`/character/`, options)
};

export default {
  getCharacters
}