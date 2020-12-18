import React, { Component } from "react";
import API from "../../utils/API";
import DataBody from "../DataBody/DataBody"


class DataTable extends Component {
  state = {
    search: "",
    employees: [],
    filterEmployees: [],
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) => {
        console.log(res);
        this.setState({
          employees: res.data.results,
          filterEmployees: res.data.results,
        });
      })

      .catch((err) => console.log(err));
  }

  //console.log(res)

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ search: value });
    this.filterEmployees(value.toLowerCase().trim());
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

 

  render() {
    return (
      <div>
        <table id="employees">
          <tbody><DataBody/></tbody>
        </table>
      </div>
    );
  }
}

export default DataTable;
