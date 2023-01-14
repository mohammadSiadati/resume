import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';

const BoxPicture = () => {
  return (
    <Box
      sx={{
        border: 1,
        width: '250px',
        height: '250px',
        overflow: 'hidden',
        borderRadius: '50%',
      }}
    >
      <Image
        src={'/images/45e76b72-e52d-496a-9310-8e973d02660d.jpg'}
        alt={'your Picture'}
        width={20000}
        height={10000}
        style={{
          maxWidth: '300px',
          height: '300px',
        }}
      />
    </Box>
  );
};

export default BoxPicture;
