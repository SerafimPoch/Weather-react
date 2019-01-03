import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "./style";
import { mapDispatchToProps } from "./appContainer";
import WeatherCards from "../WeatherCards";
import Search from "../Search";

class App extends Component {
  componentDidMount() {
    this.props.getWeatherData();
  }

  render() {
    return (
      <Container>
        <Search />
        <WeatherCards />
      </Container>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
