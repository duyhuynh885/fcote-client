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
  challengeCardBanner: {
    width: 125,
    height: 125,
  },
  challengeCardContainer: {
    padding: 10,
  },
  challengeCardTittle: {
    fontSize: theme.textFont.medium,
    fontWeight: '600',
    color: theme.color.black,
    textDecoration: 'none',
  },
  challengeCardStatus: {
    fontWeight: '600',
    textTransform: 'uppercase',
    paddingRight: '10px',
  },
}))

export default useStyles
