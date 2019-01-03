import React from "react";
import MainCard from "./mainCard";
import ThirdCard from "./thirdCard";
import FifthCard from "./fifthCard";
import SixthCard from "./sixthCard";
import SecondCard from "./secondCard";
import FourthCard from "./fourthCard";
import { Container, MainCardContainer, OthersCardsContainer } from "./style";

export default ({ store }) => {
  return (
    <Container>
      <MainCardContainer>
        <MainCard store={store} />
      </MainCardContainer>
      <OthersCardsContainer>
        <SecondCard store={store.days[2]} />
        <ThirdCard store={store.days[3]} />
        <FourthCard store={store.days[4]} />
        <FifthCard store={store.days[5]} />
        <SixthCard store={store.days[6]} />
      </OthersCardsContainer>
    </Container>
  );
};
