import React from 'react'
import {AppBar,Container , IconButton, Toolbar,Box, Typography,Button} from "@mui/material"
import {Menu,Lock} from "@mui/icons-material"
import photoURL from '../profile1.jpg'
import {useValue} from './context/ContextProvider.jsx';
import UserIcons from './user/UserIcons'


const user = {name:'test',photoURL}

const Navbar = () => {

    const {state:{currentUser},
    dispatch
} = useValue()

  return (
   <AppBar>
    <Container maxWidth='lg'>
        <Toolbar disableGutters>
            <Box sx={{mr:1}}>
                <IconButton size='large' color='inherit'>
                    <Menu />
                </IconButton>
            </Box>
            <Typography
            variant='h6'
            component='h1'
            noWrap
            sx={{flexGrow:1,display:{xs:'none',md:'flex'}}}
            >
                You Are Welcome
            </Typography>
            <Typography
            variant='h6'
            component='h1'
            noWrap
            sx={{flexGrow:1,display:{xs:'flex',md:'none'}}}
            >
                YRW
            </Typography>
            {!currentUser ? (  <Button
            color='inherit'
            startIcon={<Lock/>}
            onClick={()=>dispatch({type:'OPEN_LOGIN'})}
            >
                Login
            </Button>) : (
                <UserIcons/>
            )}
          
        </Toolbar>
    </Container>
   </AppBar>
  )
}

export default Navbar
