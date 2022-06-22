import { makeStyles } from '@mui/styles'
/**
 * TaskbarFilter
 * <p>
 * Version 1.0
 * <p>
 * Date: 08-06-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 08-06-2022      HuyNT2711           Create
 */
const TaskbarFilterStyle = makeStyles((theme: any) => ({
  btn: {
    width: '100px',
    height: '32px',
    backgroundColor: ` ${theme.color.green} !important`,
  },
  textBtn: {
    width: '100px',
    height: '22px',
    fontWeight: '600 !important',
    fontSize: `${theme.textFont.small} !important`,
    lineHeight: '22px !important',
    textTransform: 'capitalize',
    color: ` ${theme.color.black} !important`,
  },
}))

export default TaskbarFilterStyle
