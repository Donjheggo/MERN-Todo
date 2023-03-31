import React from 'react'
import Card from '../components/Card'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Home = () => {

  const data = [
    {title: 'Title one', description: 'Description 1'},
    {title: 'Title two', description: 'Description 2'},
    {title: 'Title three', description: 'Description 3'},
    {title: 'Title four', description: 'Description 4'}

  ]

  const todoElements = data.map(item => <Card key={item.title} title={item.title} description={item.description}/>)

  return (
    <>
      <Typography align='center' variant='h4'>To do</Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2 }}>
          {todoElements}
        </Grid>
    </>
  )
}

export default Home