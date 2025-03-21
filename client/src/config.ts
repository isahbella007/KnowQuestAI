// @mui
import { enUS, arSD } from '@mui/material/locale';
import { SettingsValueProps } from './app/components/settings/type';
import { PATH_DASHBOARD } from './app/routes/path';

// ROOT PATH AFTER LOGIN SUCCESSFUL
// export const PATH_AFTER_LOGIN = PATH_DASHBOARD.general.app; // as '/dashboard/app'

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 88,
  DASHBOARD_DESKTOP_HEIGHT: 92,
  DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
};

export const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 280,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

export const ICON = {
  NAVBAR_ITEM: 22,
  NAVBAR_ITEM_HORIZONTAL: 20,
};

// SETTINGS
// Please remove `localStorage` when you change settings.
// ----------------------------------------------------------------------

export const cookiesExpires = 3;

export const cookiesKey = {
  themeMode: 'themeMode',
  themeLayout: 'themeLayout',
  themeStretch: 'themeStretch',
  themeContrast: 'themeContrast',
  themeDirection: 'themeDirection',
  themeColorPresets: 'themeColorPresets',
};

export const defaultSettings: SettingsValueProps = {
  themeMode: 'light',
  themeDirection: 'ltr',
  themeContrast: 'default',
  themeLayout: 'horizontal',
  themeColorPresets: 'default',
  themeStretch: false,
};

// MULTI LANGUAGES
// Please remove `localStorage` when you change settings.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: 'EN',
    text: 'English',
    value: 'en',
    systemValue: enUS,
    icon: '/assets/icons/flags/ic_flag_worldwide.svg',
    iconOnBlur: '/assets/icons/flags/ic_flag_worldwide_green.svg'
  },
  {
    label: 'AR',
    text: 'عربي',
    value: 'ar',
    systemValue: arSD,
    icon: '/assets/icons/flags/ic_flag_worldwide.svg',
    iconOnBlur: '/assets/icons/flags/ic_flag_worldwide_green.svg'
  },
];

export const defaultLang = allLangs[0]; // English
