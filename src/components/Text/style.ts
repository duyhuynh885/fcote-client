import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  errorText: {
    marginBottom: '15px',
    color: theme.color.red,
    fontSize: theme.textFont.small,
    fontWeight: '600',
  },
}))

export default useStyles
