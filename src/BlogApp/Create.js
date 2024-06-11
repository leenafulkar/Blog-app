import React from "react";
import { Container, Grid, TextField, Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

function Create() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Add a New Blog
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              placeholder="Write Title"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              placeholder="Write Description"
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="file">
              <input
                type="file"
                id="file"
                name="file"
                style={{ display: "none" }}
              />
              <Button variant="contained" component="span">
                Upload File
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="newblog-btn"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Create;
