import React from "react";
import { connect } from "react-redux";
import Cards from "../../components/cards";
import { mapStateToProps } from "./weatherCardsContainer";

const WeatherCards = ({ store }) => {
  return <Cards store={store} />;
};

export default connect(
  mapStateToProps,
  null
)(WeatherCards);
