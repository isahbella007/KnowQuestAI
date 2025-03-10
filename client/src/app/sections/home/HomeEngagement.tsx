"use client"
import { useState } from 'react';
import { m } from 'framer-motion';
// @mui
import { styled, useTheme, alpha } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Stack,
  InputAdornment,
  FormHelperText,
  useMediaQuery,
  Paper,
} from '@mui/material';
import Iconify from '@/app/components/Iconify';
import { varFade } from '@/app/components/animate/variants/fade';
import MotionContainer from '@/app/components/animate/MotionContainer';

// Styled components
const RootStyle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  position: 'relative',
  overflow: 'hidden',
  // Create a gradient that transitions from the previous section
//   background: 'linear-gradient(135deg, #BBDEFB 0%, #E1F5FE 100%)',
  // Add smooth transition from previous section
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '10%',
    background: 'linear-gradient(to top, transparent, #FFFDE7 )',
    zIndex: 1,
  }
}));

const ContentStyle = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
}));

const FormContainerStyle = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: 16,
  boxShadow: '0 8px 32px 0 rgba(0,0,0,0.08)',
  background: alpha(theme.palette.background.paper, 0.9),
  backdropFilter: 'blur(8px)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px 0 rgba(0,0,0,0.12)',
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
  },
}));

const FloatingElement = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  animation: 'float 8s infinite ease-in-out',
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
    '50%': { transform: 'translateY(-20px) rotate(5deg)' },
  },
}));

const IllustrationContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
}));

export default function HomeEngagementCTA() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  
  // Form state
  const [formData, setFormData] = useState({
    feedback: '',
    feedbackOption: 'select', // New field for dropdown selection
    email: '',
    phone: '',
  });
  
  const [errors, setErrors] = useState({
    feedbackOption: false,
    email: false,
    phone: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFormValid = () => {
    // At least one field must be filled
    // if (!formData.feedback.trim() && !formData.email && !formData.phone) {
    //   return false;
    // }

    if(formData.feedbackOption === 'select' && !formData.email && !formData.phone){ 
      return false
    }
    
    // If "other" is selected, feedback must be provided
    if (formData.feedbackOption === 'other' && !formData.feedback.trim()) {
      return false;
    }

    // If email is provided, it must be valid
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      return false;
    }
    
    // If phone is provided, it must be 11 digits
    if (formData.phone && !/^\d{11}$/.test(formData.phone)) {
      return false;
    }
    // if(formData.feedbackOption !== 'select' && !formData.email && !formData.phone){ 
    //   return false
    // }
    
    return true;
  };
  
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Validate in real-time
    if (name === 'feedbackOption') {
      setErrors(prev => ({
        ...prev,
        feedbackOption: value === 'select'
      }));
    }
    else if (name === 'email') {
      setErrors(prev => ({
        ...prev,
        email: value ? !/^\S+@\S+\.\S+$/.test(value) : false
      }));
    } else if (name === 'phone') {
      setErrors(prev => ({
        ...prev,
        phone: value ? !/^\d{11}$/.test(value) : false
      }));
    }
  };
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors = {
      // feedback: false,
      feedbackOption: false,
      email: formData.email ? !/\S+@\S+\.\S+/.test(formData.email) : false,
      phone: formData.phone ? !/^\d{11}$/.test(formData.phone) : false,
    };
    
    setErrors(newErrors);
    
    // If no errors, submit form
    if (isFormValid()) {
      // Here you would typically send the data to your backend
      const formDataToSend = new FormData()
      // Send the appropriate feedback based on selection
      if (formData.feedbackOption === 'other') {
        formDataToSend.append('entry.270363763', formData.feedback);
      } else {
        formDataToSend.append('entry.270363763', formData.feedbackOption);
      }
      formDataToSend.append('entry.1611001331', formData.email);    // Replace with your field ID
      formDataToSend.append('entry.477518184', formData.phone);    // Replace with your field ID
      
      await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSetTbtRcUlJPdsgwWy97MjbvfhV2xE8ySpblfItvc6KAOh_Zw/formResponse', { 
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors'
      })
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setFormData({
          feedback: '',
          feedbackOption: 'select',
          email: '',
          phone: '',
        });
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <MotionContainer>
      <RootStyle id="engagement-section">
        {/* Decorative elements */}
        <FloatingElement 
          sx={{ 
            width: 100, 
            height: 100, 
            top: '15%', 
            left: '8%',
            animationDelay: '0s',
            background: 'rgba(33, 150, 243, 0.1)'
          }} 
        />
        <FloatingElement 
          sx={{ 
            width: 70, 
            height: 70, 
            bottom: '20%', 
            right: '12%',
            animationDelay: '2s',
            background: 'rgba(255, 193, 7, 0.08)'
          }} 
        />
        <FloatingElement 
          sx={{ 
            width: 50, 
            height: 50, 
            top: '30%', 
            right: '25%',
            animationDelay: '4s',
            background: 'rgba(76, 175, 80, 0.1)'
          }} 
        />
        
        <Container>
          <ContentStyle>
            <Grid container spacing={5} alignItems="center">
              {/* Left side - Illustration for larger screens */}
              {isMdUp && (
                <Grid item xs={12} md={5}>
                  <m.div variants={varFade().inLeft}>
                    <IllustrationContainer>
                      <Box
                        component="img"
                        src="/assets/feedback-illustration.svg"
                        alt="Feedback"
                        sx={{
                          width: '100%',
                          maxWidth: 400,
                          filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.15))',
                          position: 'relative',
                          zIndex: 2,
                        }}
                      />
                      
                      {/* Floating elements around the illustration */}
                      <Box
                        sx={{
                          position: 'absolute',
                          width: 100,
                          height: 100,
                          top: '10%',
                          left: '15%',
                          borderRadius: 2,
                          background: 'rgba(33, 150, 243, 0.1)',
                          animation: 'float 6s infinite ease-in-out',
                          animationDelay: '1s',
                        }}
                      />
                      <Box
                        component="img"
                        src="/assets/icons/message.svg"
                        sx={{
                          position: 'absolute',
                          width: 40,
                          height: 40,
                          bottom: '20%',
                          right: '10%',
                          animation: 'float 7s infinite ease-in-out',
                          animationDelay: '0.5s',
                          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                        }}
                      />
                    </IllustrationContainer>
                  </m.div>
                </Grid>
              )}
              
              {/* Right side - Form */}
              <Grid item xs={12} md={7}>
                <m.div variants={varFade().inRight}>
                  <Stack spacing={4}>
                    {/* Section Title */}
                    <Box>
                      <Typography
                        variant="h2"
                        sx={{
                          mb: 2,
                          color: '#333',
                          fontWeight: 700,
                          
                          textAlign: { xs: 'center', md: 'left' },
                        }}
                      >
                        What would make learning exciting for your child?
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'text.secondary',
                          fontWeight: 'normal',
                          textAlign: { xs: 'center', md: 'left' },
                        }}
                      >
                        Share what features you'd love to see in our platform and stay updated on our progress.
                      </Typography>
                    </Box>
                    
                    {/* Form */}
                    <FormContainerStyle>
                      {isSubmitted ? (
                        <m.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Box sx={{ textAlign: 'center', py: 4 }}>
                            <Iconify
                              icon="mdi:check-circle"
                              width={64}
                              height={64}
                              sx={{ color: 'success.main', mb: 2 }}
                            />
                            <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                              Thank You!
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                              Your feedback has been submitted. We'll keep you updated on our progress!
                            </Typography>
                          </Box>
                        </m.div>
                      ) : (
                        <form onSubmit={handleSubmit}>
                          <Stack spacing={3}>
                          <Box>
                              <Typography variant="h6" sx={{ mb: 1 }}>
                                What would you like to see in the platform?
                              </Typography>
                              <TextField
                                select
                                fullWidth
                                name="feedbackOption"
                                value={formData.feedbackOption}
                                onChange={handleChange}
                                error={errors.feedbackOption}
                                helperText={errors.feedbackOption && "Please select an option"}
                                SelectProps={{
                                  native: true,
                                }}
                                sx={{
                                  '& .MuiOutlinedInput-root': {
                                    borderRadius: 2,
                                  }
                                }}
                              >
                                <option value="select">Select an option</option>
                                <option value="More learning topics & activities tailored for students 📖🎓">
                                  More learning topics & activities tailored for students 📖🎓
                                </option>
                                <option value="A way for parents to stay updated on their child’s learning progress 📊👨‍👩‍👧">
                                  A way for parents to stay updated on their child’s learning progress 📊👨‍👩‍👧
                                </option>
                                <option value="Options for learning with minimal internet usage 📶🚫">
                                  Options for learning with minimal internet usage 📶🚫
                                </option>
                                <option value="other">Other (please specify)</option>
                              </TextField>
                            </Box>
                            
                            {/* Show text field only if "Other" is selected */}
                            {formData.feedbackOption === 'other' && (
                              <Box>
                                <Typography variant="body2" sx={{ mb: 1 }}>
                                  Please tell us what you'd like to see:
                                </Typography>
                                <TextField
                                  fullWidth
                                  multiline
                                  rows={3}
                                  name="feedback"
                                  value={formData.feedback}
                                  onChange={handleChange}
                                  placeholder="Share your ideas and feature requests..."
                                  error={formData.feedbackOption === 'other' && !formData.feedback.trim()}
                                  helperText={formData.feedbackOption === 'other' && !formData.feedback.trim() && "Please share your thoughts"}
                                  sx={{
                                    '& .MuiOutlinedInput-root': {
                                      borderRadius: 2,
                                    }
                                  }}
                                />
                              </Box>
                            )}

                            <Box>
                              <Typography variant="h6" sx={{ mb: 1 }}>
                                Email (optional)
                              </Typography>
                              <TextField
                                fullWidth
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                error={errors.email}
                                helperText={errors.email && "Please enter a valid email"}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <Iconify icon="mdi:email-outline" width={24} height={24} />
                                    </InputAdornment>
                                  ),
                                }}
                                sx={{
                                  '& .MuiOutlinedInput-root': {
                                    borderRadius: 2,
                                  }
                                }}
                              />
                            </Box>
                            
                            <Box>
                              <Typography variant="h6" sx={{ mb: 1 }}>
                                Phone Number (optional)
                              </Typography>
                              <TextField
                                fullWidth
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="090 xxx xxx xxxx"
                                error={errors.phone}
                                helperText={errors.phone ? "Please enter a valid 11-digit phone number" : "We'll never share your phone number"}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <Iconify icon="mdi:phone-outline" width={24} height={24} />
                                    </InputAdornment>
                                  ),
                                  inputProps: { 
                                    maxLength: 11, // Limit input to 11 characters
                                    pattern: "[0-9]*" // Only allow numbers
                                  }
                                }}
                                sx={{
                                  '& .MuiOutlinedInput-root': {
                                    borderRadius: 2,
                                  }
                                }}
                              />
                              {/* <FormHelperText >We'll never share your phone number</FormHelperText> */}
                            </Box>
                            
                            <Button
                              type="submit"
                              size="large"
                              variant="contained"
                              disabled={!isFormValid()} // Disable button if form is not valid
                              sx={{
                                mt: 2,
                                py: 1.5,
                                borderRadius: '12px',
                                backgroundColor: '#FFC107',
                                color: '#333333',
                                fontWeight: 'bold',
                                boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.1)',
                                '&:hover': {
                                  backgroundColor: '#FFB000',
                                  transform: 'translateY(-2px)',
                                  boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.15)',
                                },
                                transition: 'all 0.2s',
                              }}
                              startIcon={<Iconify icon="mdi:send" width={20} height={20} />}
                            >
                              Submit & Stay Updated
                            </Button>
                          </Stack>
                        </form>
                      )}
                    </FormContainerStyle>
                  </Stack>
                </m.div>
              </Grid>
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
    </MotionContainer>
  );
}