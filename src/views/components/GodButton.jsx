import React from "react";
import Swal from "sweetalert2";

const GodButton = ({ btnTxt, msg }) => {
  return (
    <>
      <button onClick={() => Swal.fire(msg)}>{btnTxt}</button>
    </>
  );
};

export default GodButton;
