import React from "react";

function SearchBar(props) {

  
    return (
      <div className="searchBar">
        <form className="form-inline">
            <input
            value={props.value}
            onChange={props.handleInputChange}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search by Name"
            aria-label="Search"
           />
           {/* <button className="btn my-2 my-sm-0" type="submit">
            Search
           </button> */}
        </form>
      </div>
    );
  }


export default SearchBar;
