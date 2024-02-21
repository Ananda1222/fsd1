import { Typography,Button,TextField } from '@mui/material'
import React,{ useState } from 'react'

const Signup = () => {
    var[data,setData]=useState();
    const inputHandler=(e)=>{
        setData({...data,[e.target.name]: e.target.value})
        console.log(data);
    }
  return (
    <div>
        <br/>
        <Typography variant='h1'>SIGN UP</Typography>
        <br/>
        <TextField variant='filled' label='username' name='fname' onChange={inputHandler}/>
        <br/><br/>
        <TextField variant='filled' label='Email' name='mail'onChange={inputHandler} />
        <br/>,<br/>
        <TextField variant='filled'label='passward' name='psw'onChange={inputHandler}/>
        <br/><br/>
        <Button variant='contained'>submit</Button>
        
    </div>
  )
}

export default Signup