import React from "react";
import { Container, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Nav from "./Nav";
import Posts from "./Posts";
import Detail from "./Detail";
import Create from "./Create";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav />
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/read/:id" element={<Detail />} />
                <Route path="/newblog" element={<Create />} />
              </Routes>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
