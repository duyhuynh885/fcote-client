import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: any) => ({
  scrollBar: {
    height: '13rem',
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
  tabs: {
    border: `1px solid ${theme.color.brown} !important`,
  },
  gridTestcase: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textRight: {
    width: '10em',
  },
  textTitle: {
    textAlign: 'left',
    fontWeight: '700 !important',
    fontSize: '20px !important',
    color: theme.color.darkGray,
  },
}))

export default useStyles
