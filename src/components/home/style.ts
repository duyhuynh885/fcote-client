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
    minWidth: '10vw',
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
    padding: '3px !important',
    maxWidth: '1em !important',
  },
  tableHeaderCellRanking: {
    maxWidth: '0.7em !important',
    textAlign: 'center',
    padding: '0px !important',
  },
  tableHeaderCellUsername: {
    maxWidth: '2em !important',
    padding: '3px !important',
  },
  textHeaderCell: {
    textAlign: 'center',
    fontWeight: '600 !important',
    color: `${theme.color.brown} !important`,
    fontSize: `${theme.textFont.large} !important`,
  },
  tableRankingCell: {
    textAlign: 'center',
    padding: '0px !important',
    maxWidth: '0.7em',
  },
  tableItemCell: {
    textAlign: 'center',
    padding: '10px 0px 10px 0px !important',
    maxWidth: '1.5em',
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
