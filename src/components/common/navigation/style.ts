import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  navBar: {
    backgroundColor: `${theme.color.white} !important`,
    display: 'flex',
    justifyContent: 'space-around !important',
  },
  navLinks: {
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: theme.color.darkGray,
    fontSize: theme.textFont.small,
    fontWeight: 'bold',
    marginLeft: theme.spacing(5),
    '&:hover': {
      color: theme.color.black,
    },
  },
  containerNavlink: {
    display: 'flex',
    justifyContent: 'space-around !important',
  },
  button: {
    minWidth: 'auto',
    border: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    position: 'relative',
    padding: '12px 30px',
    margin: '.3125rem 1px',
    fontSize: theme.textFont.small,
    fontWeight: 'bold !important',
    letterSpacing: '0',
    willChange: 'box-shadow, transform',
    lineHeight: '1.42857143',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
  },
  loginBtn: {
    backgroundColor: `${theme.color.green} !important`,
    color: `${theme.color.black} !important`,
  },
  registerBtn: {
    backgroundColor: `${theme.color.white} !important`,
    color: `${theme.color.black} !important`,
  },
  toolbar: {
    color: theme.color.darkGray,
    fontSize: theme.textFont.extraLarge,
    fontWeight: 'bold',
  },
  navBarCreate: {
    backgroundColor: `${theme.color.white} !important`,
    boxShadow: 'none',
    borderBottom: `0.5px solid ${theme.color.darkGray}`,
  },
}))

export default useStyles