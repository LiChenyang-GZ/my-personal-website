import { 
  Typography, 
  Box, 
  Paper,
  Chip,
  Divider
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FlightIcon from '@mui/icons-material/Flight';

const About = () => {
  console.log('About component rendered');
  
  const skills = [
    'JavaScript', 'React', 'Node.js', 'AWS', 'Python',
    'HTML/CSS', 'Git', 'SQL', 'Java', 'Stata', 'Tableau',
    'Machine Learning', 'Neural Networds', 'Computer vision',
    'Data Analysis', 
  ];

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        About Me
      </Typography>
      <Divider sx={{ my: 3 }} />

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="body1" paragraph>
          Hi, I'm Christy, a passionate software developer with a strong interest in web development, LLM 
          and Data Science. I'm currently pursuing my Master's degree in Computer Science at the University of Sydney.
        </Typography>
        <Typography variant="body1" paragraph>
          In my spare time, I love learn more about the development of LLM and its applications, 
          writing technical blogs on CSDN (the most popular technical platform in China).
          In addition to brain exercise, I play basketball also work as an all rounder in a kids cafe for physical exercise.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Some History
        </Typography>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              2018
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">University Studies</Typography>
              <Typography>Started my undergraduate study in E-business and Information System in the University.</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              2019
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <MusicNoteIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">Music Journey</Typography>
              <Typography>Joined a band as a guitarist and played in university concerts.</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              2020
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <SportsBasketballIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">Basketball Achievement</Typography>
              <Typography>As an important women's basketball player in my major, our team won the third place in the university's basketball competition.</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <CodeIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">Computer Science Journey</Typography>
              <Typography>Minor in Computer Science, studied programming skills, focused on combining business and technology.</Typography>
              <Typography>Published my first conference paper on user engagement in online communities during COVID-19.</Typography>
              <Typography>Participated in Jane Street Market Prediction on Kaggle, ranked 545/4245.</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">First Internship</Typography>
              <Typography>Joined a marketing-AI company as a data analyst intern. Won H award in Mathematical Contest In Modeling.</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">Professional Experience</Typography>
              <Typography>Worked in an Environmental technology company as an algorithm engineer, built prediction models, visual models, and developed LLM applications.</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <FlightIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">New Adventures</Typography>
              <Typography>Left my job and traveled around the world. Started graduate courses at the University of Sydney.</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              2025
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">Future Ahead</Typography>
              <Typography>Something excited will happen!</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Paper>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Technical Skills
      </Typography>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {skills.map((skill) => (
            <Chip 
              key={skill}
              icon={<CodeIcon />}
              label={skill}
              variant="outlined"
              color="primary"
            />
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default About; 