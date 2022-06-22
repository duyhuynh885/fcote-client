import { makeStyles } from '@mui/styles'
/**
 * My Assignment Item
 * <p>
 * Version 1.0
 * <p>
 * Date: 04-06-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 04-06-2022      HuyNT2711           Create
 */
const MyAssignmentItemStyle = makeStyles((theme: any) => ({
  paperWrap: {
    width: '493px',
    height: '53px',
    border: '1px solid #7A9295',
    padding: '8px',
  },
  name: {
    float: 'left',
    width: '208px',
    height: '24px',
    fontWeight: '600 !important',
    fontSize: `${theme.textFont.small} !important`,
    lineHeight: '24px !important',
    textTransform: 'capitalize',
    color: `${theme.color.brown} !important`,
    textAlign: 'left',
    marginTop: '6px  !important',
  },

  level: {
    float: 'left',
    width: '90px',
    height: '24px',
    fontWeight: '800 !important',
    fontSize: `${theme.textFont.small} !important`,
    lineHeight: '24px !important',
    textTransform: 'capitalize',
    color: `${theme.color.brown} !important`,
    textAlign: 'center',
    paddingTop: '6px !important',
  },
  btn: {
    width: '174px',
    height: '36px',
    backgroundColor: ` ${theme.color.green} !important`,
  },
  textBtn: {
    width: '140px',
    height: '22px',
    fontWeight: '600 !important',
    fontSize: `${theme.textFont.small} !important`,
    lineHeight: '22px !important',
    textTransform: 'capitalize',
    color: `${theme.color.black} !important`,
  },
}))

export default MyAssignmentItemStyle
