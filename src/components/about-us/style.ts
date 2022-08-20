
import { makeStyles } from '@mui/styles'

/**
 * Style for About Us card components
 *
 * Version 1.0
 *
 * Date: 06-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 06-07-2022         TuanLA           Create
 */
const useStyles = makeStyles((theme: any) => ({
  cardHeader: {
    minHeight: '10vh',
    backgroundColor: `${theme.color.green}`
  },
  cardContent: {
    marginTop: '10vh',
    minHeight: '20vh',
  },
  avatar: {
    width: 100, 
    height: 100,
    position: 'absolute',
  },
}))

export default useStyles