import React, { Component } from "react";
import { getModules } from "../../api";
import Module from "./Module";
import VSpace from "../VSpace";
import { CardColumns, Container } from "reactstrap";

class MfmModuleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: []
    };
  }

  async componentDidMount() {
    try {
      const data = await getModules();
      this.setState({ modules: data });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let { filter } = this.props;
    filter = filter.toLowerCase();
    let data = this.state.modules.filter(module => {
      let { Name, Description, Type, Author } = module;
      Name = Name.toLowerCase() || "";
      Description = Description.toLowerCase() || "";
      Type = Type.toLowerCase() || "";
      Author = Author.toLowerCase() || "";
      if (!filter) return true;
      if (Name.includes(filter)) return true;
      if (Description.includes(filter)) return true;
      if (Type.includes(filter)) return true;
      if (Author.includes(filter)) return true;
      return false;
    });

    return (
      <Container>
        <VSpace px={20} />
        <CardColumns>
          {data.map(module => {
            return <Module key={module.Id} {...module} />;
          })}
        </CardColumns>
      </Container>
    );
  }
}

export default MfmModuleList;
