import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import DataAnalyses from '../../assets/DataAnalyse.png'

/**
 * Style for Authentication Pages
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

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    textDecoration: 'none',
    fontSize: theme.textFont.small,
    fontWeight: 'bold',
  },
  authLayout: {
    backgroundImage: `url(${DataAnalyses})`,
    backgroundPosition: 'left 140px top 100px',
    backgroundSize: '80%',
    backgroundRepeat: 'no-repeat',
  },
}))

export default useStyles
