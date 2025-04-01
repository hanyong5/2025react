import React from "react";
import "../App.css";

function ModalView() {
  return (
    <div className="modal">
      <div className="modalContent">
        <div className="titleWrap">
          <h3>title</h3>
          <div>X</div>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          illum.
        </p>
        <button className="closeBtn">닫기</button>
      </div>
    </div>
  );
}

export default ModalView;
