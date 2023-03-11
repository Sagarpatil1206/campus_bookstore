import './App.css';
import Home from './components/Home/Home';
import { Routes ,Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';

function App() {

  return (
    <BrowserRouter> {/*It is the parent component used to store all other components.*/}
      <Container maxWidth='xl'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/books' index element={<Home/>}></Route>
          <Route path='/form' element={<Form/>}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
