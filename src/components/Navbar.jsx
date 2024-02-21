import React from 'react'
import { AppBar,Button,Toolbar,colors,Typography} from '@mui/material'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography sx={{flexGrow:1}}align='left' variant='h6'>App</Typography>
                <Button>
                <Link to ='/' style={{color:'white'}} >login</Link>
                </Button>
                <Button>
                <Link to ='/sign' style={{color:'white'}} >Signup</Link>
                  
                </Button>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar