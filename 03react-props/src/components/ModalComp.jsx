import React from "react";

function ModalComp(props) {
  console.log(props);
  //   let vData = props.vData;
  //   let num = props.num;
  let { vData, num } = props;

  return <div className="content">{vData[num]} /</div>;
}

export default ModalComp;
