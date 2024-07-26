import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const NavBar = styled.nav`
  background-color: #333;
  overflow: hidden;
`;

const NavLink = styled(Link)`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

const Header = () => {
  return (
    <NavBar>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
    </NavBar>
  );
};

export default Header;
