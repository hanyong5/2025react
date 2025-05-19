import React, { useEffect, useState } from "react";
import { getList } from "../../api/testApi";
import { Link, Navigate, useNavigate } from "react-router-dom";

const initState = {
  content: [],
  number: 0,
  size: 0,
};

function TestListComp() {
  const [serverData, setServerData] = useState({ ...initState });

  const navigate = useNavigate();

  useEffect(() => {
    getList().then((res) => {
      console.log(res);
      setServerData({ ...res.data });
    });
  }, []);

  return (
    <>
      <h3 className="text-2xl font-bold py-4 border-b-2 border-gray-300 mb-3">
        글리스트
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {serverData.content &&
          serverData.content.map((item, i) => {
            return (
              <>
                <div
                  className="bg-gray-200 rounded shadow-xl border-4 border-blue-300"
                  onClick={() => {
                    // navigate("/test/view/${}")
                    // navigate(`/test/view/${item.id}/comment/${item.title}`);
                    navigate(`/test/view/${item.id}`);
                  }}
                >
                  <div className="w-full h-[200px] md:h-[100px] bg-blue-400 flex justify-center items-center">
                    test
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold ">{item.title}</h4>
                    <p className="text-gray-700 text-sm ">{item.name}</p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <div className="flex justify-end gap-3 mt-3 mb-3">
        <button className="bg-blue-500 px-4 py-2 rounded text-white font-bold text-xl hover:bg-blue-600">
          <Link to="/test/write">글쓰기</Link>
        </button>
      </div>
    </>
  );
}

export default TestListComp;
