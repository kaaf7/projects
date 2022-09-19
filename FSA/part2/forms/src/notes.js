import axios from "axios";
const baseUrl = "httep://localhost:3002/notes";

const getAll = () => {
  return axios.get(baseUrl);
};
const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

export default {
  getAll,
  create,
  update,
};
