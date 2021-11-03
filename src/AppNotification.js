
import React, { memo, useCallback, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, Menu, MenuItem } from '@mui/material';
import { getRandomNum } from './methods'

const notificationNum = getRandomNum(10);
let menuNotArr = [];

fetch(`https://api.quotable.io/quotes?limit=${notificationNum}&maxLength=40&page=1`)
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach(quoteObj => {
      console.log(quoteObj)
      menuNotArr = [...menuNotArr, {"author": `${quoteObj.author}`, "content": `${quoteObj.content}`}];
    })
  });

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
          menuNotArr.map((item, idx) => {
            return <MenuItem key={idx} onClick={handleClose}>
              {item.content}
              <br />
              - {item.author}
            </MenuItem>
          })
        }
      </Menu>
    </>
  )
});

export default AppNotification;


