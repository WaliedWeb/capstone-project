import React from 'react';
import styled from 'styled-components';

export default function LandingPage(): JSX.Element {
  return (
    <Container>
      <h1>MY TRAVEL DIARY</h1>
    </Container>
  );
}

const Container = styled.div`
  background-image: url(./LandingPageImage.jpeg);
`;
