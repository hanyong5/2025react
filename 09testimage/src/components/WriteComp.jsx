import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { postAdd } from "../api/testImageApi";
import { useNavigate } from "react-router-dom";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const initState = {
  title: "",
  name: "",
  content: "",
};

function WriteComp() {
  const [testImageAdd, setTestImageAdd] = useState({ ...initState });
  const [state, setState] = useState({
    center: {
      lat: 37.5031784,
      lng: 126.8820367,
    },
  });

  // const [title, setTitle] = useState("");
  // const [name, setName] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // if (title == "") {
    //   // alert("title을 입력하세요");
    //   toast.error("제목을 입력하세요");
    //   document.querySelector("input[name='title']").focus();
    // }

    // if (name == "") {
    //   // alert("title을 입력하세요");
    //   toast.error("이름을 입력하세요");
    //   document.querySelector("input[name='name']").focus();
    // }

    if (!testImageAdd.title.trim()) {
      toast.error("제목을 입력하세요");
      document.querySelector("input[name='title']").focus();
      return;
    }
    if (!testImageAdd.name.trim()) {
      toast.error("이름을 입력하세요");
      document.querySelector("input[name='name']").focus();
      return;
    }
    if (!testImageAdd.content.trim()) {
      toast.error("내용을 입력하세요");
      document.querySelector("input[name='content']").focus();
      return;
    }

    const formData = new FormData();
    formData.append("title", testImageAdd.title);
    formData.append("name", testImageAdd.name);
    formData.append("content", testImageAdd.content);

    if (testImageAdd.files) {
      formData.append("files", testImageAdd.files[0]);
    }

    try {
      const result = await postAdd(formData);
      console.log(result);
      setTestImageAdd({ ...initState });
      // 커스텀 이벤트 발생 전에 잠시 지연

      navigate("/");
    } catch (error) {}
  }

  // function handleTitle(e) {
  //   setTitle(e.target.value);
  // }
  // function handleName(e) {
  //   setName(e.target.value);
  // }

  function handleChange(e) {
    const { name, value } = e.target;
    console.log("데이터 : " + name + "/" + value);
    setTestImageAdd({
      ...testImageAdd,
      [name]: value,
    });
  }
  function handleFileChange(e) {
    setTestImageAdd({
      ...testImageAdd,
      files: e.target.files,
    });
  }

  return (
    <div className="px-4">
      <ToastContainer />

      <h3 className="text-bold border-b h-8 mb-4 text-lg text-end">
        글작성하기
      </h3>

      <div
        className="mb-4"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Map // 지도를 표시할 Container
          id="map"
          center={state.center}
          style={{
            // 지도의 크기
            width: "100%",
            height: "350px",
          }}
          level={3} // 지도의 확대 레벨
          className="mb-3"
          onDragEnd={(e) => {
            setState({
              center: {
                lat: e.getCenter().getLat(),
                lng: e.getCenter().getLng(),
              },
            });
          }}
        >
          <MapMarker // 마커를 생성합니다
            position={{
              // 마커가 표시될 위치입니다
              lat: state.center.lat,
              lng: state.center.lng,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              zIndex: 100,
              transform: "translate(-50%,-90%)",
              fontSize: "2em",
            }}
          >
            +
          </div>
        </Map>

        <div className="flex gap-3">
          <button
            onClick={() => {
              setState({
                center: {
                  lat: 37.555946,
                  lng: 126.972317,
                },
              });
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            서울역
          </button>
          <button
            onClick={() => {
              setState({
                center: {
                  lat: 37.5031784,
                  lng: 126.8820367,
                },
              });
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            구로역
          </button>
          <span>
            현재위치 : {state.center.lat} / {state.center.lng}
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-3">
            <span className="text-red-500">*</span> 제목 {testImageAdd.title}
          </label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            className="border rounded w-full p-2"
            id="title"
            value={testImageAdd.title}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-3">
            <span className="text-red-500">*</span> 작성자 {testImageAdd.name}
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="border rounded w-full p-2"
            id="name"
            value={testImageAdd.name}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-3">
            <span className="text-red-500">*</span> 여행
          </label>
          <div className="flex">
            <input
              type="text"
              name="tour"
              onChange={handleChange}
              className="border rounded w-full p-2"
              id="name"
              value={testImageAdd.tour}
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              추천여행지
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block mb-3">
            <span className="text-red-500">*</span> 내용 {testImageAdd.content}
          </label>
          <textarea
            name="content"
            onChange={handleChange}
            className="border rounded w-full p-2 h-[200px]"
            id="content"
            row="5"
            value={testImageAdd.content}
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
            onChange={handleFileChange}
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
