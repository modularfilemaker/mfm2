import React, { Component } from "react";
import { Container } from "reactstrap";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import MfmModuleList from "../components/MfmModuleList";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: "" };
  }

  handleFilterChange = e => {
    console.log(e.target.value);

    this.setState({
      filter: e.target.value
    });
  };

  render() {
    return (
      <Container fluid className="px-0">
        <Navbar />
        <SearchBar
          filter={this.state.filter}
          onChange={this.handleFilterChange}
        />
        <MfmModuleList filter={this.state.filter} />
      </Container>
    );
  }
}

export default index;
