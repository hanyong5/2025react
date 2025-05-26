import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

export const getUserList = async () => {
  const res = await axios.get(url);
  return res.data;
};
