import React, { useEffect, useState } from "react";
import { getHistory } from "../../api/comApi";

function History() {
  const [history, setHistory] = useState(null);
  useEffect(() => {
    getHistory().then((res) => {
      console.log("자료출력", res);
      setHistory(res);
    });
  }, []);
  return (
    <div>
      history자료 출력하기
      {history && (
        <div>
          <h1>{history}</h1>
        </div>
      )}
    </div>
  );
}

export default History;
