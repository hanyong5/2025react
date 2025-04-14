import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeComp from "./components/HomeComp";
import PostListComp from "./components/PostListComp";
import ViewComp from "./components/ViewComp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeComp />} />
      <Route path="/list" element={<PostListComp />} />
      <Route path="/view/:id" element={<ViewComp />} />
    </Routes>
  );
}

export default App;
