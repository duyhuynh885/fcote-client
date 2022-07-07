import { makeStyles } from '@mui/styles'

/**
 * Group Card
 *
 * Version 1.0
 *
 * Date: 4-07-2022
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 4-07-2022      HuyNT2711           Create
 */

const useStyles = makeStyles((theme: any) => ({
  wrapper: {
    width: '100%',
    height: 'auto',
    border: ` 1px solid ${theme.color.brown} !important`,
    padding: '12px',
  },
  groupCardBanner: {
    width: 140,
    height: 140,
  },
  challengeCardContainer: {
    padding: 10,
  },
  groupCardTittle: {
    fontSize: `${theme.textFont.supperLarge} !important`,
    fontWeight: '600 !important',
    color: `${theme.color.black} !important`,
    textDecoration: 'none',
  },
  challengeCardStatus: {
    fontWeight: '600',
    textTransform: 'uppercase',
    paddingRight: '10px',
  },
  box: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  text: {
    marginLeft: '10px',
    fontWeight: '500 !important',
    fontSize: `${theme.textFont.medium} !important`,
  },
}))

export default useStyles
