import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Card from "../Card/Card";

const Container = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 10px 26px;
`;

const AllCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 4fr);

`;

const Home = () => {
  return (
    <Container>
      <AllCards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </AllCards>
    </Container>
  );
};

export default Home;
