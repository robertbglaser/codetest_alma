import React from 'react';
import Link from 'next/link'
import {Button, Card, CardContent, Stack, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ConfirmPage = () => {
  return (
    <div>
       <FavoriteIcon style={{ color: 'violet' }} /> 
    <Card  variant="outlined">
        <CardContent>
        <Typography variant="body2">
                Thank you</Typography>
        <Typography variant="body2">
                 Your information was submitted to our team of immigration attorneys.  Expect an email from hello@tryalma.ai
        </Typography>

        <Button variant="contained" style={{ color: 'white', backgroundColor:"black" }}>Back to Homepage</Button>
        </CardContent>
        
               
        
    </Card>
    <Stack direction="row" spacing={2}>
    <Button variant="contained" style={{ color: 'white', backgroundColor:"black" }}>Submit</Button>

    </Stack>
    
    </div>
  )
}

export default ConfirmPage;