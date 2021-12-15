import React from 'react';
import styled from 'styled-components';
import { HiHome, HiPencilAlt, HiOutlineBookOpen } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

export default function Navigation(): JSX.Element {
  return (
    <Container>
      <NavLink to="/">
        {' '}
        <HiHome size={30} />{' '}
      </NavLink>
      <NavLink to="addMemories">
        {' '}
        <HiPencilAlt size={30} />{' '}
      </NavLink>
      <NavLink to="memories">
        {' '}
        <HiOutlineBookOpen size={30} />{' '}
      </NavLink>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  // position: relative;
  align-items: flex-end;
  height: 6vh;
`;
