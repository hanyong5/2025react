import axios from "axios";
import jwtAxios from "../utils/jwtUtil";

const URL = import.meta.env.VITE_API_URL;

const getCompany = async () => {
  //   const response = await axios.get(URL + "/api/bbs/about");
  const response = await jwtAxios.get(URL + "/api/bbs/about");
  return response.data;
};
const getHistory = async () => {
  //   const response = await axios.get(URL + "/api/bbs/his");
  const response = await jwtAxios.get(URL + "/api/bbs/his");
  return response.data;
};

export { getCompany, getHistory };
