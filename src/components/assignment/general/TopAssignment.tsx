import { Theme, Paper, Stack, Typography, CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Assignment } from '../../../modules/assignment/list/type'
import { makeStyles } from '@mui/styles'
import AssignmentItemRectangle from './AssignmentItemRectangle'
import { useSelector } from 'react-redux'
import { RootState } from '../../../apps/ReduxContainer'

/**
 * Top Assignment component
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
 * 30-07-2022         HuyNT2711           Create
 */

const useStyles = makeStyles((theme: Theme) => ({
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
  title: {
    fontSize: theme.textFont.large,
    fontWeight: 'bold',
    paddingLeft: '20px',
  },
}))

interface TopAssignmentProps {
  listAssignment: Assignment[]
}

const List: React.FC<TopAssignmentProps> = (props) => {
  const listAssignment = props.listAssignment
  return (
    <>
      {listAssignment.map((assignment) => (
        <AssignmentItemRectangle key={assignment.id} assignment={assignment} />
      ))}
    </>
  )
}

const TopAssignment: React.FC<TopAssignmentProps> = (props) => {
  const topAssignmentsState = useSelector((state: RootState) => state.listAssignment)
  const classes = useStyles()
  const { listAssignment } = props

  return (
    <Paper
      elevation={4}
      square
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      <Stack direction='column' spacing={2}>
        <Box>
          <Typography className={classes.title}>Top Assignment</Typography>
        </Box>
        <Stack spacing={2} className={classes.scrollBar}>
          {topAssignmentsState.requesting ? (
            <Stack alignItems='center' justifyContent='center'>
              <CircularProgress color='success' />
            </Stack>
          ) : (
            <List listAssignment={listAssignment} />
          )}
        </Stack>
      </Stack>
    </Paper>
  )
}

export default TopAssignment
