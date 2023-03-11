import { AppBar, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" color='inherit' sx={{m:2, borderRadius:2 ,p:1}} style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}} >
      <Typography variant='h2' align='center'>Campus Bookstore</Typography>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',gap:50,height:'100%',margin:'auto 0px'}}>
      <Button color='primary' variant='contained' onClick={()=>{navigate('/')}}> Home</Button>
      <Button color='primary' variant='contained' onClick={()=>{navigate('/books')}}> Book Store</Button>
      <Button color='primary' variant='contained' onClick={()=>{navigate('/form')}}> Form</Button>
      <Button color='primary' variant='contained' onClick={()=>{navigate('/auth')}}> Auth</Button>
      </div>
    </AppBar>
  );
};

export default Navbar;