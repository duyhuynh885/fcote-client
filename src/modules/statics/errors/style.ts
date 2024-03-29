import { makeStyles } from '@mui/styles'
import ErrorUnAuthorized from '../../../assets/ErrorUnAuthorized.png'
import ErrorNotFound from '../../../assets/ErrorNotFound.png'
import ErrorServerInternal from '../../../assets/ErrorServerInternal.png'
import ErrorForbidden from '../../../assets/ErrorForbidden.png'
import { Theme } from '@mui/material'

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
const useStyles = makeStyles((theme: Theme) => ({
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
    fontFamily: 'Open Sans',
  },
  buttonBack: {
    color: theme.color.white,
    borderRadius: '20px',
  },
}))

export default useStyles
