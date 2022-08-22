import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

/**
 * style
 *
 * Version 1.0
 *
 * Date: 29-06-2022
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 29-06-2022      HuyNT2711           Create
 */
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    height: 'auto',
    '&:hover': {
      boxShadow: '5px 5px 2px 1px rgba(0,0,0,0.5)',
      transform: 'translateY(-5px) scale(1.005) translateZ(0)',
    },
  },
  challengeCardBanner: {
    width: 125,
    height: 125,
  },
  challengeCardContainer: {
    padding: 10,
  },
  challengeCardTittle: {
    fontSize: theme.textFont.medium,
    fontWeight: '700',
    color: theme.color.black,
    textDecoration: 'none',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  challengeCardStatus: {
    fontWeight: '600',
    textTransform: 'uppercase',
    paddingRight: '10px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  challengeTotalMember: {
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
  },
  challengeCardDescription: {
    maxWidth: 700,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}))

export default useStyles
