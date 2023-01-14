import { Box, Typography } from '@mui/material';
import React from 'react';
import { IOSSlider, marks } from './styled';

type DefaultValue = {
  Value: number;
  nameSkill: string;
};

const Level = (props: DefaultValue) => {
  const { Value, nameSkill } = props;
  return (
    <Box
      sx={{
        ml: 10,
        width: {
          xs: '80%',
          sm: '100%',
        },
      }}
    >
      <Typography
        sx={{
          display: {
            xs: 'none',
            sm: 'flex',
          },
        }}
        color="white"
      >
        Level skill{' '}
        <Typography color="gold" ml={1}>
          {nameSkill}
        </Typography>
      </Typography>
      <IOSSlider
        aria-label="Level Skill"
        defaultValue={Value}
        marks={marks}
        disabled
        valueLabelDisplay="on"
      />
    </Box>
  );
};

export default Level;
