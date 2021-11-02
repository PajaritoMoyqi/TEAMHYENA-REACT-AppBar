import React, { memo } from 'react';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import { Badge } from '@mui/material';

const getRandomNum = (initialNum) => {
  return Math.floor(Math.random()*(initialNum));
}

const AppEmailAndNotification = memo(() => {

  const notificationNum = getRandomNum(10);
  const emailNum = getRandomNum(30)

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <Badge badgeContent={emailNum} color="error">
          <EmailIcon />
        </Badge>
      </IconButton>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <Badge badgeContent={notificationNum} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </>
  )
});

export default AppEmailAndNotification;