import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import axios from "axios";

function App() {
  const [data, setData]: any = useState([]);

  useEffect(() => {
    axios
      .get(
        `
      https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=true`
      )
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Search data={data} />
    </>
  );
}

export default App;
