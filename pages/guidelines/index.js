import React, { Component } from "react";
import { Container, Col, Card, CardBody } from "reactstrap";
import VSpace from "../../components/VSpace";
import Guide from "./guide.mdx";

import Navbar from "../../components/Navbar";

class Guidlines extends Component {
  render() {
    return (
      <Container fluid className="px-0">
        <Navbar />

        <VSpace px={20} />
        <Container>
          <Col sm="12">
            <Card>
              <CardBody>
                <Guide />
              </CardBody>
            </Card>
          </Col>
        </Container>
      </Container>
    );
  }
}

export default Guidlines;
