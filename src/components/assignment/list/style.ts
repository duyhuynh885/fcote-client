import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

/**
 * Assignment Item
 * <p>
 * Version 1.0
 * <p>
 * Date: 03-06-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 03-06-2022      HuyNT2711           Create
 * 24-06-2022      DuyHV               Update UI
 */
const AssignmentItemStyle = makeStyles((theme: Theme) => ({
  container: {
    width: '14.375rem',
    height: '13rem',
    padding: '10px',
  },
  state: {
    fontWeight: '700',
    fontSize: `${theme.textFont.extraSmall} `,
    color: `${theme.color.brown} `,
  },
  name: {
    fontWeight: '600',
    fontSize: `${theme.textFont.small} `,
    textTransform: 'capitalize',
    color: `${theme.color.brown}`,
    textAlign: 'center',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  level: {
    fontWeight: '700',
    fontSize: `${theme.textFont.extraSmall} `,
    textTransform: 'capitalize',
    color: `${theme.color.brown}`,
  },
  userName: {
    fontWeight: '700',
    fontSize: `${theme.textFont.small}`,
    textTransform: 'capitalize',
    color: `${theme.color.black}`,
    textAlign: 'center',
  },
}))
export default AssignmentItemStyle
