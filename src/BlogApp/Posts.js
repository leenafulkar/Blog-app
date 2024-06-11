import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post';
import { TextField, Typography, Grid, Container, CircularProgress } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './styles.css';

const theme = createTheme();

function Posts() {
    const [blogs, setBlogs] = useState([]);
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then(res => {
            setBlogs(res.data.products);
            setRecords(res.data.products);
            setLoading(false);
        })
        .catch(err => console.log(err));
    }, []);

    const getInputData = (event) => {
        setBlogs(records.filter(r => r.title.toLowerCase().includes(event.target.value.toLowerCase())));
    };

    return (
        <ThemeProvider theme={theme}>
            <Container className='posts' sx={{marginTop:'20px'}}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <TextField
                            type="text"
                            placeholder="Search"
                            variant="outlined"
                            onChange={getInputData}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} className='blog-icon'>
                        <Typography variant='h4'>Blogs</Typography>
                        <i className='fa fa-calculator'></i>
                    </Grid>
                    {loading ? (
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <CircularProgress />
                        </Grid>
                    ) : (
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                {blogs.map((blog, index) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                        <Post blog={blog} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default Posts;
