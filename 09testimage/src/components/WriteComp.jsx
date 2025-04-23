import React, { useState } from "react";

const initState = {
  title: "",
  name: "",
  content: "",
};

function WriteComp() {
  const [testImageAdd, setTestImageAdd] = useState({ ...initState });
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title == "") {
      alert("title을 입력하세요");

      document.querySelector("input[name='title']").focus();
    }
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  return (
    <div className="px-4">
      <h3 className="text-bold">글작성</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-3">
            제목 {title}
          </label>
          <input
            type="text"
            name="title"
            onChange={handleTitle}
            className="border rounded w-full p-2"
            id="title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-3">
            작성자
          </label>
          <input
            type="text"
            name="name"
            className="border rounded w-full p-2"
            id="name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block mb-3">
            내용
          </label>
          <textarea
            name="content"
            className="border rounded w-full p-2 h-[200px]"
            id="content"
            row="5"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="files" className="block mb-3">
            파일
          </label>
          <input
            type="file"
            name="files"
            className="border rounded w-full p-2"
            id="files"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            등록
          </button>
        </div>
      </form>
    </div>
  );
}

export default WriteComp;
