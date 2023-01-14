import { Box, Typography } from '@mui/material';
import React from 'react';
import { experience } from '../../string/String';
import { StyledExperience } from './styled';

const Experience = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mx: 'auto',
      }}
      mb={6}
    >
      <StyledExperience>{`Num 1: ${experience.work1} `}</StyledExperience>
      <StyledExperience>{`Num 2: ${experience.work2} `}</StyledExperience>
      <StyledExperience>{`Num 3: ${experience.work3} `}</StyledExperience>
      <StyledExperience>{`Num 4: ${experience.work4} `}</StyledExperience>
      <StyledExperience>{`Num 5: ${experience.work5} `}</StyledExperience>
      <StyledExperience>{`Num 6: ${experience.work6} `}</StyledExperience>
      <StyledExperience>{`Num 7: ${experience.work7} `}</StyledExperience>
    </Box>
  );
};

export default Experience;
