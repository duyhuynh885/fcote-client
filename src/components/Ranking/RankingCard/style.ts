import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

/**
 * Style for Ranking Card components
 *
 * Version 1.0
 *
 * Date: 24-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 24-06-2022         TuanLA           Create
 */
const useStyles = makeStyles((theme: Theme) => ({
  cardRoot: {
    color: `${theme.color.white}`,
  },
  cardHeader: {
    fontSize: '2.5rem',
  },
  rankSecondProfileAvatar: {
    width: '5rem',
    height: '5rem',
    border: `2px solid ${theme.color.white}`,
  },
  rankProfileCotent: {
    paddingLeft: '1em',
    paddingTop: '.5em',
  },
  rankProfileScore: {
    borderTop: `1px solid ${theme.color.white}`,
    justifyContent: 'center',
  },
  rankMedal: {
    display: 'flex',
    alignItems: 'center',
  },
}))
export default useStyles
