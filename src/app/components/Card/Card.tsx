import React from 'react';
import styled from 'styled-components';
import RoundButton from '../RoundButton/RoundButton';

type CardProps = {
  diary: {
    destination: string;
    date: string;
    memories: string;
    image: string;
  };
  deleteCard: (name: string) => void;
};

export default function Card({ diary, deleteCard }: CardProps): JSX.Element {
  const { destination, date, memories, image } = diary;
  return (
    <CardContainer>
      <Destination>{destination}</Destination>
      <RoundButton children="X" handleClick={() => deleteCard(destination)} />
      <Date>{date}</Date>
      <Memories>{memories}</Memories>
      <Image src={image}></Image>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  position: relative;
  border-radius: 0.5rem;
  border: 3px solid var(--card-bg-dark);
  width: 90%;
  margin: 20px;
  padding: 15px;
  background-color: var(--card-bg-dark);
`;

const Destination = styled.h1`
  color: var(--color-text-white);
  margin: 0;
`;

const Memories = styled.p`
  color: var(--color-text-lightgreen);
`;

const Date = styled.p``;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;
