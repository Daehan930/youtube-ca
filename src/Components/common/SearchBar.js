import React from "react";
import { Link } from "react-router-dom";
// 검색 Input
const SearchBar = ({ updateChange, search, setSearch }) => {
  return (
    <div className="search">
      <input
        className="seacrh-bar"
        style={{
          width: "80%",
          height: "20px",
          maxWidth: "600px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          textAlign:"center",
        }}
        placeholder="재생목록 검색"
        onChange={(e) => updateChange(e)}
      ></input>
      <div className="search-box">
        {search.map((item) => {
          return (
            <>
              <div className="search-result">
                <Link to={"/playlist/" + item.id}>
                  <p onClick={() => setSearch([])}>{item.snippet.title}</p>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
