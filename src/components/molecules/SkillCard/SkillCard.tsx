import { Box, Typography, Button, Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import React from 'react';
import { StyledDivider } from '../../atoms/dividar/styled';
import Level from '../level/Level';
import { StyledBtnCard, StyledNameSkill } from './styled';

type SkillsProps = {
  src: string;
  skillName: string;
  id?: number;
  alt: string;
  onClick?: React.MouseEventHandler;
  progress: number;
};

const SkillCard = (props: SkillsProps) => {
  const { src, alt, skillName, onClick, progress } = props;
  return (
    <StyledBtnCard container mt={6} mb={10} onClick={onClick}>
      <Box display="flex" alignItems="center" width="1">
        <Image src={src} alt={alt} width={50} height={50} />
        <StyledNameSkill>{skillName}</StyledNameSkill>
        <Level Value={progress} nameSkill={skillName} />
      </Box>
    </StyledBtnCard>
  );
};

export default SkillCard;
