import {
  Box,
  Checkbox,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import {
  fetchListAssignmentRequest,
  viewListAssignmentClearStateRequest,
} from '../../../modules/assignment/list/action'
import AssignmentItemRectangle, {
  TypeAssignmentItemRectangleEnum,
} from '../../assignment/general/AssignmentItemRectangle'
import TaskbarFilter, { TypeFilterTaskBarEnum } from '../../common/toolbar/TaskbarFilter'
import useStyles from './style'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import { Assignment } from '../../../modules/assignment/list/type'

interface ChooseAssignmentFormProps {
  assignmentIdSelected: number[]
  handleChangeAssignmentIdSelected: (listId: number[]) => void
}

export default function ChooseAssignmentForm(props: ChooseAssignmentFormProps) {
  const classes = useStyles()
  const { assignmentIdSelected, handleChangeAssignmentIdSelected } = props
  const dispatch = useDispatch<AppDispatch>()
  const assignmentsState = useSelector((state: RootState) => state.listAssignment)
  const filterAssignmentState = useSelector(
    (state: RootState) => state.listAssignment.filterRequest,
  )
  const { requesting, assignments } = assignmentsState
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment[]>([])
  /**
   * clear state
   */
  useEffect(() => {
    return () => {
      dispatch(viewListAssignmentClearStateRequest())
    }
  }, [])

  useEffect(() => {
    dispatch(
      fetchListAssignmentRequest({
        ...filterAssignmentState,
        pageNumber: undefined,
        pageSize: undefined,
      }),
    )
  }, [filterAssignmentState])

  const handleToggle = (value: number) => () => {
    const currentIndex = assignmentIdSelected.indexOf(value)
    const newChecked = [...assignmentIdSelected]
    const selectedAssignmentClone = [...selectedAssignment]

    if (currentIndex === -1) {
      newChecked.push(value)
      const selected = _.find(assignments, { id: value })
      if (selected) selectedAssignmentClone.push(selected)
    } else {
      newChecked.splice(currentIndex, 1)
      selectedAssignmentClone.splice(currentIndex, 1)
    }

    setSelectedAssignment(selectedAssignmentClone)
    handleChangeAssignmentIdSelected(newChecked)
  }

  return (
    <Stack direction='row' spacing={2} sx={{ width: '100%' }}>
      <Stack
        direction='column'
        sx={{
          border: '3px solid gray',
          height: '50vh',
          paddingRight: '16px',
          paddingBottom: '16px',
          width: '65%',
        }}
      >
        <Typography className={classes.titleNameChooseAssignmentForm}>Choose Assignment</Typography>
        <Typography className={classes.descriptionSelection}>
          Please choose at least 3 and at most 6 exercises
        </Typography>
        <TaskbarFilter url='' type={TypeFilterTaskBarEnum.CREATE_CHALLENGE} />
        {requesting ? (
          <Stack alignItems='center'>
            <CircularProgress color='success' />
          </Stack>
        ) : (
          <List className={classes.scrollBarChooseAssignmentForm}>
            {assignments.map((assignment, index) => {
              return (
                <ListItem key={index} disablePadding sx={{ width: '100%' }}>
                  <ListItemButton
                    sx={{ width: '100%' }}
                    dense
                    disabled={selectedAssignment.length >= 6 ? true : false}
                    onClick={handleToggle(assignment.id)}
                  >
                    <ListItemIcon>
                      <Checkbox
                        size='medium'
                        color='success'
                        edge='start'
                        checked={assignmentIdSelected.indexOf(assignment.id) !== -1}
                        tabIndex={-1}
                        disableRipple
                      />
                    </ListItemIcon>
                    <ListItemText>
                      <AssignmentItemRectangle
                        assignment={assignment}
                        type={TypeAssignmentItemRectangleEnum.LIST_ASSIGNMENT}
                      />
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        )}
      </Stack>
      <Stack
        direction='column'
        sx={{
          border: '3px solid gray',
          maxHeight: '50vh',
          width: '35%',
        }}
      >
        <Typography sx={{ marginBottom: '10px' }} className={classes.titleNameChooseAssignmentForm}>
          My Assignment Selected
        </Typography>
        {selectedAssignment.map((assignment, index) => {
          return (
            <Stack
              key={index}
              sx={{
                padding: '5px 16px',
                width: '100%',
              }}
              direction='row'
              alignItems='center'
            >
              <Typography className={classes.noNumber}>{`${index + 1}`}</Typography>
              <Box
                sx={{
                  width: '100%',
                }}
              >
                <AssignmentItemRectangle
                  assignment={assignment}
                  type={TypeAssignmentItemRectangleEnum.SELECTED_ASSIGNMENT}
                />
              </Box>
              <IconButton onClick={handleToggle(assignment.id)}>
                <ClearOutlinedIcon fontSize='medium' />
              </IconButton>
            </Stack>
          )
        })}
      </Stack>
    </Stack>
  )
}
