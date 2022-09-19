import React from "react";
import Search from "./Search";

export default function Header({search, setSearch}) {
  return (
    <header className="header-container">
      <Search 
        search={search}
        setSearch={setSearch}
      />
    </header>  
  ) 
}