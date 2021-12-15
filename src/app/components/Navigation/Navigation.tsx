import React from 'react';
import styled from 'styled-components';
import { HiHome, HiPencilAlt, HiOutlineBookOpen } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

export default function Navigation(): JSX.Element {
  return (
    <Container>
      <NavLink to="">
        {' '}
        <HiHome />{' '}
      </NavLink>
      <NavLink to="">
        {' '}
        <HiPencilAlt />{' '}
      </NavLink>
      <NavLink to="">
        {' '}
        <HiOutlineBookOpen />{' '}
      </NavLink>
    </Container>
  );
}

const Container = styled.nav``;
