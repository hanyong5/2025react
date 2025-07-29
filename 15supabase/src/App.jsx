import { useState, useEffect } from "react";
import supabase from "./utils/supabases";

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      return alert("파일업로드해주세요");
    }

    // const filePath = file.name;
    const filePath = `${Date.now()}_${file.name}`;

    const { data, error } = supabase.storage
      .from("myfile")
      .upload(filePath, file);

    if (error) {
      alert("업로드실패");
    } else {
      alert("업로드성공");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>업로드</button>
    </div>
  );
}
export default App;
