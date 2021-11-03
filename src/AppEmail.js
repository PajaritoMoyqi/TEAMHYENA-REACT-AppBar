import React, { memo, useCallback, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import { Badge, Menu, MenuItem } from '@mui/material';
import { getRandomNum } from './methods'


const emailNum = getRandomNum(10);
let menuEmailArr = [];

fetch(`https://api.quotable.io/quotes?limit=${emailNum}&maxLength=40&page=1`)
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach(quoteObj => {
      console.log(quoteObj)
      menuEmailArr = [...menuEmailArr, {"author": `${quoteObj.author}`, "content": `${quoteObj.content}`}];
    })
  });

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
          menuEmailArr.map((item, idx) => {
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

export default AppEmail;