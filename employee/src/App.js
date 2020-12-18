import React from "react";
import DataTable from "./components/DataTable/DataTable";
import Header from "./components/Header/Header"
import SearchBar from "./components/SearchBar/SearchBar"
//import './App.css';

function App() {
  return (
    <div>
      <Header />
      <SearchBar/>
      <DataTable/>
    </div>
  );
}

export default App;
