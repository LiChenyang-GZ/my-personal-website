import { 
  Container, 
  Typography, 
  Box, 
  Paper,
  Divider
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  const educationData = [
    {
      year: '07/2024 - 07/2026',
      school: 'The University of Sydney',
      degree: 'Master of Computer Science',
      description: 'Focus on Software Engineering and Large Language Model Development',
      achievements: [
        'Core Courses: Web Application Development, Cloud Computing, Data Structures and Algorithms'
      ]
    },
    {
        year: '09/2018 - 06/2022',
        school: 'Hong Kong Baptist University',
        degree: 'Bachelor of Business Administration (Honours) in e-Business Management and Information Systems',
        description: 'Focus on business plus computer science. ',
        achievements: [
          'GPA: 3.16/4.0 (Second Class Division I)',
          'Core Courses: Big Data Analysis and Application, Database Management, Design and Analysis of Algorithms, Strategic Management',
          'Awards: Second Class Award in Scholarship for the 2021-2022 academic year, 2022 MCM Honorable Mention',
        ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Education
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          My Academic Journey 📚
        </Typography>
        <Divider sx={{ my: 3 }} />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {educationData.map((edu, index) => (
          <Paper 
            key={index} 
            elevation={3} 
            sx={{ 
              p: 3,
              position: 'relative'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  mr: 2
                }}
              >
                <SchoolIcon />
              </Box>
              <Typography variant="h6" color="primary">
                {edu.year}
              </Typography>
            </Box>
            <Typography variant="h5" gutterBottom>
              {edu.school}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {edu.degree}
            </Typography>
            <Typography paragraph>
              {edu.description}
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              {edu.achievements.map((achievement, idx) => (
                <Typography component="li" key={idx} sx={{ mb: 1 }}>
                  {achievement}
                </Typography>
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default Education; 