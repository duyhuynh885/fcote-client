import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

/**
 * Style for CreateAssignment
 *
 * Version 1.0
 *
 * Date: 28-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 28-06-2022         DuyHV           Create
 */

const useStyles = makeStyles((theme: Theme) => ({
  titleTextField: {
    fontSize: theme.textFont.extraSmall,
    fontWeight: 'bold',
    margin: '5px 0px',
  },
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
  scrollBar: {
    height: '72vh',
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
  createTestCaseModelTitle: {
    fontSize: theme.textFont.medium,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuPaper: {
    maxHeight: 150,
  },
  scrollBarTestCase: {
    height: '25vh',
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
  selected: {
    backgroundColor: `${theme.color.green}30  !important`,
  },
}))

export default useStyles
