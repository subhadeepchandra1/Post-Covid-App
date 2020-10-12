import React from 'react'
//import { Link } from 'react-router-dom';
import { Typography, Button, Container, AppBar, IconButton, Toolbar } from '@material-ui/core';
import VpnKeySharpIcon from '@material-ui/icons/VpnKeySharp';
import MenuIcon from '@material-ui/icons/Menu';

export default function landing() {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Post Covid
                    </Typography>
                    <Button startIcon={<VpnKeySharpIcon/>} color="inherit" href="/login">Login</Button>
                    <Button startIcon={<VpnKeySharpIcon/>} color="inherit" href="/signup">Sign Up</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <h1><br></br></h1>
                <Typography color="textPrimary" variant="h2" align="center">
                    Welcome to Post Covid
                </Typography>
                <br></br>
                <Typography color="textPrimary" variant="h5" align="center">
                    Welcome to Post Covid
                    Welcome to Post Covid
                    Welcome to Post Covid
                </Typography>
            </Container>
        </div>
    )
}
