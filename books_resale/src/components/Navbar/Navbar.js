import { AppBar, Typography } from '@mui/material';
import React from 'react';

const Navbar = () => {
  return (
    <AppBar position="static" color='inherit' sx={{m:2, borderRadius:2 }} >
      <Typography variant='h2' align='center'>Campus Bookstore</Typography>
      <img src=''></img>
    </AppBar>
  );
};

export default Navbar;