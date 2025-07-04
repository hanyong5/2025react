import { configureStore, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

const countSlice = createSlice({
  name: "count",
  initialState: { num: 1 },
  reducers: {
    up: (state, action) => {
      console.log("up", action);
      state.num += action.payload;
      return state;
    },
    down: (state, action) => {
      console.log("down");
      state.num -= action.payload;
      return state;
    },
  },
});

// const loginSlice =createSlice({
//   name:"login",

// })

const store = configureStore({
  reducer: {
    countSlice: countSlice.reducer,
    // loginSlice:loginSlice.reducer
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className="border-1 p-3">
        App
        <ChildOne />
      </div>
    </Provider>
  );
}

function ChildOne() {
  const num = useSelector((state) => {
    return state.countSlice.num;
  });

  const dispatch = useDispatch();
  return (
    <>
      <div className="border-1 p-3">
        ChildOne
        <p>num : {num}</p>
        <div
          className="btn btn-accent btn-sm"
          onClick={() => {
            dispatch(countSlice.actions.up(1));
          }}
        >
          클릭
        </div>
        <div
          className="btn btn-accent btn-sm"
          onClick={() => {
            dispatch(countSlice.actions.down(1));
          }}
        >
          클릭
        </div>
      </div>
    </>
  );
}

export default App;
