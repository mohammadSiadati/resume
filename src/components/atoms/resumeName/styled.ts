import { Box, Typography, styled } from '@mui/material';

export const StyledMainBox = styled(Box)`
  margin-left: 50px;
  font-family: 'my-font';
`;

export const StyledTextInfo = styled(Typography)`
  color: white;
  transition: all 3s;
  font-family: 'my-font';
  font-size: 24px;
  &:hover {
    scale: 1.2;
  }
`;
