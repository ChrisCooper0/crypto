import React from "react";
import styles from "./Header.module.css";

interface Props {}

const Header = (props: Props) => {
  return (
    <>
      <nav className={styles.nav}></nav>
      <header className={styles.header}>Compound</header>
    </>
  );
};

export default Header;
