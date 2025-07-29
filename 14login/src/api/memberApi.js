import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const loginPost = async (loginParam) => {
  const header = {
    headers: {
      "Content-Type": "x-www-form-urlencoded",
    },
  };

  const formData = new FormData();
  formData.append("username", loginParam.email);
  formData.append("password", loginParam.password);

  const response = await axios.post(
    URL + "/api/member/login",
    formData,
    header
  );

  return response.data;
};

export { loginPost };
