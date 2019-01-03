import React from "react";
import Content from "../../components/search";
import { reduxForm } from "redux-form";
import { FormContainer } from "./style";

let Search = ({ handleSubmit }) => {
  const test = ({ city }) => {
    console.log(city);
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

export default Search;
