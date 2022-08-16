import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

/**
 * Style for CreateAssignment
 *
 * Version 1.0
 *
 * Date: 28-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 28-06-2022         DuyHV           Create
 */

const useStyles = makeStyles((theme: Theme) => ({
  createTestCaseModelTitle: {
    fontSize: theme.textFont.medium,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}))

export default useStyles
