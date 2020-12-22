import React, { Component } from "react";
import API from "../../utils/API";
import DataBody from "../DataBody/DataBody";
import SearchBar from "../SearchBar/SearchBar";
import TableHeader from "../TableHeader/TableHeader"

class DataTable extends Component {
  state = {
    search: "",
    employees: [],
  };

  initialEmployees;

  componentDidMount() {
    API.getEmployees()
      .then((res) => {
        console.log(res);
        this.initialEmployees = res.data.results;
        this.setState({
          employees: res.data.results,
        });
      })

      .catch((err) => console.log(err));
  }

  //console.log(res)

  handleInputChange = (event) => {
    let value = event.target.value;
    //this.setState({ search: value });
    this.filterEmployees(value.toLowerCase().trim());
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  filterEmployees = (input) => {
    this.setState({
      employees: this.initialEmployees.filter((employee) => {
        if (
          employee.name.first.toLowerCase().includes(input) ||
          employee.name.last.toLowerCase().includes(input)
        ) {
          return employee;
        }
      }),
    });
  };

  sortNames = () => {
    let sortedEmployees = this.state.employees;
    console.log(sortedEmployees);
    sortedEmployees.sort(function (a, b) {
      let nameA = a.name.first.toUpperCase();
      let nameB = b.name.first.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({ employees: sortedEmployees });
    console.log(this.state);
  };

  render() {
    return (
      <div className="data-area">
        <SearchBar
          value={this.state.value}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <table id="employees">
          <TableHeader 
          name={this.sortNames}
          />

          <tbody>
            <DataBody employees={this.state.employees} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataTable;
