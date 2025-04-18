import { Box, Typography, Card, CardContent, CardMedia, CardActions, Button, Grid, Divider } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState, useEffect } from 'react';

const WebProjects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showMoreButtons, setShowMoreButtons] = useState([]);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const projects = [
    {
      title: 'Personal Website',
      date: 'April 2025',
      description: 'A responsive personal portfolio website built with React and Material-UI.',
      mediaType: 'image',
      media: '/personal-website.jpg',
      link: 'https://github.com/yourusername/personal-website'
    },
    {
        title: 'B2YBooks Online Store',
        date: 'March 2025',
        description: 'A client-side web application for an online bookstore.' + 
        'The application allows users to browse books, search and filter book listings, add items to a shopping cart, and toggle between light/dark modes. ' + 
        'The implementation uses core web technologies (HTML, CSS, and JavaScript) without any third-party frameworks or libraries.',
        mediaType: 'image',
        media: '/B2YBooks Online Store.jpg',
        link: 'https://github.com/LiChenyang-GZ/B2YBooks-Online-Store/tree/main'
    },
    {
        title: 'Inkball game',
        date: 'Octorber 2024',
        description: 'A video game built with Gradle 9.0 and Java 8.0. It is the final project of COMP9003(object-oriented programming)',
        mediaType: 'video',
        media: '/inkballVideo.mp4',
        poster: '/inkball.jpg',
        link: 'https://github.com/LiChenyang-GZ/inkball_scaffold'
    },
    {
        title: 'On-boarding conversations Artificial Intelligence Model (Company project)',
        date: 'January 2023',
        description: 'A web application built with Gradio. To provide on-boarding guidance to new employees. ' 
        + 'Organized documents related to on-boarding training, chunked and vectorized the documents, and then stored the document data in a vector database.' 
        + 'Deployed on-boarding AI model based on LangChain framework and ChatGLM3-6B model to create and define prompts and save forms for historical conversations and answers',
        mediaType: 'image',
        media: '/ConversationLLM.jpg',
    }
  ];

  useEffect(() => {
    const buttonsVisibility = projects.map((_, index) => {
      const descriptionElement = document.getElementById(`description-${index}`);
      if (descriptionElement) {
        return descriptionElement.scrollHeight > descriptionElement.clientHeight;
      }
      return false;
    });
    setShowMoreButtons(buttonsVisibility);
  }, [projects]);

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Web Development Project
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        A collection of projects includes web development, game development, and LLM model deployment.
      </Typography>
      <Divider sx={{ my: 3 }} />

      <Grid container spacing={4} sx={{ justifyContent: 'flex-start' }}>
      {projects.map((project, index) => (
        <Grid item xs={12} key={index} sx={{ 
          display: 'flex',
          justifyContent: 'left', // 居中卡片
          width: '100%'
        }}>
          <Card sx={{ 
            width: '100%',
            maxWidth: '800px',     // 统一最大宽度
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 1,
          }}>
            {/* 图片区域（固定 16:9 比例） */}
            <Box sx={{ 
              width: '100%',
              height: 0,
              paddingBottom: '56.25%', // 16:9 比例
              position: 'relative',
              overflow: 'hidden'
            }}>
              {project.mediaType === 'image' ? (
                // 图片渲染
                <CardMedia
                  component="img"
                  image={project.media}
                  alt={project.title}
                  sx={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              ) : (
                // 视频渲染
                <CardMedia
                  component="video"
                  src={project.media}
                  alt={project.title}
                  controls // 显示视频控制条
                  sx={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              )}
            </Box>

            {/* 文字区域 */}
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                {project.date}
              </Typography>
              <Typography 
                id={`description-${index}`}
                variant="body2" 
                color="text.secondary"
                sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: expandedIndex === index ? 'unset' : 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {project.description}
              </Typography>
              {showMoreButtons[index] && (
                <Button 
                  size="small" 
                  onClick={() => toggleExpand(index)}
                  sx={{ 
                    mt: 1,
                    alignSelf: 'flex-start', // 左对齐
                    textTransform: 'none',  // 禁用大写转换
                  }}
                >
                  {expandedIndex === index ? 'Show Less' : 'Show More'}
                </Button>
              )}
            </CardContent>

            {/* 按钮区域 */}
            <CardActions>
            {project.link && ( // 仅当 link 存在时显示按钮
              <Button 
                size="small" 
                color="primary" 
                endIcon={<OpenInNewIcon />}
                href={project.link}
                target="_blank"
              >
                View Project
              </Button>
            )}
          </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
  );
};

export default WebProjects;