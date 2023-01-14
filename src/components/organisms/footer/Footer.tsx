import { Container } from '@mui/material';
import React from 'react';
import {
  StyledPaperFooter,
  StyledMainBoxFooter,
  StyledTextFooter,
  StyledLink,
} from './styled';

const Footer = () => {
  return (
    <StyledPaperFooter square variant="outlined">
      <Container maxWidth="lg">
        <StyledMainBoxFooter>
          <StyledTextFooter>
            see my projects in git :{' '}
            <StyledLink
              href={'https://github.com/mohammadSiyadati'}
              target="_blank"
            >
              Projects
            </StyledLink>
          </StyledTextFooter>
          <StyledTextFooter>Design by Mohammad Siadati</StyledTextFooter>
        </StyledMainBoxFooter>
      </Container>
    </StyledPaperFooter>
  );
};

export default Footer;
