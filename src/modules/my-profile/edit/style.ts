import { Theme } from '@mui/material'
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
 * 24-06-2022      DuyHV               Update UI
 */
const useStyles = makeStyles((theme: Theme) => ({
  selected: {
    backgroundColor: `${theme.color.green}30  !important`,
  },
}))

export default useStyles
