import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles((theme: Theme) => ({
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
}))

export default useStyle
