import React, { useEffect, useState } from "react";
import { getList } from "../api/testImageApi";
import dayjs from "dayjs";

function ListComp() {
  const [testData, setTestData] = useState([]);
  const size = 5;
  const [page, setPage] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

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
      setTotalElements(data.totalElements);
    });
  }, []);

  return (
    <div>
      <h3>글리스트</h3>
      <hr />
      <ul>
        {testData.map((item, i) => {
          return (
            <li>
              <span>{totalElements - (page * size + i)}</span>
              <span>{item.title}</span>
              <span>{item.name}</span>
              <span>{dayjs(item.startdate).format("YYYY-MM-DD")}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
  <Link to="/">홈</Link>;
}

export default ListComp;
