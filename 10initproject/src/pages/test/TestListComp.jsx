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
      <h3 className="text-2xl font-bold py-4 border-b-2 border-gray-300">
        글리스트
      </h3>
      <div className="">
        {serverData.content &&
          serverData.content.map((item, i) => {
            return (
              <>
                <div
                  onClick={() => {
                    // navigate("/test/view/${}")
                    // navigate(`/test/view/${item.id}/comment/${item.title}`);
                    navigate(`/test/view/${item.id}`);
                  }}
                >
                  {item.title}
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
