import { createSlice } from "@reduxjs/toolkit";

const initState = {
  email: "",
  nickname: "hanyong5",
  userid: 10,
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initState,
  reducers: {
    login: (state, action) => {
      console.log("login....");
    },

    logout: (state, action) => {
      console.log("logOut....");
    },
  },
});

export default loginSlice.reducer;
export const { login, logout } = loginSlice.actions;
