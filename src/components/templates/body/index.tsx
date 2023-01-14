import { Container } from '@mui/material';
import React from 'react';
import BoxDetail from '../../atoms/BoxDetail/BoxDetail';
import BoxPicture from '../../atoms/BoxPicture/BoxPicture';
import ResumeName from '../../atoms/resumeName/ResumeName';
import Skills from '../../atoms/skills/Skills';

const Content = () => {
  return (
    <Container>
      <BoxDetail>
        <BoxPicture />
        <ResumeName />
      </BoxDetail>
      <Skills />
    </Container>
  );
};

export default Content;
