import { Container, Box, Typography, Card, CardContent, CardMedia, CardActions, Button, Grid, Divider } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useState, useRef, useEffect } from 'react';

const ProblemSolvingProjects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showMoreButtons, setShowMoreButtons] = useState([]);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const projects = [
    {
      title: "Corporate Data Fraud Exclusion Rules (Company project)",
      date: "August 2023",
      description: 'Investigated potential falsification of pollution emission data by enterprises ' 
      + 'and enhanced the efficiency of regulatory inspections. ' 
      + 'Collaborated with team members to identify common falsification patterns and defined five rule-based cases: ' 
      + 'constant values, minimal fluctuations, sudden drops, abnormal exceedance, and irregular water volume.',
      mediaType: 'image',
      media: "./dataFraud.jpg",
      link: null
    },
    {
      title: 'Skincare Product Business Analysis Project (Intern project)',
      date: 'Jan - Jane, 2022',
      description: 'Conducted social media analytics for a marketing-AI firm to assess the reputation of skincare brands.' 
      + 'Calculated brand metrics such as audience size, loyalty, and reputation to generate actionable brand intelligence. ' 
      + 'Investigated negative engagement patterns ("haters") and developed rule-based systems to identify toxic accounts and posts. ' 
      + 'Delivered insights that informed and improved client marketing strategies based on customer review analysis.',
      mediaType: "image",
      media: './skincare project.jpg',
      link: 'https://www.shangyexinzhi.com/article/4677117.html'
    },
    {
      title: 'User Engagement in Online Communities during COVID-19 Analysis',
      date: 'December 2021',
      description: 'Conducted a research project on user engagement in online communities during the COVID-19 pandemic, ' 
      + 'with a focus on sentiment analysis of news video titles and corresponding user comments. ' 
      + 'Discovered that longer titles and sad emotional tones were positively correlated with higher engagement ' 
      + '(e.g., more comment likes), indicating empathetic behaviour among users during the crisis. ' 
      + 'Also explored potential links between positive sentiment and engagement, offering insights into emotional triggers for online interaction.',
      mediaType: 'image',
      media: './Conference Paper.jpg',
      link: 'https://aisel.aisnet.org/iceb2021/70/'
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
        Data Analysis Projects
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        A collection of projects which used analytical thinking and technical expertise to solve complex business challenges.
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
    </Container>
  );
};

export default ProblemSolvingProjects;