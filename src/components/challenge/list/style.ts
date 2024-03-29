import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

/**
 * Style for My Profile components
 *
 * Version 1.0
 *
 * Date: 22-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 22-06-2022         DuyHV           Create
 */
const useStyles = makeStyles((theme: Theme) => ({
  green: {
    color: theme.color.green,
  },
  listGroupScroll: {
    height: '70vh',
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
  selectedActive: {
    '&.Mui-selected': {
      backgroundColor: 'red',
    },
  },
  groupTittle: {
    fontSize: theme.textFont.small,
    fontWeight: '500',
  },
  myGroup: {
    fontSize: theme.textFont.large,
    fontWeight: 'bold',
    paddingLeft: '20px',
  },
  root: {
    '&$selected': {
      backgroundColor: `${theme.color.green}70 !important`,
    },
    padding: '5px',
  },
  selected: {},
  cardGroup: {
    width: '100% !important',
    height: 'auto',
    border: '1px solid black',
    padding: '10px 10px',
  },
  cardGroupTitle: {
    fontWeight: '800',
    fontSize: theme.textFont.small,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  cardGroupTotalMember: {
    fontWeight: '800',
    fontSize: theme.textFont.small,
    color: theme.color.darkRed,
  },
  cardGroupTitleMember: {
    fontWeight: '800',
    fontSize: theme.textFont.extraSmall,
  },
}))

export default useStyles
