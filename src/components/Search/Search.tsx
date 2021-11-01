import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./Search.module.css";
import List from "../List/List";

const Search = ({ data }: any) => {
  const [filteredCoin, setFilteredCoins] = useState();

  const coins = data.map((el: any) => el.name);

  const handleChange = (event: any, value: React.SetStateAction<any>) =>
    setFilteredCoins(value);

  const filteredData = data.filter((coin: { name: undefined[] }) =>
    coin.name.includes(filteredCoin)
  );

  return (
    <>
      <div className={styles.search}>
        <Autocomplete
          disablePortal
          onChange={handleChange}
          options={coins}
          sx={{ width: 200 }}
          size="small"
          className={styles.input}
          renderInput={(params) => <TextField {...params} label="Search" />}
        />
      </div>
      <List data={filteredData} />
    </>
  );
};

export default Search;
