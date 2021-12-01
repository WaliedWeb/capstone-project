import React from 'react';
import styled from 'styled-components';
import RoundButton from '../RoundButton/RoundButton';

type CardProps = {
  diary: {
    destination: string;
    memories: string;
  };
  deleteCard: (name: string) => void;
};

export default function Card({ diary, deleteCard }: CardProps): JSX.Element {
  const { destination, memories } = diary;
  return (
    <CardContainer>
      <Destination>{destination}</Destination>
      <RoundButton children="X" handleClick={() => deleteCard(destination)} />
      <Memories>{memories}</Memories>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  position: relative;
  border-radius: 0.5rem;
  border: 5px solid rgb(50, 112, 112);
  width: 90%;
  margin: 20px;
  padding-left: 10px;
  background-color: #6e90db;
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
