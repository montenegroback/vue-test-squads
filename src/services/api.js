import axios from '../plugins/axios';

const getCharacters = (options = {}) => {
  return axios.get(`/character/`, options)
};

const getCharactersRandom = (ids) => {
  return axios.get(`/character/${ids}`)
};

export default {
  getCharacters,
  getCharactersRandom
}