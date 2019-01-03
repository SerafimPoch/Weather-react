import React, { Fragment } from "react";
import { Button } from "./style";
import { Field } from "redux-form";

export default () => {
  return (
    <Fragment>
      <Field component="input" name="city" minLength="3" />
      <Button>search</Button>
    </Fragment>
  );
};
