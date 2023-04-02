import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card'
import Grid from '@mui/material/Grid';
import { Button, Typography, Box } from '@mui/material';
import Dialog from '../components/Dialog';


const Home = () => {
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)
  const data = [
    {title: 'Title one', description: 'Description 1', createdAt: 'January, 16, 2023'},
    {title: 'Title two', description: 'Description 2', createdAt: 'January, 16, 2023'},
    {title: 'Title three', description: 'Description 3', createdAt: 'January, 16, 2023'},
    {title: 'Title four', description: 'Description 4', createdAt: 'January, 16, 2023'}

  ]
  const todoElements = data.map(item => <Card key={item.title} title={item.title} description={item.description} createdAt={item.createdAt}/>)
  

  useEffect( () => {
    if(!user){
      navigate("/")
    }
  }, [user])

  return (
    <>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px'}}>
        <Typography align='center' variant='h4'>To do</Typography>
        <Dialog/>
      </Box>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2 }}>
          {todoElements}
        </Grid>
    </>
  )
}

export default Home;