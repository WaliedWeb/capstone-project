import React from 'react';
import styled from 'styled-components';
import { HiHome, HiPencilAlt, HiOutlineBookOpen } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

export default function Navigation(): JSX.Element {
  return (
    <Container>
      <NavLink to="/">
        {' '}
        <HiHome size={30} style={{ fill: 'var(--font-main)' }} />
      </NavLink>
      <NavLink to="addMemories">
        {' '}
        <HiPencilAlt size={30} style={{ fill: 'var(--font-main)' }} />
      </NavLink>
      <NavLink to="memories">
        {' '}
        <HiOutlineBookOpen size={30} style={{ stroke: 'var(--font-main)' }} />
      </NavLink>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 6vh;
  background-color: var(--card-bg-middle);
`;
