import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

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
    borderRight: `0.5px solid ${theme.color.darkGray}`,
    backgroundColor: theme.color.white,
  },
  tabRight: {
    backgroundColor: theme.color.white,
  },
  footer: {
    width: '100%',
    backgroundColor: theme.color.white,
    borderTop: `0.5px solid ${theme.color.darkGray}`,
    padding: '5px 10px',
  },
  backgroundTabResize: {
    cursor: 'col-resize',
    width: 5,
    backgroundColor: theme.color.blueLight,
  },
}))

export default useStyles
