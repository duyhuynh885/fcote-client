import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
/**
 * TaskbarFilter
 * <p>
 * Version 1.0
 * <p>
 * Date: 08-06-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 08-06-2022      HuyNT2711           Create
 * 24-06-2022      DuyHV               Update UI
 */
const useStyle = makeStyles((theme: Theme) => ({
  taskFilterOptions: {
    fontWeight: 'bold',
  },
  selected: {
    backgroundColor: `${theme.color.green}30  !important`,
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
}))

export default useStyle
