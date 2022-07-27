import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100vh !important',
    backgroundColor: theme.color.white,
    boxSizing: 'border-box',
  },
  footer: {
    width: '100%',
    backgroundColor: theme.color.white,
    borderTop: `0.5px solid ${theme.color.darkGray}`,
    padding: '5px 10px',
  },
}))

export default useStyles
