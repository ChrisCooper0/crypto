import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./Search.module.css";

const Search = ({ data }: any) => {
  const coins = data.map((el: any) => el.name);

  console.log(coins, "search comp");
  return (
    <div className={styles.search}>
      <Autocomplete
        disablePortal
        options={coins}
        sx={{ width: 200 }}
        size="small"
        renderInput={(params) => (
          <TextField {...params} label="Select a coin" />
        )}
      />
    </div>
  );
};

export default Search;
