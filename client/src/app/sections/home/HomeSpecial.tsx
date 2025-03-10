"use client"
import { m } from 'framer-motion';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Stack,
  useMediaQuery,
} from '@mui/material';
import Iconify from '@/app/components/Iconify';
import { varFade } from '@/app/components/animate/variants/fade';
import MotionContainer from '@/app/components/animate/MotionContainer';

// Styled components
const RootStyle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: 'linear-gradient(135deg, #FFF9C4 0%, #FFFDE7 100%)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '10%',
    background: 'linear-gradient(to top, transparent, #FFFFFF )',
    zIndex: 1,
  }
}));

const ContentStyle = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
}));

const FeatureCardStyle = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(4),
  borderRadius: 16,
  boxShadow: '0 8px 24px 0 rgba(0,0,0,0.05)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(8px)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 32px 0 rgba(0,0,0,0.1)',
  },
}));

const IllustrationContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(4),
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

export default function HomeSpecial() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const features = [
    {
      icon: 'mdi:book-open-page-variant',
      color: '#4CAF50',
      title: 'Engaging & Interactive Learning',
      description: 'Kids participate in exciting learning experiences that encourage curiosity, collaboration, and progress.',
    },
    // {
    //   icon: 'mdi:trophy-award',
    //   color: '#FFC107',
    //   title: 'Earn XP & Unlock Badges',
    //   description: 'Climb the leaderboard as children earn experience points and unlock achievement badges.',
    // },
    {
      icon: 'mdi:shield-check',
      color: '#6A0DAD',
      title: 'Safe & Parent-Controlled',
      description: 'A safe environment with complete parental oversight and no direct messaging between children.',
    },
    {
      icon: 'mdi:book-education',
      color: '#FF5722',
      title: 'Nigerian & WAEC Curriculum',
      description: 'Questions aligned with Nigerian educational standards and WAEC examination preparation.',
    },
  ];

  return (
    <MotionContainer>
      <RootStyle>
        {/* Decorative elements */}
        <FloatingElement 
          sx={{ 
            width: 100, 
            height: 100, 
            top: '15%', 
            left: '5%',
            animationDelay: '0s',
            background: 'rgba(255, 193, 7, 0.1)'
          }} 
        />
        <FloatingElement 
          sx={{ 
            width: 60, 
            height: 60, 
            bottom: '10%', 
            right: '8%',
            animationDelay: '2s',
            background: 'rgba(106, 13, 173, 0.08)'
          }} 
        />
        <FloatingElement 
          sx={{ 
            width: 80, 
            height: 80, 
            top: '60%', 
            left: '15%',
            animationDelay: '4s',
            background: 'rgba(76, 175, 80, 0.1)'
          }} 
        />
        
        <Container>
          <ContentStyle>
            {/* Section Title */}
            <m.div variants={varFade().inUp}>
              <Box sx={{ mb: 6, textAlign: 'center' }}>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 2,
                    color: '#333',
                    fontWeight: 700,
                    fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                  }}
                >
                  Why Parents & Kids love our platform
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.secondary',
                    maxWidth: 700,
                    fontWeight: 'normal',
                    mx: 'auto',
                    
                  }}
                >
                  Discover why parents trust our platform for their children's educational journey
                </Typography>
              </Box>
            </m.div>

            <Grid container spacing={4}>
              {/* Features */}
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <m.div variants={varFade().inUp}>
                        <FeatureCardStyle>
                          <Box
                            sx={{
                              width: 64,
                              height: 64,
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mb: 2,
                              background: `${feature.color}15`,
                            }}
                          >
                            <Iconify
                              icon={feature.icon}
                              width={32}
                              height={32}
                              sx={{ color: feature.color }}
                            />
                          </Box>
                          <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                            {feature.title}
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: 'normal', color: 'text.secondary' }}>
                            {feature.description}
                          </Typography>
                        </FeatureCardStyle>
                      </m.div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Illustration
              <Grid item xs={12} md={5}>
                <m.div variants={varFade().inRight}>
                  <IllustrationContainer>
                    <Box
                      component="img"
                      src="/assets/learning.jpeg"
                      alt="Learning Adventure"
                      sx={{
                        width: '100%',
                        maxWidth: 400,
                        filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.1))',
                        position: 'relative',
                        zIndex: 2,
                      }}
                    />
                    
                    Floating elements around the illustration
                    <Box
                      sx={{
                        position: 'absolute',
                        width: 60,
                        height: 60,
                        top: '10%',
                        right: '15%',
                        borderRadius: 2,
                        bgcolor: '#FFC10730',
                        animation: 'float 6s infinite ease-in-out',
                        animationDelay: '1s',
                        display: { xs: 'none', md: 'block' },
                      }}
                    />
                    <Box
                      component="img"
                      src="/assets/icons/trophy.svg"
                      sx={{
                        position: 'absolute',
                        width: 40,
                        height: 40,
                        bottom: '20%',
                        left: '10%',
                        animation: 'float 7s infinite ease-in-out',
                        animationDelay: '0.5s',
                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                        display: { xs: 'none', md: 'block' },
                      }}
                    />
                    <Box
                      component="img"
                      src="/assets/icons/book.svg"
                      sx={{
                        position: 'absolute',
                        width: 50,
                        height: 50,
                        top: '30%',
                        left: '5%',
                        animation: 'float 8s infinite ease-in-out',
                        animationDelay: '2s',
                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                        display: { xs: 'none', md: 'block' },
                      }}
                    />
                  </IllustrationContainer>
                </m.div>
              </Grid> */}
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
    </MotionContainer>
  );
}