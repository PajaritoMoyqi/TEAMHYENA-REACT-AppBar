import React, { memo, useCallback, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import { Badge, Menu, MenuItem } from '@mui/material';
import { getRandomNum, getArr1toNum } from './methods'


const emailNum = getRandomNum(30);
const menuEmailArr = getArr1toNum(emailNum);

const AppEmail = memo(() => {

  const [anchorEl, setAnchorEl] = useState(null);

  const [undoneEmail, setUndoneEmail] = useState(emailNum);

  const handleMenu = useCallback((event) => {
    setAnchorEl(event.currentTarget);
    setUndoneEmail(0);
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
        <Badge badgeContent={undoneEmail} color="error">
          <EmailIcon />
        </Badge>
      </IconButton>
      <Menu
        id="email-appbar"
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
          menuEmailArr.map((item, idx) => <MenuItem key={idx} onClick={handleClose}>{item}</MenuItem>)
        }
      </Menu>
    </>
  )
});

export default AppEmail;