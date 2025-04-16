import { useState, useRef } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper,
  Divider,
  Grid,
  TextField,
  Button,
  IconButton,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.sendForm(
      'service_nz04ena',
      'template_c6juujt',
      form.current,
      'JA5RlaOXygWBSKYJI'
    )
      .then((result) => {
        setSnackbarMessage('Your message has been sent successfully!');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        setSnackbarMessage('Failed to send message. Please try again later.');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      content: 'lichenyang_christy@outlook.com',
      link: 'mailto:lichenyang_christy@outlook.com'
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      content: '+61 456198243',
      link: 'tel:+61456198243'
    },
    {
      icon: <LocationOnIcon />,
      title: 'Location',
      content: 'Sydney, Australia',
      link: 'https://maps.google.com/?q=Sydney,Australia'
    }
  ];

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/chenyang-li-8992a3320/'
    },
    {
      icon: <GitHubIcon />,
      title: 'GitHub',
      link: 'https://github.com/LiChenyang-GZ'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Get in Touch 📬
        </Typography>
        <Divider sx={{ my: 3 }} />
      </Box>

      <Grid container spacing={4} sx={{ alignItems: 'stretch', flexGrow: 1 }}>
        {/* 左侧联系信息（固定宽度，例如 md={4}） */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{
            p: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Box sx={{ mt: 3 }}>
              {contactInfo.map((info, index) => (
                <Box
                  key={index}
                  component="a"
                  href={info.link}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3,
                    color: 'inherit',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main'
                    }
                  }}
                >
                  <Box sx={{ mr: 2, color: 'primary.main' }}>
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      {info.title}
                    </Typography>
                    <Typography variant="body1">
                      {info.content}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              Social Media
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 0.1)'
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* 右侧表单（占据剩余宽度，使用 flexGrow: 1） */}
        <Grid item xs={12} md sx={{ flexGrow: 1 }}>
          <Paper elevation={3} sx={{
            p: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Typography variant="h6" gutterBottom>
              Send Me a Message
            </Typography>
            <Box
              component="form"
              ref={form}
              onSubmit={handleSubmit}
              sx={{
                mt: 3,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                width: '100%'
              }}
            >
              <TextField
                required
                fullWidth
                label="Your Name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
              <TextField
                required
                fullWidth
                label="Your Email"
                name="user_email"
                type="email"
                value={formData.user_email}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
              <TextField
                required
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
              <TextField
                required
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={6}
                value={formData.message}
                onChange={handleChange}
                sx={{ mb: 3 }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
                sx={{
                  mt: 'auto',
                  alignSelf: 'flex-start',
                  width: { xs: '100%', md: 'auto' }
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;