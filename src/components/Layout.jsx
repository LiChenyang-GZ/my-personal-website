import { Box, Container, Typography, Avatar, AppBar, Toolbar, Button } from '@mui/material';
import { Link as RouterLink, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  
  const navItems = [
    { title: 'Home', path: 'home' },
    { title: 'About', path: 'about' },
    { title: 'Education', path: 'education' },
    { title: 'Experience', path: 'experience' },
    { title: 'Projects', path: 'projects' },
    { title: 'Contact', path: 'contact' }
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* 顶部导航栏 */}
      <AppBar position="fixed" color="default" elevation={3}>
        <Toolbar>
          <Typography 
            variant="h6" 
            component={RouterLink}
            to="home"
            sx={{ 
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Christy's Personal Website
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                color="inherit"
                sx={{
                  fontWeight: location.pathname === `/${item.path}` ? 'bold' : 'normal',
                  borderBottom: location.pathname === `/${item.path}` ? '2px solid' : 'none',
                  borderColor: 'primary.main',
                  borderRadius: 0
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* 这个空的Toolbar用来占位，防止内容被固定导航栏遮挡 */}

      {/* 主要内容区域 */}
      <Box sx={{ display: 'flex', flex: 1 }}>
        {/* 左侧个人信息栏 */}
        <Box
          sx={{
            width: '300px',
            backgroundColor: '#f5f5f5',
            p: 4,
            position: 'fixed',
            height: 'calc(100vh - 64px)',
            overflowY: 'auto',
            top: '64px'
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Avatar
              src="photo.png"
              sx={{
                width: 150,
                height: 150,
                margin: '0 auto 20px',
                border: '3px solid white',
                boxShadow: '0 0 20px rgba(0,0,0,0.1)'
              }}
            />
            <Typography variant="h5" component="h2" gutterBottom>
              Chenyang Li (Christy)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Software Developer
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Lichenyang_christy@outlook.com
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: "60px", textAlign: 'left' }}>
              Hi, I'm Christy! I am a Master student studying Computer Science at the University of Sydney.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textAlign: 'left' }}>
              Previously, I studied E-Business and Information Systems and worked as a data analyst intern in a Marketing-AI company
              and an Algorithm Engineer in an Environmental Technology company. 
            </Typography>
          </Box>
        </Box>

        {/* 右侧内容区域 */}
        <Box
          sx={{
            flexGrow: 1,
            ml: '300px',
            p: 4,
            backgroundColor: '#ffffff',
            minHeight: 'calc(100vh - 64px)'
          }}
        >
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;