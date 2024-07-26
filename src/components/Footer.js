import React from 'react';

import styled from '@emotion/styled';
const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Your App Name. All rights reserved.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #282626;
  color: white;
  padding: 10px 0;
  text-align: center;
`;

export default Footer;
