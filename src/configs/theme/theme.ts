import { createTheme } from '@mui/material/styles'
import { ThemeOptions as ThemeOptionsOld } from '@mui/material/styles/createTheme'

/**
 * Override the default theme of material ui
 *
 * Version 1.0
 *
 * Date: 22-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 22-06-2022         DuyHV           Create
 */

// Custom theme:
const themeCustom = {
  color: {
    white: '#FFFFFF',
    lightGray: '#1652f0',
    darkGray: '#726767',
    green: '#23C686',
    red: '#FF5A73',
    yellow: '#FFD600',
    black: '#000000',
    lightBlack: '#1a2027',
    blueLight: '#F3F7F7',
    brown: '#9D9D9E',
    darkBlue: '#1D3853',
    lightBlue: '#EFFDF3',
    darkRed: '#AC5B4D',
  },
  textFont: {
    supperLarge: '28px',
    extraLarge: '24px',
    large: '20px',
    medium: '18px',
    small: '16px',
    extraSmall: '14px',
    superSmall: '12px',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    darkBlue: {
      main: '#1D3853',
      contrastText: '#fff',
    },
    success: {
      main: '#23C686',
    },
  },
  border: {
    blueGray: '#4c6177',
    blue: '#005cbf',
  },
  rankingCard: {
    green: '#22BB80',
    darkGreen: '#0A8656',
    darkGray: '#2B3B52',
    navyBlue: '#45547A',
    darkNavyBlue: '#2B3B52',
  },
} as const

// Override style Mui
const themeOptions: ThemeOptionsOld = {
  ...themeCustom,
  typography: {
    fontFamily: ['Open Sans'].join(','),
    h1: {
      fontFamily: 'Open Sans',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      color: themeCustom.color.black,
    },
    h2: {
      fontFamily: 'Open Sans',
    },
    h3: {
      fontFamily: 'Open Sans',
    },
    h4: {
      fontFamily: 'Open Sans',
    },
    button: {
      fontFamily: 'Open Sans',
    },
  },
}

// Update for Typescript
type CustomTheme = {
  [Key in keyof typeof themeCustom]: typeof themeCustom[Key]
}
declare module '@mui/material/styles/createTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends CustomTheme {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ThemeOptions extends CustomTheme {}
}

// Create theme
export const theme = createTheme({ ...themeCustom, ...themeOptions })
