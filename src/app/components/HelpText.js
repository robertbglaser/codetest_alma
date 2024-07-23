import React from 'react';
import {Button, Card, CardContent, Stack, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const HelpText = () => {
  return (
    <div>
       <FavoriteIcon style={{ color: 'violet' }} /> 
    <p>How can we help you?</p>
    <Card  variant="outlined">
        <CardContent>
        <Typography variant="body2">
                What is your current status and when does it expire?</Typography>
        <Typography variant="body2">
                 What is your past Immigration history? </Typography>
        <Typography variant="body2">
                   Are you looking for long term permenent residancy or short-term employment visa or both?  </Typography>
           <Typography>
             Are there any timeline considerations?
      </Typography>
       
        </CardContent>
        
               
        
    </Card>
    <Stack direction="row" spacing={2}>
    <Button variant="contained" style={{ color: 'white', backgroundColor:"black" }}>Submit</Button>

    </Stack>
    
    </div>
  )
}

export default HelpText;