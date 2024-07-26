import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const HomeContainer = styled.div`
  text-align: center;
  padding: 5px;
  
`;

const WelcomeMessage = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Intro = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2em;
  &:hover {
    background-color: #0056b3;
  }
`;
const Home = () => {
  return (
    <HomeContainer>
      <WelcomeMessage>Welcome to the Song Manager App!</WelcomeMessage>
      <Intro>
        This app allows you to manage your song collection. You can add, edit, and delete songs, as well as filter them by language, genre, and artist.
      </Intro>
      <ButtonContainer>
        <StyledLink to="/signup">Sign Up</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </ButtonContainer>
    </HomeContainer>
  );
};



export default Home;
