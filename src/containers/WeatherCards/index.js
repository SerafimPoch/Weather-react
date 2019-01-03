import React from "react";
import { connect } from "react-redux";
import Cards from "../../components/cards";
import { mapStateToProps, mapDispatchToProps } from "./weatherCardsContainer";

const WeatherCards = ({ store }) => {
  return <Cards store={store} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherCards);
