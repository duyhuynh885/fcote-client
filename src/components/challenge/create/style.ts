import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  titleTextField: {
    fontSize: theme.textFont.extraSmall,
    fontWeight: 'bold',
    margin: '5px 0px',
  },
  titleNameChooseAssignmentForm: {
    fontSize: theme.textFont.medium,
    fontWeight: 'bold',
    marginLeft: '16px',
    marginTop: '15px',
  },
  descriptionSelection: {
    fontSize: theme.textFont.superSmall,
    color: theme.color.darkGray,
    fontWeight: 'bold',
    marginLeft: '16px',
  },
  tabFileName: {
    fontSize: theme.textFont.extraSmall,
    fontWeight: '800',
    textTransform: 'lowercase',
  },
  scrollBarChooseAssignmentForm: {
    height: '40vh',
    // paddingRight: '20px',
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
  noNumber: {
    fontSize: theme.textFont.extraLarge,
    fontWeight: '800',
    marginRight: '5px',
    color: theme.color.darkGray,
  },
}))

export default useStyles
