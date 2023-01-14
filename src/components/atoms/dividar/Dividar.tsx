import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Grid } from '@mui/material';
// import { ApiPlatformTitle } from 'strings';

export const StyledApiPlatformInfo = styled('div')`
  /* padding-bottom: 111px; */
  background-image: url('images/backPlatformIntro.svg'),
    linear-gradient(
      180deg,
      #312b71 0%,
      #9799bb 29.61%,
      #e3e1f8 70.18%,
      #f3fdff 100%
    );
  background-position: bottom;
  background-repeat: no-repeat;
`;

export const StyledDivider = styled(Grid)`
  position: relative;
  width: 100%;
  margin-top: 3rem;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(66, 255, 255, 0) 0%,
    #42ffff 6.25%,
    rgba(66, 255, 255, 0.72) 30.43%,
    rgba(66, 255, 255, 0) 34.19%,
    rgba(66, 255, 255, 0) 66.13%,
    rgba(66, 255, 255, 0.72) 69.79%,
    #42ffff 92.19%,
    rgba(66, 255, 255, 0) 100%
  );
  @media (max-width: 1240px) {
    background: linear-gradient(
      90deg,
      rgba(66, 255, 255, 0) 0%,
      #42ffff 6.25%,
      rgba(66, 255, 255, 0.72) 27.59%,
      rgba(66, 255, 255, 0) 30.9%,
      rgba(66, 255, 255, 0) 69.37%,
      rgba(66, 255, 255, 0.72) 72.78%,
      #42ffff 92.19%,
      rgba(66, 255, 255, 0) 100%
    );
  }
  @media (max-width: 905px) {
    background: linear-gradient(
      90deg,
      rgba(66, 255, 255, 0) 0%,
      #42ffff 6.25%,
      rgba(66, 255, 255, 0.72) 18.47%,
      rgba(66, 255, 255, 0) 22.3%,
      rgba(66, 255, 255, 0) 78.31%,
      rgba(66, 255, 255, 0.72) 82.14%,
      #42ffff 92.19%,
      rgba(66, 255, 255, 0) 100%
    );
  }
  @media (max-width: 600px) {
    background: linear-gradient(
      90deg,
      rgba(66, 255, 255, 0) 0%,
      #42ffff 3.2%,
      rgba(66, 255, 255, 0.72) 7.07%,
      rgba(66, 255, 255, 0) 10.07%,
      rgba(66, 255, 255, 0) 89.56%,
      rgba(66, 255, 255, 0.72) 92.16%,
      #42ffff 96.59%,
      rgba(66, 255, 255, 0) 100%
    );
  }
`;

export const StyledDividerLabel = styled(Typography)`
  font-weight: 500;
  position: relative;

  display: flex;
  justify-content: center;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  top: -2.5rem;
  line-height: 30px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export default function Dividar() {
  return (
    <StyledDivider>
      <StyledDividerLabel variant="h3">
        {/* {ApiPlatformStr.title} */}
      </StyledDividerLabel>
    </StyledDivider>
  );
}
