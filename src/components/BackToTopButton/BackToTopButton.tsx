import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styles from "../BackToTopButton/BackToTopButton.module.css";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
    });
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <FaArrowCircleUp
        onClick={handleClick}
        className={showButton ? styles.button : styles.hidden}
      />
    </>
  );
};

export default BackToTopButton;
