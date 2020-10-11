import React from 'react'
import { Typography, Container, AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LoginForm from './partials/LoginFrom';

export default function login() {
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
                </Toolbar>
            </AppBar>
            <Container>
                <h1><br></br></h1>
                <LoginForm />
            </Container>
        </div>
    )
}
