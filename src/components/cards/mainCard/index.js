import React from "react";
import { CardContainer } from "./style";

export default ({ store }) => {
  return (
    <CardContainer>
      <img
        src={`http://openweathermap.org/img/w/${store.icon}.png`}
        alt="mainCards"
      />
      <p>{store.data}</p>
      <p>{store.temp}</p>
    </CardContainer>
  );
};
