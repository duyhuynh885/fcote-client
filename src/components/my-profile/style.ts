import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

/**
 * Style for My Profile components
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
  // Style for profile user
  myProfileAvatar: {
    width: '10rem',
    height: '10rem',
    border: `5px solid ${theme.color.green}`,
  },
  myProfileFullName: {
    fontSize: theme.textFont.extraLarge,
    fontWeight: 'bold',
    height: '30px',
  },
  myProfileUsername: {
    fontSize: theme.textFont.small,
    fontWeight: 'bold',
    height: '30px',
  },
  myProfileContainerDescription: {
    display: 'flex',
    backgroundColor: theme.color.green,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  description: {
    paddingTop: '34px',
    display: 'flex',
    fontSize: theme.textFont.large,
    fontWeight: 'bold',
  },
  title: {
    fontSize: theme.textFont.large,
    fontWeight: 'bold',
    paddingLeft: '20px',
  },
  // Style for assignment completed
  assignmentWardIcon: {
    width: 150,
    height: 150,
  },
  assignmentTotalScoreContainer: {
    backgroundColor: theme.color.yellow,
    height: 40,
    marginTop: 10,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  assignmentTotalScore: {
    fontSize: theme.textFont.large,
    fontWeight: 'bold',
  },
  assignmentWardTitle: {
    fontSize: theme.textFont.medium,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  // Style for challenge completed
  scrollBar: {
    height: '330px',
    padding: '10px 20px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0.3em',
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.color.green,
      borderRadius: '10px',
    },
  },
  root: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  large: {
    width: 150,
    height: 150,
  },
}))

export default useStyles
