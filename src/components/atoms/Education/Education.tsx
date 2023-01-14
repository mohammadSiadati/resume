import { Box, Typography } from '@mui/material';
import React from 'react';
import { Educations } from '../../string/String';
import { StyledEducation } from './styled';

export const Education = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mx: 'auto',
      }}
      mb={6}
      mt={5}
    >
      <StyledEducation>{`Major: ${Educations.major}`}</StyledEducation>
      <StyledEducation>{`Degree: ${Educations.degree}`}</StyledEducation>
      <StyledEducation>{`EducationAd: ${Educations.EducationAd}`}</StyledEducation>
      <StyledEducation>{`EducationBacheLors: ${Educations.EducationBacheLors}`}</StyledEducation>
    </Box>
  );
};
