import React from 'react';
import { Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function Footer() {
  return (
    <ThemeProvider theme={theme}>
    <footer style={{ marginTop: '20px', backgroundColor: '#f5f5f5', padding: '20px 0' }}>
      <Container maxWidth="lg">
        <Typography variant="h5" color="textPrimary">Elena !</Typography>
        <Typography variant="body2" color="textSecondary">@copyright code with elena</Typography>
      </Container>
    </footer>
  </ThemeProvider>
  );
}

export default Footer;
