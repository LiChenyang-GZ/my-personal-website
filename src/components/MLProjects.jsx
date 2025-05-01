import { Container, Box, Typography, Card, CardContent, CardMedia, CardActions, Button, Grid, Divider } from '@mui/material';
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
      description: 'Improved the efficiency of water quality and equipment condition inspections by implementing a data-driven monitoring system. ' 
      + 'Collected and cleaned relevant datasets, applied forward and backward sliding methods to fill missing values, ' 
      + 'used Isolation Forest to detect anomalous spikes, and implemented LSTM for time-series water quality prediction. ' 
      + 'Collaborated with cross-functional teams to understand real-world pollution scenarios in river gushes ' 
      + 'and defined rule-based alerts for equipment faults and water contamination events.',
      mediaType: 'image',
      media: './waterQuality.jpg',
    },
    {
      title: 'Mathematical Contest In Modeling',
      date: 'Febrary 2022',
      description: 'Developed a quantitative trading strategy using time series forecasting and optimization techniques for the MCM competition (Honorable Mention). '
        + 'Utilized Python to process and visualize five years of historical data on Bitcoin and gold, implemented the ARIMA time series model to enhance forecasting accuracy of market trends. '
        + 'Developed and optimized a quantitative investment model, leveraged predictions by using predictions from the ARIMA model to devise effective trading strategies. '
        + 'Applied dynamic programming to validate the optimal of our trading strategies, employed linear regression models for sensitivity analysis. Ensuring robust and resilient strategic approaches.',
      mediaType: 'image',
      media: './MCM.jpg',
      link: 'https://www.mathmodels.org/Problems/2022/MCM-C/index.html'
    },
    {
      title: 'Jane Street Market Prediction',
      date: 'August 2021',
      description: 'Participated in a Kaggle financial market prediction competition. ' 
      + 'Performed data visualisation and preprocessing, and developed deep learning models using CNN (Keras) and ResNet (PyTorch). ' 
      + 'Evaluated model performance and applied hyperparameter tuning techniques—including control variates and Bayesian optimisation—to improve CNN accuracy. ' 
      + 'Achieved top 12.8% ranking (544 out of 4,245 teams).',
      mediaType: 'image',
      media: './JaneStreet.jpg',
      link: 'https://www.kaggle.com/competitions/jane-street-market-prediction/overview'
    },
    
  ];

  useEffect(() => {
    const buttonsVisibility = projects.map((_, index) => {
      const descriptionElement = document.getElementById(`description-${index}`);
      if (descriptionElement) {
        // 获取 description 的初始高度（3行）和完整高度
        const lineHeight = parseInt(window.getComputedStyle(descriptionElement).lineHeight);
        const maxHeight = lineHeight * 3; // 3行的高度
        return descriptionElement.scrollHeight > maxHeight;
      }
      return false;
    });
    setShowMoreButtons(buttonsVisibility);
  }, [expandedIndex]); // 只在 expandedIndex 改变时重新计算

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
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
    </Container>
  );
};

export default MLProjects;