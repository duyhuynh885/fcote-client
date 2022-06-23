import { makeStyles } from '@mui/styles'
import ErrorUnAuthorized from '../../asset/ErrorUnAuthorized.png'
import ErrorNotFound from '../../asset/ErrorNotFound.png'
import ErrorServerInternal from '../../asset/ErrorServerInternal.png'
import ErrorForbidden from '../../asset/ErrorForbidden.png'

/**
 * Style for Error Pages
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
 * 22-06-2022         TuanLA           Create
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useStyles = makeStyles((theme: any) => ({
  link: {
    textDecoration: 'none',
    fontSize: theme.textFont.small,
    fontWeight: 'bold',
  },
  unAuthorizedLayout: {
    backgroundImage: `url(${ErrorUnAuthorized})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
  },
  notFoundLayout: {
    backgroundImage: `url(${ErrorNotFound})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
  },
  errorForbiddenLayout: {
    backgroundImage: `url(${ErrorForbidden})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
  },
  errorServerInternalLayout: {
    backgroundImage: `url(${ErrorServerInternal})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
  },
  typographyError: {
    marginTop: '5vh',
    fontSize: '5em',
  },
  typographyErrorContent: {
    fontFamily:'Avenir Next',
  },
  buttonBack: {
    color: theme.color.white,
    borderRadius: '20px'
  }
}))

export default useStyles
