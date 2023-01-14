import { Box, Card } from '@mui/material';
import React, { ReactNode } from 'react';
import BoxPicture from '../BoxPicture/BoxPicture';

type Children = {
  children: ReactNode;
};

const BoxDetail = (props: Children) => {
  const { children } = props;
  return (
    <Box
      sx={{
        alignItems: 'center',
        mt: '55px',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        display: 'flex',
      }}
    >
      {children}
    </Box>
  );
};

export default BoxDetail;
