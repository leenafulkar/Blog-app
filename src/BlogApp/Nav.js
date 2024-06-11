import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const theme = createTheme();

function Nav() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            BlogBliss !
            </Typography>
            <div style={{ flexGrow: 1 }} />
            <Button color="inherit" component={Link} to="/" style={{ textDecoration: 'none' }}>Home</Button>
            <Button color="inherit" component={Link} to="/newblog" style={{ textDecoration: 'none' }}>New Blog</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Nav;
