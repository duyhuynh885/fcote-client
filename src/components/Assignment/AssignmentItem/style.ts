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
 */
const AssignmentItemStyle = makeStyles((theme: any) => ({
  container: {
    position: 'absolute',
    width: '223px',
    height: '178px',
  },
  state: {
    float: 'left',
    width: '101px',
    height: '19px',
    fontWeight: '700 !important',
    fontSize: `${theme.textFont.extraSmall} !important`,
    lineHeight: '19px',
    textTransform: 'capitalize',
    color: `${theme.color.brown} !important`,
    textAlign: 'left',
  },
  name: {
    width: '223px',
    height: '19px',
    fontWeight: '600 !important',
    fontSize: `${theme.textFont.small} !important`,
    lineHeight: '19px !important',
    textTransform: 'capitalize',
    color: `${theme.color.name} !important`,
    textAlign: 'center',
    marginTop: '10px  !important',
  },
  level: {
    float: 'right',
    width: '101px',
    height: '19px',
    fontWeight: '700 !important',
    fontSize: `${theme.textFont.extraSmall} !important`,
    lineHeight: '19px !important',
    textTransform: 'capitalize',
    color: `${theme.color.brown} !important`,
    textAlign: 'right',
  },

  img: {
    marginLeft: '41%',
    marginTop: '10px !important',
  },
  userName: {
    width: '223px',
    height: '16px',
    fontStyle: 'normal',
    fontWeight: '700 !important',
    fontSize: `${theme.textFont.small} !important`,
    lineHeight: '19px',
    textTransform: 'capitalize',
    color: `${theme.color.black} !important`,
    textAlign: 'center',
    // marginTop: "5px !important",
  },
  btn: {
    padding: '14px 32px !important',
    gap: '10px !important',
    width: '204px',
    height: '36px ',
    backgroundColor: ` ${theme.color.btnGreenColor} !important`,
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
    color: `${theme.color.brown} !important`,
  },
}))
export default AssignmentItemStyle
