import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  titleNameInput: {
    fontSize: theme.textFont.medium,
    fontWeight: 'bold',
    margin: '5px 0px',
  },
  tabFileName: {
    fontSize: theme.textFont.extraSmall,
    fontWeight: '800',
    textTransform: 'lowercase',
  },
  tabTitle: {
    fontSize: theme.textFont.extraSmall,
    fontWeight: '800',
    textTransform: 'capitalize',
  },
  titleTextField: {
    fontSize: theme.textFont.extraSmall,
    fontWeight: 'bold',
    margin: '5px 0px',
  },
  tabEditor: {
    '& .MuiTabs-indicator': {
      backgroundColor: theme.color.darkGray,
      height: 2,
    },
    '& .MuiTab-root.Mui-selected': {
      color: theme.color.black,
    },
  },
  testCaseTabsTitle: {
    fontSize: theme.textFont.small,
    fontWeight: '800',
    paddingLeft: '10px',
    textTransform: 'uppercase',
  },
  scrollBarTestCase: {
    height: '35vh',
    paddingRight: '20px',
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
  iconWarning: {
    color: theme.color.darkRed,
  },
  iconSuccess: {
    color: theme.color.green,
  },
  testResultDescription: {
    fontWeight: '700',
    marginLeft: theme.spacing(1),
    fontSize: theme.textFont.extraSmall,
    color: theme.color.darkRed,
    alignItems: 'center',
  },
  inputTestCaseDescription: {
    fontWeight: '600',
    fontSize: theme.textFont.extraSmall,
    color: theme.color.darkGray,
  },
}))

export default useStyles
