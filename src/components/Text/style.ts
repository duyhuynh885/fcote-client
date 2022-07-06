import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: any) => ({
  errorText: {
    marginBottom: '15px',
    color: theme.color.red,
    fontSize: theme.textFont.small,
    fontWeight: '600',
  },
}))

export default useStyles
