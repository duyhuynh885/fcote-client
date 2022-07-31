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
    minWidth: '14rem',
    maxWidth: '15rem',
    height: 'auto',
    padding: '10px',
  },
  wrapAvatarName: {
    borderRadius: '50px',
    width: 'fit-content',
    padding: '5px',
    margin: '5px auto !important',
    backgroundColor: `${theme.color.darkGray}10`,
  },
  avatar: {
    border: `1px solid ${theme.color.green}`,
  },
  name: {
    fontWeight: '700',
    fontSize: `${theme.textFont.small}`,
    textTransform: 'capitalize',
    color: `${theme.color.black}`,
    textAlign: 'center',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  date: {
    fontWeight: '700',
    fontSize: `${theme.textFont.extraSmall}`,
    color: `${theme.color.darkGray}`,
  },
  userName: {
    fontWeight: '700',
    fontSize: `${theme.textFont.extraSmall}`,
    color: `${theme.color.darkGray}`,
    textAlign: 'center',
  },
}))
export default AssignmentItemStyle
