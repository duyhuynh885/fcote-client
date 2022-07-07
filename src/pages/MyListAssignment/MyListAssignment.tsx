import React from 'react'
import { Grid, Stack, Box } from '@mui/material'
import AssignmentItem from '../../components/Assignment/AssignmentTab/AssignmentItem'
import MyListAssignmentStyle from './style'
import TaskbarFilter from '../../components/Assignment/TaskbarFilter/TaskbarFilter'
import PaginationCard from '../../components/Common/PaginationCard'
import { Assignment, DifficultEnum, StatusEnum } from '../../redux/modules/assignment/list/type'
/**
 * My list assignment
 * <p>
 * Version 1.0
 * <p>
 * Date: 05-06-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 05-06-2022      HuyNT2711           Create
 */
interface AssignmentItemProps {
  assignment: Assignment
}

const assignments = [
  {
    assignmentId: '1',
    name: 'assignment 1',
    difficult: DifficultEnum.HARD,
    status: StatusEnum.FINISHED,
    createdBy: 'Tan Huy',
    avatarCreatedBy: 'https://picsum.photos/200',
  },
  {
    assignmentId: '2',
    name: 'assignment 2',
    difficult: DifficultEnum.HARD,
    status: StatusEnum.FINISHED,
    createdBy: 'Tan Huy',
    avatarCreatedBy: 'https://picsum.photos/200',
  },
  {
    assignmentId: '1',
    name: 'assignment 1',
    difficult: DifficultEnum.HARD,
    status: StatusEnum.FINISHED,
    createdBy: 'Tan Huy',
    avatarCreatedBy: 'https://picsum.photos/200',
  },
  {
    assignmentId: '2',
    name: 'assignment 2',
    difficult: DifficultEnum.HARD,
    status: StatusEnum.FINISHED,
    createdBy: 'Tan Huy',
    avatarCreatedBy: 'https://picsum.photos/200',
  },
  {
    assignmentId: '1',
    name: 'assignment 1',
    difficult: DifficultEnum.HARD,
    status: StatusEnum.FINISHED,
    createdBy: 'Tan Huy',
    avatarCreatedBy: 'https://picsum.photos/200',
  },
  {
    assignmentId: '2',
    name: 'assignment 2',
    difficult: DifficultEnum.HARD,
    status: StatusEnum.FINISHED,
    createdBy: 'Tan Huy',
    avatarCreatedBy: 'https://picsum.photos/200',
  },
  {
    assignmentId: '1',
    name: 'assignment 1',
    difficult: DifficultEnum.HARD,
    status: StatusEnum.FINISHED,
    createdBy: 'Tan Huy',
    avatarCreatedBy: 'https://picsum.photos/200',
  },
  {
    assignmentId: '2',
    name: 'assignment 2',
    difficult: DifficultEnum.HARD,
    status: StatusEnum.FINISHED,
    createdBy: 'Tan Huy',
    avatarCreatedBy: 'https://picsum.photos/200',
  },
]

export default function MyListAssignment() {
  const classes = MyListAssignmentStyle()

  return (
    <Stack margin={5}>
      <Box>
        <TaskbarFilter url='/assignment/create' />
      </Box>

      <Grid className={classes.containerGrid} container>
        {assignments.map((assignment) => (
          <Grid key={assignment.assignmentId} className={classes.itemGrid} item xs={3} lg={2.4}>
            <AssignmentItem assignment={assignment} />
          </Grid>
        ))}
      </Grid>
      <Box className={classes.bottom}>
        <PaginationCard />
      </Box>
    </Stack>
  )
}
