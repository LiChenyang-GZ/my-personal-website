import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { title: 'About Me', path: '/about' },
    { title: 'Education', path: '/education' },
    { title: 'Experience', path: '/experience' },
    { title: 'Contact', path: '/contact' }
  ];

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          My Portfolio
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={RouterLink}
              to={item.path}
              sx={{ color: 'white' }}
            >
              {item.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 