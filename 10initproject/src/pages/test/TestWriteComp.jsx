import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postAdd } from "../../api/testApi";

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

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!testImageAdd.title.trim()) {
      alert("제목을 입력하세요");
      document.querySelector("input[name='title']").focus();
      return;
    }
    if (!testImageAdd.name.trim()) {
      alert("이름을 입력하세요");
      document.querySelector("input[name='name']").focus();
      return;
    }
    if (!testImageAdd.content.trim()) {
      alert("내용을 입력하세요");
      document.querySelector("input[name='content']").focus();
      return;
    }

    const formData = new FormData();
    formData.append("title", testImageAdd.title);
    formData.append("name", testImageAdd.name);
    formData.append("content", testImageAdd.content);

    images.forEach((file) => {
      formData.append("files", file);
    });

    const result = await postAdd(formData);
    console.log(result);

    if (result.result == "success") {
      alert("글작성이 완료됐습니다.");
      setTestImageAdd({ ...init });
      setImages([]);
      setFileName("이미지 파일업로드");
      setImagePreview([]);

      navigate("/test/list");
    }
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

    setFileName(
      newImages.length > 0
        ? `${newImages.length}개의 이미지 선택 됨`
        : "이미지 파일업로드"
    );

    e.target.value = "";

    // const reader = new FileReader();
    // reader.readAsDataURL(files[0]);

    // reader.onload = () => {
    //   console.log(reader.result);
    // };
  };

  const handleRemoveImage = (idx) => {
    const newFiles = images.filter((_, i) => i !== idx);
    const newPreviews = imagePreview.filter((_, i) => {
      return i !== idx;
    });

    setImages(newFiles);
    setImagePreview(newPreviews);

    setFileName(
      newFiles.length > 0
        ? `${newFiles.length}개의 이미지 선택 됨`
        : "이미지 파일업로드"
    );
  };

  return (
    <div>
      <h3 className="text-2xl font-bold py-4 border-b-2 border-gray-300 mb-3">
        글작성
      </h3>

      <div className="">
        <form onSubmit={handleSubmit} action="test.java">
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
              value={testImageAdd.title}
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
              value={testImageAdd.name}
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
              value={testImageAdd.content}
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
                <div className="w-[100px] h-[100px] relative">
                  <img
                    src={item}
                    alt=""
                    className="w-[100px] h-[100px] object-cover rounded"
                  />
                  <button
                    type="button"
                    className="absolute top-1 right-2"
                    onClick={() => {
                      handleRemoveImage(i);
                    }}
                  >
                    X
                  </button>
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
