import axios from "axios";

const API_SERVER_HOST = "http://localhost:8080";

const prefix = `${API_SERVER_HOST}/api/test/`;

export const postAdd = async (formData) => {
  const res = await axios.post(prefix, formData);
  return res.data;
};

export const getList = async () => {
  const res = await axios.get(prefix);
  return res.data;
};

export const getOne = async (tno) => {
  const res = await axios.get(`${prefix}view/${tno}`);
  return res.data;
};

export const putOne = async (tno, formData) => {
  const header = { headers: { "Content-Type": "multipart/form-data" } };
  const res = await axios.put(`${prefix}update/${tno}`, formData, header);
  return res.data;
};
