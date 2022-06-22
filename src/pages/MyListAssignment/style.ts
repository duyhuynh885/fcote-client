import {} from '@mui/material'
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
const MyListAssignmentStyle = makeStyles((theme: any) => ({
  wrapAll: {
    backgroundColor: `${theme.color.backgroundColor} !important`,
    width: '100% !important',
  },
  containerGrid: {
    width: '1007px !important',
    height: 'auto !important',
    marginLeft: 'auto !important',
    marginRight: 'auto !important',
    marginTop: `${theme.spacing(2)} !important`,
  },
  itemGrid: {
    width: '223px',
    height: '178px',
    marginTop: `${theme.spacing(4)} !important`,
  },
}))

export default MyListAssignmentStyle
