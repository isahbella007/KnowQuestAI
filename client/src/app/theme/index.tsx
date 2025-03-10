import { useMemo, ReactNode } from 'react';
// hooks
import useSettings from '../hooks/useSettings';

import palette from './palette';
import breakpoints from './breakpoints';
import typography, { FONT_PRIMARY, FONT_PRIMARY_AR } from './typography';
import { createTheme, ThemeOptions, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import {CssBaseline} from '@mui/material'
import ComponentsOverrides from './overrides';
import shadows, { customShadows } from './shadows';
// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const { themeMode, themeDirection } = useSettings();

  const isLight = themeMode === 'light';
  // const { currentLang } = useLocales();
  // console.log('ThemeProvider -> currentLang:', currentLang);

  const typographyOptions = useMemo(() => {
    const fontFamily =  FONT_PRIMARY;

    return {
      fontFamily,
      ...typography,
      // other typography options...
    };
  }, []);

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography: typographyOptions,
      breakpoints,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLight, themeDirection]
  );

  const theme = createTheme(themeOptions);

  theme.components = ComponentsOverrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
