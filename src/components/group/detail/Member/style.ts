import { makeStyles } from '@mui/styles'

/**
 * Create Member component
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
  containerWraper: {
    marginLeft: '6%',
    marginTop: '10px',
    maxWidth: '80vw',
    maxHeight: '50%',
  },
  table: {
    minWidth: '40vw',
  },
  tableContainer: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  tableRowBody1: {
    backgroundColor: `${theme.color.lightBlue} !important`,
  },
  tableRowBody2: {
    backgroundColor: `${theme.color.white} !important`,
  },
  tableHeaderCell: {
    backgroundColor: `${theme.color.green} !important`,
    maxWidth: '5em',
  },
  tableHeaderCellFinal: {
    backgroundColor: `${theme.color.green} !important`,
    maxWidth: '1em',
  },
  tableHeaderCellRanking: {
    maxWidth: '3em',
    backgroundColor: `${theme.color.green} !important`,
  },
  tableHeaderCellUsername: {
    maxWidth: '6em',
    backgroundColor: `${theme.color.green} !important`,
  },
  textHeaderCell: {
    textAlign: 'center',
    fontWeight: '600 !important',
    color: `${theme.color.white} !important`,
    fontSize: `${theme.textFont.large} !important`,
  },
  tableItemCell: {
    textAlign: 'center',
    maxWidth: '4em',
    padding: '10px 0px 10px 0px',
  },
  tableItemCellOfTotal: {
    textAlign: 'center',
    padding: '10px 0px',
    maxWidth: '4em',
  },
  textPoint: {
    fontWeight: '700 !important',
    color: `${theme.color.black} !important`,
    fontSize: `${theme.textFont.small} !important`,
  },
  textPointOfTotal: {
    marginTop: '0px !important',
    fontWeight: '700 !important',
    color: `${theme.color.red} !important`,
    fontSize: `${theme.textFont.small} !important`,
  },
  textItemCell: {
    textAlign: 'center',
    fontWeight: '600 !important',
    color: `${theme.color.brown} !important`,
    fontSize: `${theme.textFont.superSmall} !important`,
  },
  avatarWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textUsername: {
    fontWeight: '600 !important',
    color: `${theme.color.black} !important`,
    fontSize: `${theme.textFont.small} !important`,
    textAlign: 'left',
  },
  textAddressOrganization: {
    fontWeight: '600 !important',
    color: `${theme.color.brown} !important`,
    fontSize: `${theme.textFont.extraSmall} !important`,
    textAlign: 'left',
  },
  assignmentWardIcon: {
    width: 40,
    height: 40,
  },
  ranking: {
    fontWeight: '700 !important',
    color: `${theme.color.black} !important`,
    fontSize: `${theme.textFont.extraLarge} !important`,
  },
}))

export default useStyles
