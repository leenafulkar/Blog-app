import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardMedia } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => {
        setPost(res.data);
        setImageArray(res.data.images);
      })
      .catch(err => console.log(err));
  }, [id]);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <div className='detail-post-container'>
          <div className='title-description'>
            <Typography variant="h4" gutterBottom>{post.title}</Typography>
            <Typography variant="body1" paragraph>{post.description}</Typography>
          </div>
          <div className='images-container'>
            <Grid container spacing={2}>
              {imageArray.map((image, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="300"
                      image={image}
                      alt={`image-${index}`}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Detail;
