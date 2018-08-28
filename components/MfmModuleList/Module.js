import React, { Component } from "react";

import {
  Card,
  CardHeader,
  CardDeck,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Badge,
  CardFooter
} from "reactstrap";
import VSpace from "../VSpace";

class Module extends Component {
  render() {
    const {
      Type,
      Name,
      Author,
      Description,
      LastUpdate,
      DownloadCounter,
      Short,
      HasXML,
      CurrentVersionId
    } = this.props;
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            {Type}
            <div className="float-right">
              Downloads{" "}
              <Badge pill color={"success"} style={{ padding: "2px" }}>
                {DownloadCounter}
              </Badge>
            </div>
          </CardHeader>
          {/*<CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />*/}
          <CardBody>
            <CardTitle>{Name}</CardTitle>

            <CardSubtitle>{Short}</CardSubtitle>
            <VSpace px={10} />
            <CardText>{Description}</CardText>

            <CardText>Author: {Author}</CardText>

            {HasXML ? (
              <Button
                href={
                  "fmp://$/mfm.fmp12?script=MFM LoadXML&$ID=" + CurrentVersionId
                }
                color="primary"
              >
                <i className="fa fa-copy" /> XML
              </Button>
            ) : (
              ""
            )}
          </CardBody>
          <CardFooter>Last Updated: {LastUpdate}</CardFooter>
        </Card>
      </div>
    );
  }
}

export default Module;
