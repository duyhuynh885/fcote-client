import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
/**
 * Detail Assignment
 * <p>
 * Version 1.0
 * <p>
 * Date: 26-07-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 26-07-2022      DuyHV9           Create
 */

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '90vh',
    backgroundColor: theme.color.blueLight,
  },
  tabLeft: {
    borderRight: `0.5px solid ${theme.color.darkGray}`,
    backgroundColor: theme.color.white,
  },
  tabRight: {
    backgroundColor: theme.color.white,
  },
  footer: {
    width: '100%',
    backgroundColor: theme.color.white,
    borderTop: `0.5px solid ${theme.color.darkGray}`,
    padding: '5px 10px',
  },
  score: {
    color: theme.color.darkRed,
    fontWeight: '700',
    marginRight: theme.spacing(2),
  },
  totalParticipant: {
    fontWeight: '700',
    marginLeft: theme.spacing(1),
  },
}))

export default useStyles
