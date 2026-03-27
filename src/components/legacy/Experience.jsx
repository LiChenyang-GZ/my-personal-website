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
        'Monitored the wastewater discharge of chemical enterprises, developed and deployed machine learning models (e.g., XGBoost) ' 
        + 'to detect excessive discharge and potential leakages, ensuring compliance with discharge standards and data integrity.',
        'Built an early warning system for river water quality. Implemented Isolated Forest algorithm to identify abnormal mutation points, ' 
        + 'used LSTM for water quality prediction, and established rule-based alerts for pollution detection. Resulting in a 25% improvement in inspection efficiency.',
        'Monitored the pollution index of rivers in the region and authored monthly reports analyzing regional river water quality.',
        'Developed and deployed an AI-powered onboarding chatbot based on LangChain and ChatGLM3 to provide onboarding ' 
        + 'guidance to new employees. Used Gradio framework to complete front-end pages.',
        'Designed and implemented a behaviour detection system usingYOLOv5 to monitor, ensure enterprises maintain equipment on time.',
        'Designed and implemented a water pollution detection system using YOLOv5 to monitor, to ensure water pollution occurs in rivers.'
      ]
    },
    {
      year: '2022.01 – 2022.06',
      company: 'Shanghai MarcPoint Technology Co., Ltd.',
      position: 'Data Analysis Intern',
      responsibilities: [
        'Identified and analyzed online behaviors of "haters" on social media, ' 
        + 'detect negative engagement patterns and establish identification rules for malicious accounts.',
        'Assessed social media reputation of skincare brands by calculating key metrics such as audience size, ' 
        + 'loyalty, and sentiment. Provided actionable insights to optimize marketing strategies and improve brand reputation.'
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