import { TextField, Typography,Button } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>  
    <br/><br/><br/><br/>
         <h1>login here </h1>
         <br/>
        <input placeholder='username'/>
        <br/>
        <br/>
        <input placeholder='password'/><br/>
        <br/>
        <button>submit</button>
        <Typography variant='h1'>login page</Typography>
        <br/><br/>
        <TextField variant='outlined' label="user name" />
        <br/><br/>
        <TextField variant='filled' label="Email"/>
        <br/>   <br/>
        <TextField variant='standard' label="pssword"/>
        <br/><br/>

<Button variant="outlined">submit</Button>
        
    </div>
  )
}

export default Login