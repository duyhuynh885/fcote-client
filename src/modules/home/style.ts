import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

/**
 * style of Home Pages
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
 * 30-07-2022         HuyNT2711           Create
 */
const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: theme.textFont.large,
    fontWeight: 'bold',
    marginLeft: '20px',
    padding: '15px 0px 15px 0px',
  },
}))

export default useStyles
