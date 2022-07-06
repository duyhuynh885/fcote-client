import { makeStyles } from '@mui/styles'

/**
 * Style for About Us Pages
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
 * 06-07-2022         TuanLA           Create
 */

const useStyles = makeStyles((theme: any) => ({
  contenTitle: {
    marginTop: '2vh',
    fontSize: '1.5em',
  },
  subContent: {
    textOverflow: 'ellipsis', 
    overflow: 'hidden', 
    width: '50rem'
  },

}))

export default useStyles
