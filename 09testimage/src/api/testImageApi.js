import axios from "axios";

const API_SERVER_HOST = "http://localhost:8080";

const prefix = `${API_SERVER_HOST}/test`;

export const getList = async (params) => {
  const { page, size } = params;
  //   console.log(page, size);

  const res = await axios.get(prefix, {
    params: {
      page: page,
      size: size,
    },
  });
  return res.data;
};
