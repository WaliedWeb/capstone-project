import React from 'react';
import styled from 'styled-components';
import image from '../Image/LandingPageImage.png';

export default function LandingPage(): JSX.Element {
  return (
    <Container>
      <Topic>MY TRAVEL DIARY</Topic>
    </Container>
  );
}

const Container = styled.div`
  background-image: url(${image});
  background-size: cover;
  height: 94vh;
  margin: 0;
  padding: 0;
`;

const Topic = styled.h1`
  padding: 10px 0;
  text-align: center;
`;
