'use client'
import React,{useEffect, useState} from 'react'
import { FormControl, TextField, MenuItem, Select } from '@mui/material';



const VitalInfo = () => {
 const [countriesList, setCountriesList] = useState([])
 const [initialSelectValue] = useState('Country of Citizenship')

    useEffect(()=>{
        const fetchCountryList = async()=> {
            const result = await fetch('https://restcountries.com/v3.1/all')
            result.json().then(json=>{
                //console.log(json[0].name.common)
               setCountriesList(json)
              })       
        }
         fetchCountryList()


    },[])
    


    //  console.log(countriesList)
    // setCountries(Object.entries(countriesList))
  return (
    <div>
        <br/>
        <h3>We want to understand your Visa Options?</h3>
        <p>Submit the form below and our team of experienced attorneys will review your information and send an premlinary assessment of your case based on your goals. </p>
    <br/>
    <FormControl>
  
  <TextField   variant="outlined" type='text' placeholder='First Name' />
  <TextField   variant="outlined"placeholder='Last Name' type='text'/>
  <TextField   variant='outlined' type='email' placeholder='Email'/>
  <Select variant='outlined'
          defaultValue={initialSelectValue}
          placeholder={initialSelectValue}
          >
   
    {countriesList.map((country, index) => {
    return(
        <MenuItem key={index} value={country.name.common}>{country.name.common}</MenuItem>
    )
    })}
  </Select>
  <TextField   variant='outlined' type='url' placeholder='LinkedIn/Personal Website URL'/>
</FormControl>

    </div>
    
  )
}

export default VitalInfo