import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavComp from "./NavComp";

function CommentComp() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function viewComment() {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      setComments(res.data);
    }
    viewComment();
  });

  return (
    <div>
      <div className="container m-auto">
        <NavComp />
        <h3>
          댓글보기 : {id} / <Link to="/list">목록으로 이동</Link>
        </h3>
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li key={comment.id} className="border p-3 rounded shadow">
              <p>
                <strong>{comment.name}</strong> ({comment.email})
              </p>
              <p className="text-gray-600">{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CommentComp;
