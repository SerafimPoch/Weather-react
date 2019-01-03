import React from "react";
import Content from "../../components/search";
import { reduxForm } from "redux-form";
import { FormContainer } from "./style";
import { connect } from "react-redux";
import { mapDispatchToProps } from "./searchContainer";

let Search = ({ handleSubmit, getWeatherData }) => {
  const test = ({ city }) => {
    return getWeatherData(city);
  };
  return (
    <FormContainer onSubmit={handleSubmit(test)}>
      <Content />
    </FormContainer>
  );
};

Search = reduxForm({
  form: "search"
})(Search);

export default connect(
  null,
  mapDispatchToProps
)(Search);
