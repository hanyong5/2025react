import React, { useEffect, useState } from "react";
import { getList } from "../api/testImageApi";

function ListComp() {
  const [testData, setTestData] = useState([]);
  const size = 5;
  const [page, setPage] = useState(0);

  useEffect(() => {
    // async function listData() {
    //   const listDataView = await axios.get(
    //     `http://localhost:8080/test?page=${page}&size=${size}`
    //   );
    //   console.log(listDataView.data);
    //   setTestData(listDataView.data.content);
    // }

    // listData();

    getList({ page, size }).then((data) => {
      console.log(data);
      setTestData(data.content);
    });
  }, []);

  return (
    <div>
      <h3>글리스트</h3>
      <hr />
      <ul>
        {testData.map((item, i) => {
          return <li>{item.title}</li>;
        })}
      </ul>
    </div>
  );
  <Link to="/">홈</Link>;
}

export default ListComp;
