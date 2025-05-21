import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { getOne, putOne } from "../../api/testApi";

const initState = {
  title: "",
  name: "",
  content: "",
};

function TestModiComp() {
  const [form, setForm] = useState({ ...initState });
  const [fileName, setFileName] = useState("이미지 파일업로드");
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [originalImageNames, setOriginalImageNames] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { tno } = useParams();

  // 기존 데이터 불러오기
  useEffect(() => {
    // getOne(tno).then((data) => {
    //   console.log(data);
    //   setForm({
    //     title: data.title,
    //     name: data.name,
    //     content: data.content,
    //   });
    // });

    async function fetchData() {
      try {
        const data = await getOne(tno);
        console.log(data);
        setForm({
          title: data.view.title,
          name: data.view.name,
          content: data.view.content,
        });
        // 기존 이미지가 있다면 imagePreviews에 추가
        if (data.view.image) {
          setImagePreviews(data.view.image); // 썸네일 미리보기용
          setOriginalImageNames(data.view.image); // 파일명만 저장
        }
      } catch (e) {
        toast.error("데이터를 불러오지 못했습니다.");
      }
    }
    fetchData();
  }, [tno]);

  // input 변경 핸들러
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  // 파일 업로드 핸들러 (글쓰기와 동일)
  function handleFileChange(e) {
    const files = Array.from(e.target.files);
    const newImages = [...images, ...files];
    if (newImages.length > 5) {
      alert("이미지는 최대 5개까지 첨부할 수 있습니다.");
      return;
    }
    setImages(newImages);
    const newPreviews = [
      ...imagePreviews,
      ...files.map((file) => URL.createObjectURL(file)),
    ];
    setImagePreviews(newPreviews);
    setFileName(
      newImages.length > 0
        ? `${newImages.length}개의 이미지 선택됨`
        : "이미지 파일업로드"
    );
    e.target.value = "";
  }

  // 이미지 삭제 핸들러
  function handleRemoveImage(idx) {
    const newPreviews = imagePreviews.filter((_, i) => i !== idx);

    if (
      !imagePreviews[idx].startsWith("data:") &&
      !imagePreviews[idx].startsWith("blob:")
    ) {
      setOriginalImageNames(originalImageNames.filter((_, i) => i !== idx));
    } else {
      setImages(images.filter((_, i) => i !== idx - originalImageNames.length));
    }

    setImagePreviews(newPreviews);
    setFileName(
      newPreviews.length > 0
        ? `${newPreviews.length}개의 이미지 선택됨`
        : "이미지 파일업로드"
    );
  }

  // 수정 제출 핸들러
  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;
    if (!form.title.trim()) {
      toast.error("제목을 입력하세요");
      return;
    }
    if (!form.name.trim()) {
      toast.error("이름을 입력하세요");
      return;
    }
    if (!form.content.trim()) {
      toast.error("내용을 입력하세요");
      return;
    }
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("name", form.name);
    formData.append("content", form.content);
    originalImageNames.forEach((fileName) => {
      formData.append("updatedFileNames", fileName);
    });
    images.forEach((file) => {
      formData.append("files", file);
    });
    try {
      const result = await putOne(tno, formData);
      if (result.result === "success") {
        toast.success("수정이 완료되었습니다!");
        setTimeout(() => {
          navigate("/test/list");
        }, 2000);
      }
    } catch (error) {
      toast.error("수정에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <ToastContainer />
      <h3 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2 w-full">
        글수정하기
      </h3>

      <div className="w-full px-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-3">
              <span className="text-red-500">*</span> 제목 {form.title}
            </label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              className="border rounded w-full p-2"
              id="title"
              value={form.title}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-3">
              <span className="text-red-500">*</span> 작성자 {form.name}
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="border rounded w-full p-2"
              id="name"
              value={form.name}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block mb-3">
              <span className="text-red-500">*</span> 내용 {form.content}
            </label>
            <textarea
              name="content"
              onChange={handleChange}
              className="border rounded w-full p-2 h-[200px]"
              id="content"
              rows="5"
              value={form.content}
            />
          </div>
          <div className="flex items-center justify-center gap-2 w-full h-[150px] border border-gray-300 rounded-md relative bg-gray-200 hover:bg-gray-400 transition-all duration-300 mb-4">
            {fileName}
            <input
              type="file"
              id="file"
              name="files"
              className="opacity-0 w-full h-full bg-gray-300 absolute cursor-pointer"
              onChange={handleFileChange}
              multiple
              accept="image/*"
            />
          </div>
          <div className="flex gap-2 mb-4 flex-wrap">
            {imagePreviews.map((src, idx) => (
              <div key={idx} className="relative w-[100px] h-[100px]">
                <img
                  src={
                    src.startsWith("data:") || src.startsWith("blob:")
                      ? src
                      : `${
                          import.meta.env.VITE_API_SERVER_HOST
                        }/api/test/images/${
                          src.startsWith("thumb_") ? src : `thumb_${src}`
                        }`
                  }
                  alt={`preview-${idx}`}
                  className="w-[100px] h-[100px] object-cover rounded"
                />

                <button
                  type="button"
                  onClick={() => handleRemoveImage(idx)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                  title="삭제"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "업로드 중..." : "글수정"}
            </button>
            <div className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
              <Link to="/test/list">목록</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default TestModiComp;
