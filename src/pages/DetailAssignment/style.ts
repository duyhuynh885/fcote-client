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

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '90vh',
    backgroundColor: theme.color.blueLight,
  },
  tabLeft: {
    borderRight: `0.5px solid ${theme.color.darkGray}`,
    backgroundColor: theme.color.white,
  },
  tabRight: {
    backgroundColor: theme.color.white,
  },
  textTitle: {
    textAlign: 'left',
    fontWeight: '700 !important',
    fontSize: '20px !important',
    color: theme.color.darkGray,
  },
  textItem: {
    textAlign: 'left',
    paddingLeft: '20px',
    fontWeight: '600 !important',
    fontSize: '14px !important',
    lineheight: '19px !important',
    color: theme.color.brown,
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
  footer: {
    width: '100%',
    backgroundColor: theme.color.white,
    borderTop: `0.5px solid ${theme.color.darkGray}`,
    padding: '5px 10px',
  },
  button: {
    padding: '10px',
    marginRight: '15px',
  },
}))

export default useStyles
