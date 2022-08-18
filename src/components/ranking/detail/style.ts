import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

/**
 * Style for Ranking Card components
 *
 * Version 1.0
 *
 * Date: 24-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 24-06-2022         TuanLA           Create
 */
const useStyles = makeStyles((theme: Theme) => ({
  tabStyle: {
    '& .MuiTabs-indicator': {
      backgroundColor: theme.color.green,
      height: 3,
    },
    '& .MuiTab-root.Mui-selected': {
      color: theme.color.green,
    },
  },
  tabTitle: {
    fontSize: theme.textFont.extraSmall,
    fontWeight: 'bold',
  },
}))
export default useStyles
