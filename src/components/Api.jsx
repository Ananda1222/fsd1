import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Api = () => {
    var[user,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response.data)
            setUsers(response.data);

        })
    },[])
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>city</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((val,i)=>{
                        return(
                            <TableRow>
                            <TableCell key={i}>{val.name}</TableCell>
                            <TableCell key={i}>{val.username}</TableCell>
                            <TableCell key={i}>{val.address.city}</TableCell>
                            </TableRow>
                        )
                    })}
                    </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Api