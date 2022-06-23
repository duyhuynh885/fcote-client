import { makeStyles } from '@mui/styles'
/**
 * My Assignment Item
 * <p>
 * Version 1.0
 * <p>
 * Date: 04-06-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 04-06-2022      HuyNT2711           Create
 */
const useStyles = makeStyles((theme: any) => ({
  paperWrap: {
    width: '100%',
    height: 'auto',
    border: '1px solid black',
    padding: '8px',
  },
  link: {
    textDecoration: 'none',
    color: theme.color.black,
  },
  name: {
    fontWeight: '600',
    fontSize: `${theme.textFont.small}`,
    textTransform: 'capitalize',
  },
  level: {
    fontWeight: '800',
    fontSize: `${theme.textFont.small}`,
    textTransform: 'capitalize',
    color: `${theme.color.brown}`,
  },
  title: {
    fontSize: theme.textFont.large,
    fontWeight: 'bold',
  },
  scrollBar: {
    height: '800px',
    paddingRight: '10px',
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
}))

export default useStyles
