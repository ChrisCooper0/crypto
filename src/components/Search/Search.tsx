import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./Search.module.css";
import List from "../List/List";

const Search = ({ data }: any) => {
  const [search, setSearch] = useState("");

  const coins = data.map((el: any) => el.name);

  const handleInputChange = (event: any, value: React.SetStateAction<any>) =>
    setSearch(value);

  const filteredData = data.filter((coin: any) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className={styles.search}>
        <Autocomplete
          disablePortal
          onInputChange={handleInputChange}
          options={coins}
          sx={{ width: 200 }}
          size="small"
          className={styles.input}
          renderInput={(params) => (
            <TextField {...params} variant="filled" label="Search" />
          )}
        />
      </div>

      <List data={filteredData} />
    </>
  );
};

export default Search;
