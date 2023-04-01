import './App.css';
import Home from './components/Home/Home';
import { Routes ,Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import { useEffect, useState } from 'react';

function App() {
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(()=>{
      setUser(JSON.parse(localStorage.getItem('profile')));
    },[]
  )
  return (
    <BrowserRouter> {/*It is the parent component used to store all other components.*/}
      <Container maxWidth='xl'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/books' index element={<Home/>}></Route>
          <Route path='/books/:id' element={<PostDetails/>}></Route>
          <Route path='/form' element={<Form/>}></Route>
          <Route path='/auth' element={user ?  <Navigate to='/'/>: <Auth/>}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
