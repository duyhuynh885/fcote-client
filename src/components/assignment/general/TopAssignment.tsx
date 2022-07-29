import { Theme, Paper, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Assignment } from '../../../modules/assignment/list/type'
import { makeStyles } from '@mui/styles'
import MyAssignmentItem from './MyAssignmentItem'

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
  },
}))

interface TopAssignmentProps {
  listAssignment: Assignment[]
}
const TopAssignment: React.FC = (props) => {
  const classes = useStyles()
  // const { listAssignment } = props

  return (
    <Paper
      elevation={8}
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
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
        </Stack>
      </Stack>
    </Paper>
  )
}

export default TopAssignment
