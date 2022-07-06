import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

/**
 * Style for challenge card components
 *
 * Version 1.0
 *
 * Date: 22-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 22-06-2022         DuyHV           Create
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
    fontSize: theme.textFont.small,
    fontWeight: '500',
  },
  challengeCardStatus: {
    fontWeight: '600',
    textTransform: 'uppercase',
  },
}))

export default useStyles
