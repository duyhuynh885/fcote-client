import { makeStyles } from '@mui/styles'

/**
 * Style for Contacts Us Pages
 *
 * Version 1.0
 *
 * Date: 07-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 07-07-2022         TuanLA           Create
 */

const useStyles = makeStyles(() => ({
  title: {
    fontSize: '5em',
    marginTop: '5vh',
  },
  contentTitle: {
    marginTop: '3vh',
    fontSize: '1.5em',
  },
  subContent: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '50rem',
  },
}))

export default useStyles
