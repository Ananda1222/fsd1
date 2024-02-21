import React, {useState}from 'react'
import { Typography,Button} from '@mui/material'
const UseEffect = () => { 
    var[x,setx]=useState()
    const inp1=()=>{
        setx("React");
}
   const inp2=()=>{
    setx("Angular")
    }
    const inp3=()=>{
        setx("next")
    }

  return (
    <div>
        <Typography variant='h3'>Welcome to {x}</Typography>
        <br/><br/>
        <Button variant='contained' onClick={inp1}color='primary'>React</Button>
        <Button variant='contained' onClick={inp2}>Angular</Button>
        <Button variant='contained' onClick={inp3}>next</Button>
    </div>
  )
}

export default UseEffect