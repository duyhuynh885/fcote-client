import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

/**
 * style list challenge
 *
 * Version 1.0
 *
 * Date: 10-07-2022
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 10-07-2022      HuyNT2711           Create
 */

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '90vh',
    backgroundColor: theme.color.blueLight,
  },

  tabLeft: {},
  backgroundTabResize: {
    cursor: 'col-resize',
    width: 5,
    backgroundColor: theme.color.blueLight,
  },
}))

export default useStyles
