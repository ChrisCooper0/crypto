import React from "react";
import styles from "./List.module.css";
import Sparkline from "react-sparkline-svg";

const List = ({ data }: any) => {
  return (
    <>
      {data.map((el: any) => (
        <div key={el.id} className={styles.list_wrapper}>
          <p>{el.name}</p>
          <img src={el.image} width={"25px"} alt={el.name} />
          <p>{el.symbol}</p>
          <p>
            £
            {el.current_price
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
