"use client"
import { m } from 'framer-motion';
import NextLink from 'next/link';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import {
  Button,
  Box,
  Container,
  Typography,
  Stack,
  StackProps,
  Grid,
  useMediaQuery,
} from '@mui/material';
import useToggle from '@/app/hooks/useToggle';
import MotionContainer from '@/app/components/animate/MotionContainer';
import { varFade } from '@/app/components/animate/variants/fade';
import useFeatureFlag from '@/app/hooks/useFeatureFlag';
import { PATH_AUTH } from '@/app/routes/path';
import Iconify from '@/app/components/Iconify';
import { useEffect, useState } from 'react';
import JoinWaitListDialog from '../waitlist/JoinWaitListDialog';

// Styled components with improved layout
const RootStyle = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '100vh',
  [theme.breakpoints.down('md')]: {
    height: '90vh',
  },
}));

const HeroBackgroundStyle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(135deg, #6A0DAD 0%, #4A90E2 100%)',
  zIndex: -2,
}));

const HeroImageContainer = styled(m.div)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '55%',
  height: '100%',
  zIndex: -1,
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    // opacity: 0.3,
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to right, rgba(106, 13, 173, 0.9) 0%, rgba(74, 144, 226, 0.7) 100%)',
      zIndex: 1
    }
  },
}));

const HeroImgStyle = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  transition: 'opacity 1s ease-in-out',
  [theme.breakpoints.down('md')]: {
    filter: 'brightness(0.7)',
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  zIndex: 2,
  // backgroundColor: 'red',
  left: '0', // Added padding to shift content left
  [theme.breakpoints.down('md')]: {
    paddingLeft: 0, // Reset on mobile
    // backgroundColor: 'green'
  },
  [theme.breakpoints.down('sm')]: { 
    // backgroundColor: 'orange', 
    alignItems: 'center', 
    // paddingTop: theme.spacing(10)
  }
}));

const ContentStyle = styled(Stack)(({ theme }) => ({
  maxWidth: 600,
  height: 'auto',
  padding: theme.spacing(3),
  left: '0',
  right: '0',
  
  // backgroundColor: 'red',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    // textAlign: 'center',
    padding: theme.spacing(3, 2),
    // backgroundColor: 'purple'
  },
  [theme.breakpoints.down('sm')]: { 
    // backgroundColor: 'pink', 
    width: '100%', 
    padding: theme.spacing(2, 2),
    textAlign: 'center', // Center text on mobile
  }
}));


const FloatingElements = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: 0,
}));

const FloatingElement = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.1)',
  animation: 'float 8s infinite ease-in-out',
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
    '50%': { transform: 'translateY(-20px) rotate(5deg)' },
  },
}));

const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(4),
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: theme.palette.common.white,
  animation: 'bounce 2s infinite',
  '@keyframes bounce': {
    '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
    '50%': { transform: 'translateX(-50%) translateY(-10px)' },
  },
}));

// Slideshow images 
const HERO_IMAGES = [
  '/assets/hero1.jpeg',
  '/assets/hero2.jpeg', // Add your second image path here
];
// ----------------------------------------------------------------------

export default function HomeHero() {
  const { isSoftLaunch } = useFeatureFlag();
  const {
    toggle: openEmailWaitlist,
    onOpen: onOpenEmailWaitlist,
    onClose: onCloseEmailWaitlist,
  } = useToggle();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  // State for slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [fadeOut, setFadeOut] = useState(false);
  
  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
        setNextImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
        setFadeOut(false);
      }, 1000); // Wait for fade out before changing image
      
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <MotionContainer>
      <JoinWaitListDialog open={openEmailWaitlist} onClose={onCloseEmailWaitlist} />
      <RootStyle>
        {/* Background gradient */}
        <HeroBackgroundStyle />
        
        {/* Floating decorative elements */}
        <FloatingElements>
          <FloatingElement 
            sx={{ 
              width: 80, 
              height: 80, 
              top: '10%', 
              left: '5%',
              animationDelay: '0s',
              background: 'rgba(255, 193, 7, 0.2)'
            }} 
          />
          <FloatingElement 
            sx={{ 
              width: 40, 
              height: 40, 
              top: '30%', 
              left: '15%',
              animationDelay: '1s',
              background: 'rgba(255, 255, 255, 0.15)'
            }} 
          />
          <FloatingElement 
            sx={{ 
              width: 60, 
              height: 60, 
              top: '20%', 
              right: '30%',
              animationDelay: '2s',
              background: 'rgba(255, 193, 7, 0.15)'
            }} 
          />
          <FloatingElement 
            sx={{ 
              width: 50, 
              height: 50, 
              bottom: '15%', 
              left: '10%',
              animationDelay: '3s',
              background: 'rgba(255, 255, 255, 0.1)'
            }} 
          />
        </FloatingElements>
        
        {/* Hero image - properly contained */}
        <HeroImageContainer variants={varFade().inRight}>
          <HeroImgStyle 
            src={HERO_IMAGES[currentImageIndex]} 
            alt="Child learning"
            sx={{ 
              opacity: fadeOut ? 0 : 1,
            }}
          />
        </HeroImageContainer>
        
        {/* Content section */}
        <ContentContainer>
          <Container>
            <ContentStyle spacing={4}>
              <m.div variants={varFade().inUp}>
                <Typography
                  component="h1"
                  variant="h2"
                  sx={{
                    // marginTop: 10,
                    color: 'common.white',
                    fontWeight: 700,
                    textShadow: '0px 2px 4px rgba(0,0,0,0.2)',
                    marginTop: 2,
                    width: isMdUp? '85%' : '100%', // Ensure full width
                    // Add stronger text shadow for better visibility on mobile
                    [theme.breakpoints.down('sm')]: {
                      textShadow: '0px 2px 6px rgba(0,0,0,0.5)',
                    }
                  }}
                >
                   Make Learning an Adventure!
                </Typography>
              </m.div>
              
              <m.div variants={varFade().inUp}>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'common.white',
                    fontWeight: 'normal',
                    textShadow: '0px 1px 2px rgba(0,0,0,0.2)',
                    opacity: 0.9,
                    maxWidth: isMdUp ? '80%' : '100%',
                    // Enhance visibility on mobile
                    [theme.breakpoints.down('md')]: {
                      textShadow: '0px 1px 4px rgba(0,0,0,0.4)',
                      opacity: 1,
                    }
                   
                  }}
                >
                  Turn education into an exciting challenge—where kids compete, earn XP, and level up in a secure, parent-controlled space.
                </Typography>
              </m.div>
              
              <m.div variants={varFade().inUp}>
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={2}
                  sx={{ 
                    mt: 2,
                    
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    width: '100%', // Use full width on mobile
                    [theme.breakpoints.down('sm')]: {
                      width: '100%',
                      // height: '100%'
                    }
                  }}
                >
                  {isSoftLaunch ? (
                    <Button
                      onClick={onOpenEmailWaitlist}
                      id="get-started-button"
                      size="large"
                      variant="contained"
                      fullWidth={!isMdUp} // Full width on mobile
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: '12px',
                        backgroundColor: '#FFC107',
                        color: '#333333',
                        fontWeight: 'bold',
                        boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
                        '&:hover': {
                          backgroundColor: '#FFB000',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.25)',
                        },
                        transition: 'all 0.2s',
                      }}
                      startIcon={<Iconify icon={'eva:flash-fill'} width={24} height={24} />}
                    >
                      Get Started
                    </Button>
                  ) : (
                    <NextLink href={PATH_AUTH.register} passHref>
                      <Button
                        size="large"
                        variant="contained"
                        fullWidth={!isMdUp} // Full width on mobile
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderRadius: '12px',
                          backgroundColor: '#FFC107',
                          color: '#333333',
                          fontWeight: 'bold',
                          boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
                          '&:hover': {
                            backgroundColor: '#FFB000',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.25)',
                          },
                          transition: 'all 0.2s',
                        }}
                        startIcon={<Iconify icon={'eva:flash-fill'} width={24} height={24} />}
                      >
                        Sign Up
                      </Button>
                    </NextLink>
                  )}
                  
                  <Button
                    variant="outlined"
                    size="large"
                    fullWidth={!isMdUp} // Full width on mobile
                    sx={{
                      px: 3,
                      py: 1.5,
                      borderRadius: '12px',
                      borderColor: 'common.white',
                      color: 'common.white',
                      '&:hover': {
                        borderColor: 'common.white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 2,
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </m.div>
              
              <m.div variants={varFade().inUp}>
                <Stack 
                  direction={{ xs: 'row', sm: 'row' }} // Stack vertically on very small screens
                  spacing={{ xs: 2, sm: 2 }} // More spacing on mobile
                  sx={{ 
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    alignItems: 'center', // Align left on mobile
                    width: '100%',
                    mt: { xs: 2, sm: 3 }, // Add more margin on top for small screens
                    // display: { xs: 'flex', sm: 'flex' } // Ensure it's always visible
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box 
                      sx={{ 
                        width: 32, 
                        height: 32, 
                        borderRadius: '50%', 
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 1
                      }}
                    >
                      <Iconify icon="mdi:shield-check" width={18} height={18} sx={{ color: '#FFC107' }} />
                    </Box>
                    <Typography variant="body1" sx={{ color: 'common.white' , fontWeight: 500 }}>
                      Parent Controlled
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box 
                      sx={{ 
                        width: 32, 
                        height: 32, 
                        borderRadius: '50%', 
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 1
                      }}
                    >
                      <Iconify icon="mdi:star" width={18} height={18} sx={{ color: '#FFC107' }} />
                    </Box>
                    <Typography variant="body1" sx={{ color: 'common.white', fontWeight: 500  }}>
                      Earn Rewards
                    </Typography>
                  </Box>
                </Stack>
              </m.div>
            </ContentStyle>
          </Container>
        </ContentContainer>
        
        {/* Scroll indicator */}
        {isMdUp && (
          <ScrollIndicator>
            <Iconify icon="mdi:chevron-down" width={24} height={24} />
            <Typography variant="caption">Scroll Down</Typography>
          </ScrollIndicator>
        )}
      </RootStyle>
    </MotionContainer>
  );
}