import React from "react";

const Search = ({search, setSearch, handleSearch}) => {
  return (
    <div className="search-engine">
      <input
        type="text"
        className="city-search"
        placeholder="도시 이름을 입력해 주세요."
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>날씨 검색</button>
    </div>
  );
};

export default Search;
