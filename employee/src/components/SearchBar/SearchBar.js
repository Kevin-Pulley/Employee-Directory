import React from "react";

function SearchBar() {

  
    return (
      <div className="searchBar">
        <form className="form-inline">
            <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            //onChange={e => context.handleSearchChange(e)}
           />
           <button className="btn my-2 my-sm-0" type="submit">
            Search
           </button>
            
            

        </form>
      </div>
    );
  }


export default SearchBar;
