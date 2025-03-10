"use client"
import { m } from 'framer-motion';
// @mui
import { styled, useTheme, alpha } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Link,
  Divider,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import Iconify from '@/app/components/Iconify';
import { varFade } from '@/app/components/animate/variants/fade';
import MotionContainer from '@/app/components/animate/MotionContainer';
import NextLink from 'next/link';

// Styled components
const RootStyle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0, 4, 0),
  background: 'linear-gradient(135deg, #E1F5FE 0%, #F5F5F5 100%)',
  position: 'relative',
  overflow: 'hidden',
  // Add smooth transition from previous section
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '10%',
    background: 'linear-gradient(to top, transparent, #E1F5FE)',
    zIndex: 1,
  }
}));

const ContentStyle = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
}));

const LogoStyle = styled('img')(({ theme }) => ({
  height: 40,
  marginBottom: theme.spacing(2),
}));

const FloatingElement = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  animation: 'float 10s infinite ease-in-out',
  opacity: 0.5,
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
    '50%': { transform: 'translateY(-15px) rotate(5deg)' },
  },
}));

export default function HomeFooter() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      items: [
        { label: 'Features', href: '#' },
        { label: 'How It Works', href: '#' },
        { label: 'Pricing', href: '#' },
      ]
    },
    {
      title: 'Company',
      items: [
        { label: 'About Us', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Careers', href: '#' },
      ]
    },
    {
      title: 'Legal',
      items: [
        { label: 'Terms of Service', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Cookie Policy', href: '#' },
      ]
    }
  ];

  const socialLinks = [
    { icon: 'mdi:twitter', href: '#', color: '#1DA1F2' },
    { icon: 'mdi:instagram', href: '#', color: '#E1306C' },
    { icon: 'mdi:facebook', href: '#', color: '#4267B2' },
    { icon: 'mdi:linkedin', href: '#', color: '#0077B5' },
  ];

  return (
    <MotionContainer>
      <RootStyle>
        {/* Decorative elements */}
        <FloatingElement 
          sx={{ 
            width: 120, 
            height: 120, 
            top: '60%', 
            left: '5%',
            animationDelay: '0s',
            background: 'rgba(33, 150, 243, 0.05)'
          }} 
        />
        <FloatingElement 
          sx={{ 
            width: 80, 
            height: 80, 
            top: '20%', 
            right: '10%',
            animationDelay: '2s',
            background: 'rgba(255, 193, 7, 0.04)'
          }} 
        />
        
        <Container>
          <ContentStyle>
            <Grid container spacing={4}>
              {/* Logo and description */}
              <Grid item xs={12} md={4}>
                <m.div variants={varFade().inUp}>
                  {/* <LogoStyle src="/assets/logo.png" alt="Logo" /> */}
                  <Typography variant="h5" sx={{ color: 'text.secondary', mb: 2, maxWidth: 400, fontWeight: 'normal' }}>
                    Transforming learning into exciting challenges for children in a safe, parent-controlled environment.
                  </Typography>
                  
                  {/* Social media links */}
                  <Stack direction="row" spacing={1.5}>
                    {socialLinks.map((social, index) => (
                      <IconButton 
                        key={index}
                        component={Link}
                        href={social.href}
                        target="_blank"
                        rel="noopener"
                        sx={{ 
                          color: social.color,
                          '&:hover': {
                            backgroundColor: alpha(social.color, 0.08),
                            transform: 'translateY(-3px)',
                          },
                          transition: 'all 0.2s',
                        }}
                      >
                        <Iconify icon={social.icon} width={20} height={20} />
                      </IconButton>
                    ))}
                  </Stack>
                </m.div>
              </Grid>
              
              {/* Quick links - only show on medium screens and up */}
              {/* {isMdUp && (
                <>
                  {footerLinks.map((column, index) => (
                    <Grid item xs={12} md={2} key={index}>
                      <m.div variants={varFade().inUp}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                          {column.title}
                        </Typography>
                        <Stack spacing={1.5}>
                          {column.items.map((link, linkIndex) => (
                            <Link
                              key={linkIndex}
                              component={NextLink}
                              href={link.href}
                              variant="body2"
                              color="text.secondary"
                              sx={{ 
                                display: 'inline-flex',
                                '&:hover': {
                                  color: 'primary.main',
                                  transform: 'translateX(3px)',
                                },
                                transition: 'all 0.2s',
                              }}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </Stack>
                      </m.div>
                    </Grid>
                  ))}
                </>
              )} */}
              
              {/* Newsletter - only show on medium screens and up */}
              {/* {isMdUp && (
                <Grid item xs={12} md={4}>
                  <m.div variants={varFade().inUp}>
                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                      Stay Updated
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                      Join our newsletter for the latest updates and features.
                    </Typography>
                    <Link
                      component={NextLink}
                      href="#"
                      variant="subtitle2"
                      sx={{ 
                        color: 'primary.main',
                        display: 'inline-flex',
                        alignItems: 'center',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Subscribe
                      <Iconify icon="mdi:arrow-right" width={16} height={16} sx={{ ml: 0.5 }} />
                    </Link>
                  </m.div>
                </Grid>
              )} */}
            </Grid>
            
            {/* Divider */}
            <Divider sx={{ my: 4, opacity: 0.1 }} />
            
            {/* Copyright */}
            {/* <Box sx={{ textAlign: 'center' }}>
              <m.div variants={varFade().in}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  © {currentYear} Your Company. All rights reserved.
                </Typography>
              </m.div>
            </Box> */}
          </ContentStyle>
        </Container>
      </RootStyle>
    </MotionContainer>
  );
}