import axios from "axios";
import React, { useEffect, useState } from "react";

function ListComp() {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    async function listData() {
      const listDataView = await axios.get("http://localhost:8080/test");
      console.log(listDataView.data);
    }

    listData();
  }, []);

  return (
    <div>
      <h3>글리스트</h3>
      <hr />
    </div>
  );
  <Link to="/">홈</Link>;
}

export default ListComp;
