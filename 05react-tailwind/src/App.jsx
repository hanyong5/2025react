import React from "react";

function App() {
  return (
    <>
      <div className="p-4 border w-[500px] m-auto mt-12">
        <h1 className="text-2xl font-bold mb-4 text-center">TODO app</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="할일을 입력하세요"
            className="flex-1 border p-2 rounded border-gray-300 focus:outline-none"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            추가
          </button>
        </div>
        <ul className="py-2">
          <li className="flex justify-between items-center py-4 border-b">
            <span>test</span>
            <button className="text-red-500 text-sm hover:underline">
              삭제
            </button>
          </li>
          <li className="flex justify-between items-center py-4 border-b">
            <span className="line-through text-gray-400">test</span>
            <button className="text-red-500 text-sm hover:underline">
              삭제
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
