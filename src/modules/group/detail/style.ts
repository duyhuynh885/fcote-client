import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

/**
 * Taskbar Group
 * <p>
 * Version 1.0
 * <p>
 * Date: 04-07-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 04-07-2022      HuyNT2711           Create
 */

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '90vh',
    backgroundColor: theme.color.blueLight,
  },
  tabTitle: {
    fontSize: theme.textFont.small,
    fontWeight: 'bold',
  },
  tabStyle: {
    '& .MuiTabs-indicator': {
      backgroundColor: theme.color.green,
      height: 3,
    },
    '& .MuiTab-root.Mui-selected': {
      color: theme.color.green,
    },
  },
  tabLeft: {
    backgroundColor: theme.color.white,
  },
}))

export default useStyles
