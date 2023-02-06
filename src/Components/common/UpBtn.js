import React from "react";
import "./styles/UpBtn.scss";
import Btn from "../../images/btntwo.png";
function UpBtn() {
  const scrollToTop = (e) => {
    if (!window.scrollY) return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button className="up-btn" onClick={scrollToTop}>
        <img src={Btn} alt="up-btn"/>
      </button>
    </>
  );
}

export default UpBtn;
