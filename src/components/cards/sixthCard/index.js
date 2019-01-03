import React from "react";
import { CardContainer } from "../mainCard/style";

export default ({ store }) => {
  return (
    <CardContainer style={{ width: "18%" }}>
      <img
        src={`http://openweathermap.org/img/w/${store.icon}.png`}
        alt="mainCards"
      />
      <p>{store.data}</p>
      <p>{store.temp}</p>
    </CardContainer>
  );
};
