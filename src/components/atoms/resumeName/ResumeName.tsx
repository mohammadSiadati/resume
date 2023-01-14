import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Information } from '../../string/String';
import { StyledMainBox, StyledTextInfo } from './styled';

const ResumeName = () => {
  return (
    <StyledMainBox
      sx={{
        mt: {
          xs: '25px',
          sm: '0',
        },
      }}
    >
      <StyledTextInfo>{`FirstName: ${Information.firstName}`}</StyledTextInfo>
      <StyledTextInfo>{`LastName: ${Information.lastName}`}</StyledTextInfo>
      <StyledTextInfo>{`Birthday: ${Information.birthday}`}</StyledTextInfo>
      <StyledTextInfo>{`Phone: ${Information.phone}`}</StyledTextInfo>
      <StyledTextInfo>{`Email: ${Information.email}`}</StyledTextInfo>
    </StyledMainBox>
  );
};

export default ResumeName;
