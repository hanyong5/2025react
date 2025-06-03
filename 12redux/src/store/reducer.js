const initState = {
  value: 1,
};

const reducer = (state = initState, action) => {
  console.log(state.value);

  if (action.type == "add") {
    return {
      ...state,
      value: state.value + action.payload,
    };
  }

  return state;
};

export default reducer;
