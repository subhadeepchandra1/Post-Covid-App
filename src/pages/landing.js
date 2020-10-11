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
                    <Button color="inherit" href="/login">Login</Button>
                    <Button color="inherit" href="/signup">Sign Up</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <h1>Hello</h1>
                <Button startIcon={<VpnKeySharpIcon/>} variant="contained" href="/login">Login</Button> | 
                <Button endIcon={<VpnKeySharpIcon/>} href="/signup">Signup</Button>
            </Container>
        </div>
    )
}
