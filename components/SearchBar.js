import React, { Component } from "react";
import { Navbar, Input, InputGroup, Button, Form, Row, Col } from "reactstrap";
import HSpace from "./HSpace";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <Navbar color="white" light>
          <Col sm="12" md={{ size: 4, offset: 4 }}>
            <Form inline>
              <InputGroup style={{ width: "100%" }}>
                <Input
                  type="search"
                  placeholder="Search Components"
                  aria-label="Search"
                  value={this.props.filter}
                  onChange={this.props.onChange}
                />

                <HSpace px="10" />
                <Button color="success" outline>
                  Search
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Navbar>
      </div>
    );
  }
}

export default SearchBar;
