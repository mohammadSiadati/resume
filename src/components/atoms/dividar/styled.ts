import { styled } from '@mui/material/styles';

export const StyledDivider = styled('div')`
  position: relative;
  margin-top: 3rem;
  width: 100%;
  height: 0.5px;
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
