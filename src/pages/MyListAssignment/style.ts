import { Theme } from '@mui/material'
import {} from '@mui/icons-material'
import { makeStyles } from '@mui/styles'

/**
 * My list assignment
 * <p>
 * Version 1.0
 * <p>
 * Date: 05-06-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 05-06-2022      HuyNT2711           Create
 */
const MyListAssignmentStyle = makeStyles((theme: Theme) => ({
  wrapAll: {
    backgroundColor: `${theme.color.blueLight} !important`,
    width: '100% !important',
  },
  containerGrid: {
    width: '77vw',
    height: 'auto !important',
    marginLeft: 'auto !important',
    marginRight: 'auto !important',
  },
  itemGrid: {
    marginTop: `${theme.spacing(4)} !important`,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  bottom: {
    position: 'fixed',
    top: '70%',
    left: '40%',
  },
}))

export default MyListAssignmentStyle
