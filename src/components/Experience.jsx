import { 
  Container, 
  Typography, 
  Box, 
  Paper,
  Divider
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
  const experienceData = [
    {
      year: '2022.09 – 2024.04',
      company: 'Guangdong Create Environmental Technology Co., Ltd',
      position: 'Algorithm Engineer',
      responsibilities: [
        'Monitored the wastewater discharge of chemical enterprises, establish various models to determine whether the enterprises have over-discharge and leakage; whether the discharged water quality does not meet the standards; and whether the water quality data have been modified.',
        'Monitored the pollution index of rivers in the region, and write monthly reports on water quality analysis of rivers.',
        'Use the visual model to monitor whether enterprises maintain equipment on time; whether water pollution occurs in rivers.',
        'Built and deployed a company on-boarding AI model based on LangChain and ChatGLM3 to provide on-boarding guidance to new employees.'
      ]
    },
    {
      year: '2022.01 – 2022.06',
      company: 'Shanghai MarcPoint Technology Co., Ltd.',
      position: 'Data Analysis Intern',
      responsibilities: [
        'Understood the behaviors of "haters" on social media and establish rules to identify haters\'s accounts and posts.',
        'Analyzed the reputation of skincare brands on social media, calculated metrics such as size, loyalty, and reputation to derive brand intelligence insights. Provided monthly reports on the social media heat for the skincare products.'
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Work Experience
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Professional Journey 💼
        </Typography>
        <Divider sx={{ my: 3 }} />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {experienceData.map((exp, index) => (
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
                <WorkIcon />
              </Box>
              <Typography variant="h6" color="primary">
                {exp.year}
              </Typography>
            </Box>
            <Typography variant="h5" gutterBottom>
              {exp.company}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {exp.position}
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              {exp.responsibilities.map((responsibility, idx) => (
                <Typography component="li" key={idx} sx={{ mb: 1 }}>
                  {responsibility}
                </Typography>
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default Experience; 