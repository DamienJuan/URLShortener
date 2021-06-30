import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

export default function Footer() {
   
    let url="https://dev.bitly.com/";
    let element=<a href={url}>© 2021 Link shortener tool using Bitly API</a>;
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1">
                {element}
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}