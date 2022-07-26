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
}))

export default useStyle
