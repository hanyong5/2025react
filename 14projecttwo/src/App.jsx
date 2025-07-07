import React from "react";
import { useSelector } from "react-redux";

function App() {
  const email = useSelector((state) => {
    return state.loginSlice.email;
  });

  return (
    <div>
      <h2>사용자 정보</h2>
      <p>이메일: {email}</p>
    </div>
  );
}

export default App;
