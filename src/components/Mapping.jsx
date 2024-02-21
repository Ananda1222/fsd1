import React,{useState} from 'react'
import {Table,TableBody,TableCell,TableHead,TableRow,TableContainer,TextField, Button,} from '@mui/material'
const Mapping = () => {
    var[names,setNames]=useState(
    [
        {sname:"ananda",age:20},
        {sname:"ardra",age:31},
        {sname:"nandana",age:22},
        {sname:"navya",age:23},
    ]
    )
    var[name,setName]=useState()
    const inputHandler=(e)=>{
        setName({...name,[e.target.name]: e.target.value})
        console.log(name);
    }
  return (
    <div>
        <TableContainer>
         <Table>
            <TableHead>
                    <TableRow>
                        <TableCell style={{color:"red",fontFamily:"cursive",fontSize:'50px'}}>Name</TableCell>
                        <TableCell style={{color:"red",fontFamily:"cursive",fontSize:'50px'}}>Age</TableCell>
                        <br/><br/>
                        <TextField variant='filled' label='username' name='sname' onChange={inputHandler}/>
                        <br/><br/>
                        <br/><br/>
                        <Button variant='contained'>submit</Button>
        
                    </TableRow>
               </TableHead>
               <TableBody>
                {names.map((value,index)=>{
                    return(

                        <TableRow>
                            <TableCell>{value.sname}</TableCell>
                           <TableCell>{value.age}</TableCell>
                        </TableRow>
                    )
                })}
               
                </TableBody>
         </Table>
        </TableContainer>
    </div>
  )
}

export default Mapping