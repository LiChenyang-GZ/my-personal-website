import { Box, Typography, Card, CardContent, CardMedia, CardActions, Button, Grid } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ProblemSolvingProjects = () => {
  const projects = [
    {
      title: "Corporate Data Fraud Exclusion Rules (Company project)",
      date: "August 2023",
      description: "Examined whether enterprises have falsified pollution emission data, " 
      + "and improve the efficiency of the examination by the supervisory personnel" 
      + "Communicated with colleagues to understand the scenarios and patterns of enterprise data falsification. " 
      + "Divided the rules into five cases: continuous unchanged, small fluctuation, sudden drop abnormality, " 
      + "exceeding the abnormal standard, and abnormal water quantity;",
      mediaType: 'image',
      media: "/dataFraud.jpg",
      link: null
    },
    {
      title: 'Skincare Product Business Analysis Project (Intern project)',
      date: 'Jan - Jane, 2022',
      description: 'Marketing-AI company internship project. Analyze the reputation of skincare brands on social media, ' 
      + 'calculating metrics such as size, loyalty, and reputation to derive brand intelligence insights. ' 
      + 'Also understand the behaviors of "haters" on social media and establish rules to identify haters\'s accounts and posts.' 
      + 'Help brand to improve their marketing strategy based on customer review analysis.',
      mediaType: "image",
      media: '/skincare project.jpg',
      link: 'https://www.shangyexinzhi.com/article/4677117.html'
    },
    {
      title: 'User Engagement in Online Communities during COVID-19 Analysis',
      date: 'December 2021',
      description: 'Research project on user engagement in online communities during COVID-19 pandemic. ' 
      + 'Focuses on sentiment analysis of news titles and the comments following each video.' 
      + 'We find that longer titles and sad emotions can obtain more likes on the comments of COVID-19 related news. '
      + 'During the pandemic, people tend to show their support when they find others are quite sad. ' 
      + 'We also expect to see correlations between some positive appraisals and user engagement.',
      mediaType: 'image',
      media: '/Conference Paper.jpg',
      link: 'https://aisel.aisnet.org/iceb2021/70/'
    },
  ];

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Problem Solving Projects
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        A collection of projects showcasing my analytical and problem-solving abilities across different domains.
      </Typography>

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
                variant="body2" 
                color="text.secondary"
                sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {project.description}
              </Typography>
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

export default ProblemSolvingProjects; 