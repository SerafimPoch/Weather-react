import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "./style";
import { mapDispatchToProps } from "./appContainer";

class App extends Component {
  componentDidMount() {
    this.props.getWeatherData();
  }

  render() {
    return (
      <Container>
        <p>App</p>
      </Container>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
