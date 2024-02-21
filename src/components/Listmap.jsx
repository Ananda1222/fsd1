import React,{useState}from 'react'
import{Button,TextField} from '@mui/material'

const Listmap = () => {
    var[inp,setInp]=useState(["ICTAK"])
    var[data,setData]=useState()
    const inputHandle=(e)=>{
        console.log("on")
        setData(e.target.value)
        console.log("inp",data)
    }
    const add=()=>{
        console.log("c")
        setInp([...inp,data])
        console.log("sub",inp)
        setData("");
    }

  return (

    <div style={{marginTop:'50px'}}>
    <TextField variant='outlined' label="enter your name"onChange={inputHandle}value={data}/>
    <br/><br/>
    <Button variant="contained" onClick={add}>Submit
    </Button><br/><br/>
    <ul>
        {
        inp.map((v,i) =>{
            return <li key={i}>{v}</li>
        }
    )}
    </ul>
    
</div>
    
  )
}

export default Listmap