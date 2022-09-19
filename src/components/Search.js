import React from "react";

export default function Search({search, setSearch}) {

  function handleChange(e) {
    let text = e.target.value;
    setSearch(text);
  }

  return (
    <div className="search">
      <input
        id="search"
        className="search-book"
        type="text"
        placeholder="Search.."
        value={search}
        onChange={handleChange}
      />     
    </div>
  )
};