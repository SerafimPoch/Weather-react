import styled from "styled-components";

export const CardContainer = styled.div`
  height: 200px;
  opacity: 0.7;
  display: flex;
  border-radius: 10px;
  align-items: center;
  flex-flow: column wrap;
  background-color: white;
  justify-content: space-around;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  img {
    width: 80px;
  }

  p {
    opacity: 1;
    font-size: 25px;
  }
`;
