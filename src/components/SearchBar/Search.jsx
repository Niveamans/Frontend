import { React, useState } from "react";
//import TextField from "@mui/material/TextField";
//mport List from "./List";
import ReactSearchBox from "react-search-box";
import { data } from "./ListData";

function Search() {
  const [enter, setEnter] = useState();
  function handleChange(e) {
    setEnter(e.target.value)
    console.log(enter)
  }
  console.log(data)
  return (
    <div className="flex-col h-100vh w-100 align-right">

      <ReactSearchBox
        placeholder="search"
        data={data}
        onChange={handleChange}
        value={enter}
        callback={(record) => console.log(record)}
      >

      </ReactSearchBox>

    </div>


  );
}

export default Search;