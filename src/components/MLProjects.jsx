import { Box, Typography, Card, CardContent, CardMedia, CardActions, Button, Grid, Divider } from '@mui/material';
import { useState, useEffect } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const MLProjects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showMoreButtons, setShowMoreButtons] = useState([]);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const projects = [
    {
      title: 'Early warning system for water quality of river',
      date: 'September 2023',
      description: 'To improve the efficiency of water quality and equipmet condition inspections. ' 
      + 'Obtain relevant data, use the forward and backward sliding method for missing value supplementation, ' 
      + 'use the isolated forest algorithm to identify abnormal mutation points, and use LSTM for water quality prediction.'
      + 'Communicated with colleagues from various departments to understand the water quality pollution scenarios in the river gushes, ' 
      + 'and set relevant rules included equipment abnormal and water quality pollution.',
      mediaType: 'image',
      media: '/waterQuality.jpg',
    //   link: 'https://github.com/yourusername/env-prediction'
    },
    {
      title: 'Mathematical Contest In Modeling',
      date: 'Febrary 2022',
      description: 'Won H award in MCM. Developed a quantitative investment model based on the last 5 years of bitcoin and gold data given by the competition.' 
      + 'Conducted data processing and visualization with Python, built ARIMA time series model, ' 
      + 'and used MAE to measure the effect of the model under different parameters to forecast the rise and fall of bitcoin and gold.' 
      + 'Developed trading strategies and conducted sensitivity analysis.',
      mediaType: 'image',
      media: '/MCM.jpg',
      link: 'https://www.mathmodels.org/Problems/2022/MCM-C/index.html'
    },
    {
      title: 'Jane Street Market Prediction',
      date: 'August 2021',
      description: 'Participated in Kaggle competition for financial market prediction. Visualize and pre-process the data.'
      + 'Build a CNN model based on Keras and a ResNet model based on PyTorch. ' 
      + 'Observed the results of different models and adjusted the parameters of the CNN model through the control variates method and Bayes\’ theorem to get the optimized model'
      + 'Developed machine learning models achieving top 12.8% ranking (544/4245).',
      mediaType: 'image',
      media: '/JaneStreet.jpg',
      link: 'https://www.kaggle.com/competitions/jane-street-market-prediction/overview'
    },
    
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
        Data Science Project
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        A collection of projects which used deep learning and machine learning technic I done before.
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
            // transition: 'transform 0.2s, box-shadow 0.2s',
            // '&:hover': {
            //   transform: 'scale(1.02)',
            //   boxShadow: 6,
            //   cursor: 'pointer'
            // }
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

export default MLProjects;