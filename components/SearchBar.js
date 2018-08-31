import React from "react";
import PropTypes from "prop-types";
import { Navbar, Input, InputGroup, Button, Form, Col } from "reactstrap";
import HSpace from "./HSpace";

const SearchBar = ({ filter, onChange }) => (
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

SearchBar.propTypes = {
  onChange: PropTypes.function,
  filter: PropTypes.string
};

export default SearchBar;
