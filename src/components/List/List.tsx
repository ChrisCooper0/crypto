import React from "react";
import styles from "./List.module.css";
import Sparkline from "react-sparkline-svg";

const List = ({ data }: any) => {
  return (
    <>
      <div className={styles.list_header}>
        <p>Logo</p>
        <p>Coin</p>
        <p>Symbol</p>
        <p>Current Price</p>
        <p>24 Hour Low</p>
        <p>24 Hour High</p>
        <p>7 Day Sparkline</p>
      </div>
      {data.map((el: any) => (
        <div key={el.id} className={styles.list_wrapper}>
          <img src={el.image} width={"20px"} alt={el.name} />
          <p>{el.name}</p>
          <p>{el.symbol}</p>
          <p>
            £
            {el.current_price
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
          <p className={styles.low}>
            £
            {el.low_24h
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
          <p className={styles.high}>
            £
            {el.high_24h
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>

          <Sparkline
            values={el.sparkline_in_7d.price}
            height={"50px"}
            width={"200px"}
            strokeWidth={"2%"}
            stroke={"#0dccf2"}
          />
        </div>
      ))}
    </>
  );
};

export default List;
