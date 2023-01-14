import React from 'react';
import { Toolbar, Typography } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SearchBox from '../saerchBox/SearchBox';
import { StyledAppBar, StyledBoxIcon } from './styled';

const Header = () => {
  return (
    <StyledAppBar>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <StyledBoxIcon>
          <LibraryBooksIcon />
          <Typography ml="10px" variant="h4">
            Cv
          </Typography>
        </StyledBoxIcon>
        <SearchBox />
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
