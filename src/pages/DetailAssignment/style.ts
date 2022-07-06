import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
/**
 * Detail Assignment
 * <p>
 * Version 1.0
 * <p>
 * Date: 09-06-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 09-06-2022      HuyNT2711           Create
 */

const DetailAssignmentStyle = makeStyles((theme: Theme) => ({
  textTitle: {
    textAlign: 'left',
    fontWeight: '700 !important',
    fontSize: '20px !important',
  },
  textItem: {
    textAlign: 'left',
    pl: '20px',
    fontWeight: '600 !important',
    fontSize: '14px !important',
    lineheight: '19px !important',
  },
  colorBlack: {
    color: `${theme.color.black}  !important`,
  },
  colorWhite: {
    color: `${theme.color.white}  !important`,
  },
  colorLightBlack: {
    color: `${theme.color.lightBlack}  !important`,
  },
}))

export default DetailAssignmentStyle
