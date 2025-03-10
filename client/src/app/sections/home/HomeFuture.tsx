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
      title: 'AI-Powered Smart Learning',
      subtitle: 'Personalized Learning Paths with AI',
      description: 'AI tailors learning experiences based on your child\'s strengths and weaknesses. Smart recommendations ensure progress at their own pace.',
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
      title: 'Structured Challenges & Collaboration',
      subtitle: 'Host & Join Learning Challenges with Friends!',
      description: 'Kids can create and participate in fun challenges. Encourages collaboration and interactive learning.',
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
                  Designed to boost your child's learning experience with AI, gamification, and structured challenges.
                </Typography>
              </Box>
            </m.div>

            {/* Feature rows with alternating layout */}
            {features.map((feature, index) => (
              <m.div key={index} variants={varFade().inUp}>
                <FeatureRowStyle 
                  container 
                  spacing={4} 
                  alignItems="center"
                  direction={index % 2 === 0 ? 'row' : 'row-reverse'}
                >
                  {/* Text Content */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={3}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            flexShrink: 0,
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: `${feature.color}15`,
                            mr: 2,
                          }}
                        >
                          <Iconify
                            icon={feature.icon}
                            width={28}
                            height={28}
                            sx={{ color: feature.color }}
                          />
                        </Box>
                        <Typography variant="h4" sx={{
                             color: feature.color, 
                             fontWeight: 600, 
                             
                             }}>
                          {feature.subtitle}
                        </Typography>
                      </Box>
                      
                      {/* <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        {feature.title}
                      </Typography> */}
                      
                      <Typography variant="h5" sx={{ 
                        color: 'text.secondary',
                         fontWeight: 300
                        }}>
                        {feature.description}
                      </Typography>
                    </Stack>
                  </Grid>
                  
                  {/* Illustration */}
                  <Grid item xs={12} md={6}>
                    <IllustrationContainer>
                      <Box
                        component="img"
                        src={feature.image}
                        alt={feature.title}
                        sx={{
                          width: '100%',
                          maxWidth: 450,
                          height: 'auto',
                          filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.15))',
                          borderRadius: '16px',
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.03)',
                          },
                        }}
                      />
                      
                      {/* Decorative elements specific to each feature */}
                      {index === 0 && (
                        <Box
                          sx={{
                            position: 'absolute',
                            width: 80,
                            height: 80,
                            top: '10%',
                            right: index % 2 === 0 ? '10%' : 'auto',
                            left: index % 2 === 0 ? 'auto' : '10%',
                            borderRadius: 2,
                            background: `${feature.color}15`,
                            animation: 'float 6s infinite ease-in-out',
                            animationDelay: '1s',
                            display: { xs: 'none', md: 'block' },
                          }}
                        />
                      )}
                      
                    </IllustrationContainer>
                  </Grid>
                </FeatureRowStyle>
              </m.div>
            ))}
          </ContentStyle>
        </Container>
      </RootStyle>
    </MotionContainer>
  );
}