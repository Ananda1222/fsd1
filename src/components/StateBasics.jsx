import { Typography,TextField,Button } from '@mui/material';
import React, { useState } from 'react'

const StateBasics = () => {
    //var fname="Ananda";
    var[fname,setFname]=useState("Ananda");
    var[val,setVal]=useState()
    const handleInput =(e)=>{
        //console.log(e.target.value);
        //setFname(e.target.value);
        setVal(e.target.value);
        console.log(val);
        

    }
    const submitHandler=()=>{
        console.log("clicked");
        setFname(val);
    }
  return (
    <div>
        <Typography variant='h4'>Welcome {fname}</Typography>
        <br/><br/>
        <TextField variant="filled" onChange={handleInput} label='Type Your Name'/>
        <br/><br/>

        <Button variant="contained" onClick={submitHandler}>submit</Button>
    </div>
  )
}

export default StateBasics