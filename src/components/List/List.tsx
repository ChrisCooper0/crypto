import React from "react";
import styles from "./List.module.css";
import Sparkline from "react-sparkline-svg";

const List = ({ data }: any) => {
  const headers = [
    "Logo",
    "Coin",
    "Symbol",
    "Current Price",
    "24 Hour Low",
    "24 Hour High",
    "7 Day Sparkline",
  ];

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          {headers.map((header: string) => (
            <th key={header} className={styles.header}>
              {header}
            </th>
          ))}
        </tr>
        {data.map((el: any) => (
          <tr key={el.id}>
            <td>
              <img src={el.image} width={"20px"} alt={el.name} />
            </td>
            <td>{el.name}</td>
            <td>{el.symbol}</td>
            <td className={styles.current}>
              £
              {el.current_price
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
            <td className={styles.low}>
              £
              {el.low_24h
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
            <td className={styles.high}>
              £
              {el.high_24h
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
            <td className={styles.sparkline}>
              <Sparkline
                values={el.sparkline_in_7d.price}
                height={"50px"}
                width={"160px"}
                strokeWidth={"1px"}
                stroke={"#0dccf2"}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
