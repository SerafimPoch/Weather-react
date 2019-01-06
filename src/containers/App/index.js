import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "./style";
import { mapDispatchToProps } from "./appContainer";
import WeatherCards from "../WeatherCards";
import Search from "../Search";

const App = ({ getWeatherData }) => {
  useEffect(() => {
    return getWeatherData();
  });

  return (
    <Container>
      <Search />
      <WeatherCards />
    </Container>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(App);
