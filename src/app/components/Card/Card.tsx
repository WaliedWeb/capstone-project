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
  border: 3px solid #5adeff;
  width: 90%;
  margin: 20px;
  padding-left: 10px;
  background-color: #00bdfe;
`;

const Destination = styled.h1`
  color: var(--color-text-white);
  padding: 0.5rem 0.75rem;
  margin: 0;
`;

const Memories = styled.p`
  color: var(--color-text-lightgreen);
  padding: 0.5rem 1rem;
  margin: 0;
`;

const Date = styled.p`
  padding: 0.5rem 0.75rem;
`;

const Image = styled.img``;
