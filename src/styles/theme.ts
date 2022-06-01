import { createTheme } from '@mui/material/styles';
import { ThemeOptions as ThemeOptionsOld } from '@mui/material/styles/createTheme';

// Custom theme: Colors
const themeColors = {
  color: {
    navColor: `#ffffff`,
    lightGray: `#1652f0`,
    darkGray: '#726767',
    green: '#9D9D9E',
    red: '#FF5A73',
    yellow: '#FFD600',
    textColor: '#000000',
    backgroundColor: 'F3F7F7'
  }
} as const;

// Override style Mui
const themeOptions: ThemeOptionsOld = {
  ...themeColors,
  typography: {
    fontSize: 14.4,
  }
};

// Update for Typescript
type CustomTheme = {
  [Key in keyof typeof themeColors]: typeof themeColors[Key];
};
declare module '@mui/material/styles/createTheme' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

// Create theme
export const theme = createTheme({ ...themeColors, ...themeOptions });