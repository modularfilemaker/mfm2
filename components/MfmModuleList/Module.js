import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Badge,
  CardFooter
} from "reactstrap";
import VSpace from "../VSpace";

const Module = ({
  type,
  name,
  author,
  description,
  lastUpdate,
  downloadCounter,
  short,
  hasXML,
  currentVersionId
}) => (
  <div className="animated fadeIn">
    <Card>
      <CardHeader>
        {type}
        <div className="float-right">
          Downloads{" "}
          <Badge pill color={"success"} style={{ padding: "2px" }}>
            {downloadCounter}
          </Badge>
        </div>
      </CardHeader>
      <CardBody>
        <CardTitle>{name}</CardTitle>

        <CardSubtitle>{short}</CardSubtitle>
        <VSpace px={10} />
        <CardText>{description}</CardText>

        <CardText>Author: {author}</CardText>

        {hasXML ? (
          <Button
            href={
              "fmp://$/mfm.fmp12?script=MFM LoadXML&$ID=" + currentVersionId
            }
            color="primary"
          >
            <i className="fa fa-copy" /> XML
          </Button>
        ) : (
          ""
        )}
      </CardBody>
      <CardFooter>Last Updated: {lastUpdate}</CardFooter>
    </Card>
  </div>
);

Module.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  lastUpdate: PropTypes.string,
  downloadCounter: PropTypes.string,
  short: PropTypes.string,
  hasXML: PropTypes.string,
  currentVersionId: PropTypes.string
};

export default Module;
