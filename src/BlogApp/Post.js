import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './styles.css';

const theme = createTheme();

function Post({ blog }) {
  return (
    <ThemeProvider theme={theme}>
      <Link to={`/read/${blog.id}`} className='post-link'>
        <Card className='blog'>
          <CardMedia
            component='img'
            src={blog.thumbnail}
            alt='Blog Thumbnail'
            className='blog-image'
          />
          <CardContent className='blog-title'>
            <Typography variant='h5' component='h2'>{blog.title}</Typography>
            <Typography variant='body2' color='textSecondary' component='p'>{blog.description}</Typography>
          </CardContent>
        </Card>
      </Link>
    </ThemeProvider>
  );
}

export default Post;
