import React, { useState } from "react";
import { Link } from "react-router-dom";

const init = {
  title: "",
  name: "",
  content: "",
};

function TestWriteComp() {
  const [testImageAdd, setTestImageAdd] = useState({ ...init });

  const handleSubmit = () => {
    alert("글작성");
  };

  const handleChange = () => {
    console.log("title");
  };
  return (
    <div>
      <h3 className="text-2xl font-bold py-4 border-b-2 border-gray-300 mb-3">
        글작성
      </h3>

      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-3">
            <label htmlFor="title" className="w-[100px]">
              <span className="text-red-500">*</span> 제목
            </label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              id="title"
              className="border rounded-sm p-2 w-full"
            />
          </div>
          <div className="flex items-center mb-3">
            <label htmlFor="name" className="w-[100px]">
              <span className="text-red-500">*</span> 이름
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              id="name"
              className="border rounded-sm p-2 w-full"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="content" className="w-[100px]">
              <span className="text-red-500">*</span> 내용
            </label>
            <textarea
              name="content"
              id="content"
              onChange={handleChange}
              className="border rounded w-full h-[200px]"
            ></textarea>
          </div>

          {/* button start */}
          <div className="flex justify-end gap-3 mt-3 mb-3">
            <button
              type="submit"
              className="bg-green-500 px-4 py-2 rounded text-white font-bold text-xl hover:bg-green-600"
            >
              작성완료
            </button>
            <button className="bg-blue-500 px-4 py-2 rounded text-white font-bold text-xl hover:bg-blue-600">
              <Link to="/test/list">글리스트</Link>
            </button>
          </div>
          {/* button end */}
        </form>
      </div>
    </div>
  );
}

export default TestWriteComp;
