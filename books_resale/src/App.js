import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/post';
import './App.css';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import Posts from './components/Posts/Posts';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch]);

  return (
    <Container maxWidth='xl'>
      <Navbar/>
      <Container>
        <Grid container>
          <Grid item sm={0} justifyContent='end'>
            <Posts/>
          </Grid>
          <Grid item sm={12}>
            <Form/>
          </Grid>
        </Grid>
      </Container>
    </Container>
    
  );
}

export default App;
