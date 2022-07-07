import React from 'react'
import { render } from 'react-dom'
import App from './apps/App'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './configs/theme/theme'
import CssBaseline from '@mui/material/CssBaseline'

render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
)
