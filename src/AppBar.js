import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import AppEmailAndNotification from './AppEmailAndNotification';
import AppAccounts from './AppAccounts';
import AppTitle from './AppTitle';

const ButtonAppBar = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AppTitle />
          <AppEmailAndNotification />
          <AppAccounts />
        </Toolbar>
      </AppBar>
    </Box>
  );

}

export default ButtonAppBar;