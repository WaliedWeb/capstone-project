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
  align-items: center;
  gap: 5px;
  border-radius: 8px;
  padding: 20px;
  background-color: var(--color-light-orange);
  color: var(--color-font-dark);
`;