import React from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import CasinoIcon from '@mui/icons-material/Casino';

const VisaType = () => {
  return (
    <div>
        <CasinoIcon style={{ color: '#aa00ff' }}/> 
        <p> Visa Categories of Interest</p>
        <FormGroup>
        <FormControlLabel control={<Checkbox  />} label="O-1" />
        <FormControlLabel control={<Checkbox  />} label="EB-1A" />
        <FormControlLabel control={<Checkbox  />} label="EB-2NW" />
        <FormControlLabel control={<Checkbox />} label="I don't know" />
        </FormGroup>


    </div>
  )
}

export default VisaType