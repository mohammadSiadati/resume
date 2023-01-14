import { Paper, Container, Box, Typography, styled } from '@mui/material';
import Link from 'next/link';

export const StyledPaperFooter = styled(Paper)`
  background: black;
  margin-top: calc(10% + 60px);
  width: 100%;
  position: fixed;
  bottom: 0;
`;

export const StyledMainBoxFooter = styled(Box)`
  padding: 5px;
  color: white;
  flex-grow: 1;
  justify-content: space-between;
  display: flex;
`;

export const StyledTextFooter = styled(Typography)`
  font-family: 'my-font';
  font-size: 14px;
  color: white;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: blue;
`;
