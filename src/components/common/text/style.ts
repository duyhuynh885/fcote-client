import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  errorText: {
    marginBottom: '15px',
    color: theme.color.red,
    fontSize: theme.textFont.small,
    fontWeight: '600',
  },
  difficultStyle: {
    fontWeight: '700',
    fontSize: `${theme.textFont.superSmall} `,
    padding: '2px 7px',
    borderRadius: '5px',
  },
  easy: { color: '#1a9991', backgroundColor: '#7cdf9150' },
  medium: { color: '#e38d34', backgroundColor: '#f5b84950' },
  hard: { color: '#b51b43', backgroundColor: '#e3513e50' },
  notSolved: { color: '#605e5e', backgroundColor: '#C8C3C250' },
  inProgress: { color: '#3366FF', backgroundColor: '#ADC8FF50' },
  solved: { color: '#605e5e', backgroundColor: '#C8C3C250' },
}))

export default useStyles
