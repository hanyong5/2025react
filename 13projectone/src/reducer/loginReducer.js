const init = {
  value: 0,
  email: "",
  nickname: "",
};

const loginReducer = (state = init, action) => {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return {
        ...state,
        value: state.value + action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
