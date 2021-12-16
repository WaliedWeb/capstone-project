import React from 'react';
import styled from 'styled-components';
import image from '../Image/LandingPageImage.png';
import { HiHome, HiPencilAlt, HiOutlineBookOpen } from 'react-icons/hi';

export default function LandingPage(): JSX.Element {
  return (
    <Container>
      <Topic>MY TRAVEL DIARY</Topic>
      <StyledDiv>
        <HiHome size={30} style={{ fill: 'var(--font-main)' }} />
        <Text>
          Welcome to your personal travel diary. Here you have the opportunity
          to record and immortalize your special travel experiences.
        </Text>
      </StyledDiv>
      <StyledDiv>
        <HiPencilAlt size={30} style={{ fill: 'var(--font-main)' }} />
        <Text>
          Here you can enter your destination, the date of your trip, your
          beautiful memories and a picture of your choice.
        </Text>
      </StyledDiv>
      <StyledDiv>
        <HiOutlineBookOpen size={30} style={{ fill: 'var(--font-main)' }} />
        <Text>
          Here you can enter your destination, the date of your trip, your
          beautiful memories and a photo of your choice.
        </Text>
      </StyledDiv>
    </Container>
  );
}

const Container = styled.div`
  background-image: url(${image});
  background-size: cover;
  height: 94vh;
  margin: 0;
  padding: 0;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-color: rgba(0, 0, 0, 0.45);
  }
`;

const Topic = styled.h1`
  padding: 10px 0;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: 1fr;
  padding: 0 20px;
  margin-bottom: 20px;
  position: relative;
`;

const Text = styled.p`
  margin: 0;
  border-bottom: 3px solid var(--font-main);
  position: relative;
`;
