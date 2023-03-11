import './App.css';
import Home from './components/Home/Home';
import { Routes ,Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <BrowserRouter> {/*It is the parent component used to store all other components.*/}
      <Container maxWidth='xl'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Form/>}></Route>
          <Route path='/books' index element={<Home/>}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
