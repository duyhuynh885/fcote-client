import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

/**
 *
 * <p>
 * Version 1.0
 * <p>
 * Date: 04-07-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 04-07-2022      HuyNT2711           Create
 */

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  newGroup: {
    fontSize: theme.textFont.supperLarge,
    fontWeight: '700 !important',
  },
  titleTextField: {
    fontSize: theme.textFont.extraSmall,
    fontWeight: 'bold',
    margin: '5px 0px',
  },
  scrollBar: {
    height: '330px',
    padding: '10px 20px',
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

export default useStyle
