import { Theme } from '@mui/material'
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
 * 24-06-2022      DuyHV               Update UI
 */
const useStyles = makeStyles((theme: Theme) => ({
  paperWrap: {
    width: '100% !important',
    height: 'auto',
    border: '1px solid black',
    padding: '10px 10px',
  },
  link: {
    textDecoration: 'none',
    color: theme.color.black,
  },
  name: {
    fontWeight: '700',
    width: '150px',
    fontSize: `${theme.textFont.small}`,
    textTransform: 'capitalize',
    color: `${theme.color.black}`,
    textAlign: 'start',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  userName: {
    fontWeight: '700',
    fontSize: `${theme.textFont.extraSmall}`,
    color: `${theme.color.darkGray}`,
    textAlign: 'start',
  },
  score: {
    fontWeight: '800',
    fontSize: `${theme.textFont.extraSmall}`,
    color: `${theme.color.darkRed}`,
    textAlign: 'start',
  },
  scrollBar: {
    height: '730px',
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
  avatar: {
    border: `1px solid ${theme.color.green}`,
  },
}))

export default useStyles
