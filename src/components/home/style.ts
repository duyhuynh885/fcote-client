import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

/**
 * style
 *
 * Version 1.0
 *
 * Date: 30-06-2022
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 30-06-2022      HuyNT2711           Create
 */

const useStyles = makeStyles((theme: Theme) => ({
  containerWraper: {
    margin: '10px 10px',
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
    maxWidth: '2em',
  },
  tableHeaderCellRanking: {
    maxWidth: '0.5em !important',
    backgroundColor: `${theme.color.green} !important`,
  },
  tableHeaderCellUsername: {
    maxWidth: '1em',
    backgroundColor: `${theme.color.green} !important`,
  },
  textHeaderCell: {
    maxWidth: '1em',
    textAlign: 'center',
    fontWeight: '600 !important',
    color: `${theme.color.white} !important`,
    fontSize: `${theme.textFont.large} !important`,
  },
  tableItemCell: {
    textAlign: 'center',
    padding: '10px 0px 10px 0px',
  },
  tableItemCellOfTotal: {
    textAlign: 'center',
    padding: '10px 0px',
    maxWidth: '1em',
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
    width: 50,
    height: 50,
  },
  ranking: {
    fontWeight: '700 !important',
    color: `${theme.color.black} !important`,
    fontSize: `${theme.textFont.extraLarge} !important`,
  },
}))

export default useStyles
