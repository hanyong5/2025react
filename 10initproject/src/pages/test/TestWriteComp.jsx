import React, { useState } from "react";
import { Link } from "react-router-dom";

const init = {
  title: "",
  name: "",
  content: "",
};

function TestWriteComp() {
  const [testImageAdd, setTestImageAdd] = useState({ ...init });
  const [fileName, setFileName] = useState("이미지 파일업로드");
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);

  const handleSubmit = () => {
    alert("글작성");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("데이터 : " + name + "/" + value);
    setTestImageAdd({
      ...testImageAdd,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [...images, ...files];
    setImages(newImages);
    console.log(newImages);

    const newPreviews = [
      ...imagePreview,
      ...files.map((file) => {
        return URL.createObjectURL(file);
      }),
    ];

    console.log(newPreviews);

    setImagePreview(newPreviews);

    // const reader = new FileReader();
    // reader.readAsDataURL(files[0]);

    // reader.onload = () => {
    //   console.log(reader.result);
    // };
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
          <div> {testImageAdd?.title}</div>
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
          <div> {testImageAdd?.name}</div>
          <div className="flex items-center mb-3">
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
          {/* <div className="flex items-center">
            <label htmlFor="files" className="w-[100px]">
              첨부파일
            </label>
            <input type="file" id="files" name="files" />
          </div> */}

          <div
            className="
          flex items-center justify-center h-[150px] border 
          border-gray-300 rounded-md bg-gray-200 hover:bg-gray-400 relative mb-3"
          >
            {fileName}
            <input
              type="file"
              name="files"
              className="absolute w-full h-full bg-blue-300 opacity-0"
              onChange={handleFileChange}
              multiple
              accept="image/*"
            />
          </div>

          {/* preview */}

          <div className="flex gap-3 mb-4 flex-wrap">
            {imagePreview.map((item, i) => {
              return (
                <div className="w-[100px] h-[100px] ">
                  <img
                    src={item}
                    alt=""
                    className="w-[100px] h-[100px] object-cover rounded"
                  />
                </div>
              );
            })}
          </div>

          {/* preview */}

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
