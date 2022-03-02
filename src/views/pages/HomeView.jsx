import React from "react";
import logo from "../../assets/images/logo.png";
import GodButton from "../components/GodButton";

const HomeView = () => {
  return (
    <>
      <img
        src={logo}
        alt="Bhagwan ji"
        style={{
          width: 200,
          height: 200,
        }}
      />
      <br />
      <GodButton btnTxt="Say cheessssseeeeeee..." msg="Sab Changa..." />
    </>
  );
};

export default HomeView;
