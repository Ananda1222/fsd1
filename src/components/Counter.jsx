import React,{useState} from 'react'
import{Button,Typography}from '@mui/material'
const Counter = () => {
    count=0
    var[count,setCount]=useState(0)
    const add=(e)=>{
        console.log("add btn clicked");
        setCount(count+1)
    }
    const sub=(e)=>{
        console.log("sub btn clicked");
        setCount(count-1)
    }
  return (
    <div>
        
        <Typography variant="h3">count:{count}</Typography>
        <br/><br/><br/>
        <Button variant="contained" color="success" onClick={add}> +</Button>
        &nbsp; &nbsp;
        <Button variant="contained" color="error" onClick={sub}>-</Button>
    </div>
  )
}

export default Counter