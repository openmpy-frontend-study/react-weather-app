import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  height: fit-content;
  width: 90%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 980px) {
    max-width: 800px;
    width: 90%;
  }
`;
