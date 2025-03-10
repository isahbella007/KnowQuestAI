// next
import { usePathname, useRouter } from 'next/navigation';
import NextLink from 'next/link';

// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container } from '@mui/material';

import useResponsive from '../../hooks/useResponsive';
import useFeatureFlag from '@/app/hooks/useFeatureFlag';
import useToggle from '@/app/hooks/useToggle';
import { HEADER } from '@/config';
import cssStyles from '@/app/utils/cssStyles';
import useOffSetTop from '@/app/utils/useOffSetTop';


const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
//   boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export default function MainHeader() {
  const {isSoftLaunch} = useFeatureFlag()
  const {
    toggle: openEmailWaitlist,
    onOpen: onOpenEmailWaitlist,
    onClose: onCloseEmailWaitlist,
  } = useToggle();


  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);
  const theme = useTheme();

  const  pathname  = usePathname();

  const isDesktop = useResponsive('up', 'md');

  const isHome = pathname === '/';

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      {/* <JoinWaitlistDialog open={openEmailWaitlist} onClose={onCloseEmailWaitlist} /> */}
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center', // This centers items vertically
            justifyContent: 'space-between',
            // backgroundColor: 'orange',
          }}
        >
          <Box sx={{ 
            mt: 7
          }}>
            {/* <Logo /> */}
            {/* <p>Logo here</p> */}
          </Box>

          {/* <Label color="info" sx={{ ml: 1 }}>
            {t('common.version')}
          </Label> */}

          <Box
           sx={{
            flexGrow:1
          }}
          />

          {/* {isDesktop && !isSoftLaunch && (
            <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          )} */}

          {isSoftLaunch ? (
            <Button
              variant="contained"
              // target="_blank"
              onClick={() => {
                const section = document.getElementById('engagement-section');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              sx={{
                backgroundColor: theme.palette.warning.main,
                color: '#333333',
                fontWeight: 'bold',
              }}
            >
              Sign Up
            </Button>
          ) : (
            <NextLink href={'/auth/login'} passHref>
              <Button
                variant="contained"
                // target="_blank"
              >
                Sign In
              </Button>
            </NextLink>
          )}
          {/* <Box sx={{ ml: 2 }}>
            <LanguagePopover />
          </Box> */}


          {/* {!isDesktop && !isSoftLaunch && (
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          )} */}
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
