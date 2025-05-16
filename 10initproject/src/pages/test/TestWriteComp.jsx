import React from "react";
import { Link } from "react-router-dom";

function TestWriteComp() {
  return (
    <div>
      TestWriteComp
      <div className="flex justify-end gap-3 mt-3 mb-3">
        <button className="bg-green-500 px-4 py-2 rounded text-white font-bold text-xl hover:bg-green-600">
          작성완료
        </button>
        <button className="bg-blue-500 px-4 py-2 rounded text-white font-bold text-xl hover:bg-blue-600">
          <Link to="/test/list">글리스트</Link>
        </button>
      </div>
    </div>
  );
}

export default TestWriteComp;
