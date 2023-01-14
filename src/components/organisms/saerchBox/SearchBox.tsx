import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./style";

const SearchBox = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchBox;
