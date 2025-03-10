"use client"
import { m } from 'framer-motion';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  useMediaQuery,
} from '@mui/material';
import Iconify from '@/app/components/Iconify';
import { varFade } from '@/app/components/animate/variants/fade';
import MotionContainer from '@/app/components/animate/MotionContainer';

// Styled components
const RootStyle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
//   background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)',
  position: 'relative',
  overflow: 'hidden',
  // Add this for smooth transition from previous section
  
}));

const ContentStyle = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
}));

const FeatureRowStyle = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(5),
  },
}));

const IllustrationContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
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

export default function HomeFuture() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const features = [
    {
      icon: 'mdi:robot',
      color: '#2196F3',
      title: 'Smart Learning',
      subtitle: 'Personalized Learning Paths with AI',
      description: 'Tailored learning experiences based on your child\'s strengths and weaknesses. Smart recommendations ensure progress at their own pace.',
      image: '/assets/learning.jpeg',
    },
    {
      icon: 'mdi:trophy-variant',
      color: '#FFC107',
      title: 'Gamified Learning Experience',
      subtitle: 'Make Learning Fun with XP & Leaderboards!',
      description: 'Kids earn XP, badges & climb leaderboards as they complete challenges. Motivation through friendly competition & achievements.',
      image: '/assets/hero2.jpeg',
    },
    {
      icon: 'mdi:shield-lock',
      color: '#4CAF50',
      title: 'Safe & Parent-Controlled Environment',
      subtitle: 'Your Child\'s Safety, Your Full Control',
      description: '100% parent-monitored platform with no direct messaging. A secure environment for kids to focus on learning.',
      image: '/assets/hero1.jpeg',
    },
    {
      icon: 'mdi:account-group',
      color: '#FF5722',
      title: 'Engaging Learning Activities',
      subtitle: 'Host & Join Learning Challenges with Friends!',
      description: 'Fun and interactive learning experiences designed to keep kids motivated. Whether practicing new skills or collaborating with others, every activity helps them grow.',
      image: '/assets/learning.jpeg',
    },
  ];

  return (
    <MotionContainer>
      <RootStyle>
        {/* Decorative elements */}
        <FloatingElement 
          sx={{ 
            width: 120, 
            height: 120, 
            top: '10%', 
            left: '5%',
            animationDelay: '0s',
            background: 'rgba(33, 150, 243, 0.1)'
          }} 
        />
        <FloatingElement 
          sx={{ 
            width: 80, 
            height: 80, 
            bottom: '15%', 
            right: '10%',
            animationDelay: '2s',
            background: 'rgba(255, 193, 7, 0.08)'
          }} 
        />
        <FloatingElement 
          sx={{ 
            width: 60, 
            height: 60, 
            top: '40%', 
            right: '20%',
            animationDelay: '4s',
            background: 'rgba(76, 175, 80, 0.1)'
          }} 
        />
        
        <Container>
          <ContentStyle>
            {/* Section Title */}
            <m.div variants={varFade().inUp}>
              <Box sx={{ mb: 8, textAlign: 'center' }}>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 2,
                    color: '#333',
                    fontWeight: 700,
                  }}
                >
                  Smart, Engaging & Fun Learning
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.secondary',
                    maxWidth: 800,
                    mx: 'auto',
                    fontWeight: 'normal'
                  }}
                >
                 A new way to keep your child engaged with exciting challenges, progress tracking, and interactive learning all in a safe, parent-controlled space.
                </Typography>
              </Box>
            </m.div>


            {/* Feature Grid - First Two Features Side by Side */}
            <m.div variants={varFade().inUp}>
              <Grid container spacing={4} sx={{ mb: { xs: 4, md: 10 } }}>
                {features.slice(0, 2).map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box
                      sx={{
                        p: 3,
                        height: '100%',
                        borderRadius: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          // boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                        },
                        bgcolor: 'background.paper',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: `${feature.color}15`,
                            mr: 2,
                          }}
                        >
                          <Iconify
                            icon={feature.icon}
                            width={24}
                            height={24}
                            sx={{ color: feature.color }}
                          />
                        </Box>
                        <Typography variant="h5" sx={{ color: feature.color, fontWeight: 600 }}>
                          {feature.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </m.div>

            {/* Add Third Feature in a Single Column */}
            <m.div variants={varFade().inUp}>
              <Grid container spacing={4} sx={{ mb: { xs: 4, md: 10 } }}>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      p: 3,
                      height: '100%',
                      borderRadius: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                      bgcolor: 'background.paper',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `${features[2].color}15`,
                          mr: 2,
                        }}
                      >
                        <Iconify
                          icon={features[2].icon}
                          width={24}
                          height={24}
                          sx={{ color: features[2].color }}
                        />
                      </Box>
                      <Typography variant="h5" sx={{ color: features[2].color, fontWeight: 600 }}>
                        {features[2].title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                      {features[2].description}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </m.div>

            {/* Full-width Feature with Image Overlay */}
            <m.div variants={varFade().inUp}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 400, md: 500 },
                  borderRadius: 4,
                  overflow: 'hidden',
                  mb: 10,
                  boxShadow: '0 16px 32px rgba(0,0,0,0.1)',
                }}
              >
                <Box
                  component="img"
                  src={features[2].image}
                  alt={features[3].title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Container>
                  <m.div variants={varFade().inUp}>
                    <Box sx={{ maxWidth: { xs: '100%', md: '50%' }, p: { xs: 3, md: 0 } }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: `${features[2].color}20`,
                            mr: 2,
                          }}
                        >
                          <Iconify
                            icon={features[3].icon}
                            width={28}
                            height={28}
                            sx={{ color: 'white' }}
                          />
                        </Box>
                        <Typography variant="h4" sx={{ color: 'white', fontWeight: 600 }}>
                          {features[3].title}
                        </Typography>
                      </Box>
                      <Typography variant="h6" sx={{ color: 'white', mb: 2, fontWeight: 300 }}>
                        {features[3].description}
                      </Typography>
                    </Box>
                    </m.div>
                  </Container>
                </Box>
              </Box>
            </m.div>

          </ContentStyle>
        </Container>
      </RootStyle>
    </MotionContainer>
  );
}