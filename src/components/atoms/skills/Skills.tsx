import React, { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { skill } from '../../string/String';
import SkillCard from '../../molecules/SkillCard/SkillCard';
import CloseIcon from '@mui/icons-material/Close';
import { Education } from '../Education/Education';
import { StyledGridText, StyledMainGrid, StyledTitles } from './styled';
import Experience from '../Experience/Experience';
import {
  StyledApiPlatformInfo,
  StyledDivider,
  StyledDividerLabel,
} from '../dividar/Dividar';

const Skills = () => {
  const [open, setOpen] = useState(false);
  const [education, setEducation] = useState(false);
  const [experience, setExperience] = useState(false);
  const handleEducation = () => {
    setEducation(true);
    setExperience(false);
    setOpen(false);
  };
  const handleExperience = () => {
    setExperience(true);
    setOpen(false);
    setEducation(false);
  };
  function findSkill() {
    setOpen(true);
    setEducation(false);
    setExperience(false);
  }
  const handleCols = () => {
    setOpen(false);
    setEducation(false);
    setExperience(false);
  };
  return (
    <StyledMainGrid container mx="auto">
      <StyledGridText container>
        <StyledDivider container>
          <StyledDividerLabel variant="h3">
            <Button onClick={findSkill}>
              <StyledTitles>Skill</StyledTitles>
            </Button>
          </StyledDividerLabel>
          <StyledDividerLabel variant="h3">
            <Button onClick={handleEducation}>
              <StyledTitles>Education</StyledTitles>
            </Button>
          </StyledDividerLabel>
          <StyledDividerLabel variant="h3">
            <Button onClick={handleExperience}>
              <StyledTitles>Experience</StyledTitles>
            </Button>
          </StyledDividerLabel>
        </StyledDivider>
      </StyledGridText>
      <Grid
        container
        sx={{
          display: 'block',
        }}
      >
        {open && (
          <Button onClick={handleCols}>
            {' '}
            <CloseIcon />{' '}
          </Button>
        )}
        {education && (
          <Button onClick={handleCols}>
            {' '}
            <CloseIcon />{' '}
          </Button>
        )}
        {experience && (
          <Button onClick={handleCols}>
            {' '}
            <CloseIcon />{' '}
          </Button>
        )}
        {open &&
          skill.map((item) => (
            <SkillCard
              key={item.id}
              src={item.image}
              skillName={item.skillName}
              alt={item.alt}
              progress={item.progress}
            />
          ))}
        <Grid container>{education && <Education />}</Grid>
        <Grid container>{experience && <Experience />}</Grid>
      </Grid>
    </StyledMainGrid>
  );
};

export default Skills;
