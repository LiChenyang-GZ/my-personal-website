import { Box, Typography, Card, CardContent, CardMedia, CardActionArea, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Projects = () => {
  const projectCategories = [
    {
      title: 'Web Development',
      image: '/web-dev.jpg', // 你需要添加这个图片到public文件夹
      description: 'Creating responsive and modern web applications using React, Node.js, and other cutting-edge technologies.',
      path: '/projects/web-development'
    },
    {
      title: 'Machine Learning',
      image: '/ml.jpg', // 你需要添加这个图片到public文件夹
      description: 'Developing and implementing machine learning models for data analysis and prediction.',
      path: '/projects/machine-learning'
    },
    {
      title: 'Problem Solving',
      image: '/problem-solving.jpg', // 你需要添加这个图片到public文件夹
      description: 'Applying analytical thinking and technical expertise to solve complex business challenges.',
      path: '/projects/problem-solving'
    }
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4} sx={{ justifyContent: 'flex-start' }}>
        {projectCategories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ 
            display: 'flex',
            justifyContent: 'flex-start',
            maxWidth: '400px' // 调整宽度以匹配 Inkball game 模块
          }}>
            <Card 
              component={RouterLink}
              to={category.path}
              sx={{ 
                height: '300px', // 调整高度以匹配 Inkball game 模块
                width: '100%',
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 6,
                  cursor: 'pointer'
                }
              }}
            >
              <CardActionArea sx={{ height: '100%' }}>
                <Box sx={{ 
                  height: '150px', // 调整图片容器高度
                  overflow: 'hidden'
                }}>
                  <CardMedia
                    component="img"
                    image={category.image}
                    alt={category.title}
                    sx={{ 
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%'
                    }}
                  />
                </Box>
                <CardContent sx={{ 
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '150px' // 调整内容区域高度
                }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {category.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{
                      flexGrow: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {category.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects; 