import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: theme.textFont.large,
    fontWeight: 'bold',
    marginLeft: '10px',
  },
}))

export default useStyles
