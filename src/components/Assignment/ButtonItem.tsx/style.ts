import { makeStyles } from '@mui/styles'

/**
 * Button Item component
 * <p>
 * Version 1.0
 * <p>
 * Date: 02-06-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 02-06-2022      HuyNT2711           Create
 */
const ButtonItemStyle = makeStyles((theme: any) => ({
  btn: {
    padding: '14px 32px !important',
    gap: '10px !important',
    width: '204px',
    height: '36px ',
    backgroundColor: ` ${theme.color.green} !important`,
    marginLeft: '4% !important',
    marginTop: '5px !important',
  },
  textBtn: {
    width: '140px',
    height: '22px',
    fontStyle: 'normal !important',
    fontWeight: '600 !important',
    fontSize: `${theme.textFont.small} !important`,
    lineHeight: '22px !important',
    textTransform: 'capitalize',
    color: `${theme.color.brown} !important`,
  },
}))

export default ButtonItemStyle
