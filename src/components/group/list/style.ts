import { Theme } from '@mui/material'
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

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    width: '100%',
    height: 'auto',
    padding: '12px',
    '&:hover': {
      boxShadow: '5px 5px 2px 1px rgba(0,0,0,0.5)',
      transform: 'translateY(-5px) scale(1.005) translateZ(0)',
    },
  },
  groupCardBanner: {
    width: 120,
    height: 120,
  },
  challengeCardContainer: {
    padding: 10,
  },
  groupCardTittle: {
    fontSize: `${theme.textFont.large} !important`,
    fontWeight: '700 !important',
    color: `${theme.color.black} !important`,
    textDecoration: 'none',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  challengeCardStatus: {
    fontWeight: '600',
    textTransform: 'uppercase',
    paddingRight: '10px',
  },
  text: {
    marginLeft: '10px',
    fontWeight: '600 !important',
    fontSize: `${theme.textFont.medium} !important`,
  },
}))

export default useStyles
