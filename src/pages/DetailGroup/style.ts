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

const useStyles = makeStyles((theme: any) => ({
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
    borderRight: `0.5px solid ${theme.color.darkGray}`,
    backgroundColor: theme.color.white,
  },

  backgroundTabResize: {
    cursor: 'col-resize',
    width: 5,
    backgroundColor: theme.color.blueLight,
  },
  scrollBar: {
    height: '80vh',
    padding: '10px 50px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0.3em',
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.color.green,
      borderRadius: '10px',
    },
  },
}))

export default useStyles
