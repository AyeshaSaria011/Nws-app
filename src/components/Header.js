import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Stack,Toolbar,Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6'
        sx={{flexGrow:1, textAlign:"center "}}>
           NEWSTELLER
        </Typography>
        <Stack direction='row' spacing={2}>
          <Link to="/">
          <Button style={{color:'white'}}>Home</Button>
          </Link>
          <Link to="/Entertainment">
          <Button style={{color:'white'}}>Entertainment</Button>
          </Link>
          <Link to="/Sports">
          <Button style={{color:'white'}}>Sports</Button>
          </Link>
          <Link to="/politics">
          <Button style={{color:'white'}}>Politics</Button>
          </Link>
          <Link to="/Education">
          <Button style={{color:'white'}}>Education</Button>
          </Link>
          <Link to="/Tech">
          <Button style={{color:'white'}}>Tech</Button>
          </Link>
          <Link to="/India">
          <Button style={{color:'white'}}>India</Button>
          </Link>
          <Link to="/World">
          <Button style={{color:'white'}}>World</Button>
          </Link>
          <Link to="/Business">
          <Button style={{color:'white'}}>BUsiness</Button>
          </Link>
          </Stack>
        </Toolbar>
        </AppBar>
    </>
  )
}

export default Header