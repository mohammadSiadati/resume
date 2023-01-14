import { Box, Grid, Slider, Typography, styled } from '@mui/material';

export const StyledMainGrid = styled(Grid)`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const StyledGridText = styled(Grid)`
  color: white;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;
export const StyledText = styled(Typography)`
  font-family: 'my-font';
  font-size: 30px;
`;

export const StyledBoxForDesc = styled(Box)`
  width: 100%;
  height: 250px;
  border: 1;
  display: flex;
  align-items: center;
  border-color: purple;
  color: white;
  justify-content: space-between;
  border-radius: 16px;
`;

export const StyledTitles = styled(Typography)`
  font-family: 'my-font';
  color: white;
  transition: all 1s ease-in;
  font-size: 24px;
`;
