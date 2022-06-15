import React from 'react'
import useStyles from './style'
import { Button } from '@mui/material'
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'

// const theme = createTheme(
//     Palette:{
//         primary: {
//             // Purple and green play nicely together.
//             main: purple[500],
//           },
//           secondary: {
//             // This is green.A700 as hex.
//             main: '#11cb5f',
//           },
//     }
// );

export default function ButtonBack() {
  const className = useStyles()

  return (
    <div>
      <Button variant='outlined' color='primary' className={className.buttonBack}>
        <ArrowBackIosOutlinedIcon />
        Primary
      </Button>
      <Button variant='outlined' color='secondary' className={className.buttonBack}>
        <ArrowBackIosOutlinedIcon />
        secondary
      </Button>
    </div>
  )
}
