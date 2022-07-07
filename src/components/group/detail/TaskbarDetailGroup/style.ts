import { makeStyles } from '@mui/styles'
import { fontWeight } from '@mui/system'
/**
 * Taskbar Group
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
const useStyles = makeStyles((theme: any) => ({
  taskFilterOptions: {
    fontWeight: 'bold',
  },
  code: {
    textAlign: 'center',
    fontWeight: '600',
    color: `${theme.color.black} !important`,
  },
}))

export default useStyles