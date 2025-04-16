import { Box, Typography, Paper, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 6, 
          textAlign: 'left',
          backgroundColor: 'white'
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          About this site
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          A beautiful website built with React, MUI, and EmailJS🤩
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '1000px', mb: 4,}}>
          This site is a portfolio of my projects and experiences. I specialize in web development and data science, with a passion for creating 
          efficient and user-friendly applications. Please feel free to read more about me and my projects.
          If you have any advice, please contact me through the contact page 😄.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button
            component={RouterLink}
            to="/about"
            variant="contained"
            size="large"
          >
            Learn More About Me
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
            variant="outlined"
            size="large"
          >
            Get in Touch
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Home; 