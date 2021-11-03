
import React, { memo, useCallback, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, Menu, MenuItem } from '@mui/material';
import { getRandomNum, getArr1toNum } from './methods'


const notificationNum = getRandomNum(10);
const menuNotArr = getArr1toNum(notificationNum);

const AppNotification = memo(() => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [undoneNotification, setUndoneNotification] = useState(notificationNum);

  const handleMenu = useCallback((event) => {
    setAnchorEl(event.currentTarget);
    setUndoneNotification(0);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);


  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleMenu}
        >
        <Badge badgeContent={undoneNotification} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        id="notification-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
          menuNotArr.map((item, idx) => <MenuItem key={idx} onClick={handleClose}></MenuItem>)
        }
      </Menu>
    </>
  )
});

export default AppNotification;


