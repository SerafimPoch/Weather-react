import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "./style";
import { mapDispatchToProps } from "./appContainer";
import WeatherCards from "../WeatherCards";

class App extends Component {
  componentDidMount() {
    console.log(this.props.getWeatherData());
  }

  render() {
    return (
      <Container>
        <WeatherCards />
      </Container>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
