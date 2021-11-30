import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import AppEmail from './AppEmail';
import AppAccounts from './AppAccounts';
import AppTitle from './AppTitle';
import AppNotification from './AppNotification';
import { AppDrawerBox } from './AppDrawerBox';

const MyAppBar = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AppDrawerBox />
          <AppTitle />
          <AppEmail />
          <AppNotification />
          <AppAccounts />
        </Toolbar>
      </AppBar>
    </Box>
  );

}

export default MyAppBar;