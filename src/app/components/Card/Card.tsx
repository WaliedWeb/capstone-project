import React from 'react';
import styled from 'styled-components'

type CardProps = {
    destination: string
    memories: string
}
  
export default function Card({
    destination,
    memories,
  }: CardProps): JSX.Element {
    return (
      <CardContainer>
        <h2>{destination}</h2>
        <p>{memories}</p>
      </CardContainer>
    )
}
  
const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 5px;
  border: 5px solid rgb(42, 85, 85);
  margin: 20px;
  padding: 10px;
  background-color: var(--color-light-orange);
  color: var(--color-font-dark);
`;