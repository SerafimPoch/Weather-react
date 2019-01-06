import React, { useEffect } from "react";
import { CardContainer } from "./style";

export default ({ store }) => {
  return (
    <CardContainer>
      <img
        src={`http://openweathermap.org/img/w/${store.days[1].icon}.png`}
        alt="mainCards"
      />
      <p>{store.city}</p>
      <p>{store.days[1].data}</p>
      <p>{store.days[1].temp}</p>
    </CardContainer>
  );
};
