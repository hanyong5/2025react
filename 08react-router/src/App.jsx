import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeComp from "./components/HomeComp";
import PostListComp from "./components/PostListComp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeComp />} />
      <Route path="/list" element={<PostListComp />} />
    </Routes>
  );
}

export default App;
