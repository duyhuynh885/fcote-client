import * as React from 'react'
import Grid from '@mui/material/Grid'
import { Stack } from '@mui/material'
import useStyles from './style'
import InsideNavBar from '../../../components/common/navigation/InsideNavBar'
import RegularButton from '../../../components/common/button/RegularButton'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchDataAssignmentDetailRequest } from './action'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import DescriptionTab from '../../../components/assignment/detail/DescriptionTab'
import IDETab from '../../../components/assignment/detail/IDETab'
import TestCaseTab from '../../../components/assignment/detail/TestCaseTab'
import { fetchListLanguageRequest } from '../language/action'
import { fetchListDataTypeRequest } from '../data-type/action'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

/**
 * Detail Assignment
 * <p>
 * Version 1.0
 * <p>
 * Date: 09-06-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 09-06-2022      HuyNT2711            Create
 * 21-07-2022      DuyHV                Update UI and Logic
 */

interface RouteParams {
  assignmentId: string
}

export default function DetailAssignment() {
  const classes = useStyles()
  const dispatch = useDispatch<AppDispatch>()
  const params = useParams<RouteParams>()
  const assignmentDetailState = useSelector((state: RootState) => state.detailAssignment.data)
  const { detail, languages, parameters, testCases } = assignmentDetailState

  // Fetch language and dataType first time
  useEffect(() => {
    dispatch(fetchDataAssignmentDetailRequest({ id: +params.assignmentId }))
    dispatch(fetchListLanguageRequest())
    dispatch(fetchListDataTypeRequest())
  }, [])

  return (
    <Stack>
      <InsideNavBar namePage={detail.title} />
      <Grid container className={classes.container}>
        <Grid className={classes.tabLeft} item xs={6} sx={{ height: '100%' }} padding={3}>
          <DescriptionTab detail={detail} parameters={parameters} />
        </Grid>
        <Grid className={classes.tabRight} item xs={6} sx={{ height: '100%' }}>
          <Grid container>
            <Grid item xs={12} sx={{ height: '50%' }}>
              <IDETab />
            </Grid>
            <Grid item xs={12} sx={{ height: '50%' }}>
              <TestCaseTab />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Stack className={classes.footer} direction='row' justifyContent='flex-end'>
        <RegularButton
          color={'primary'}
          size={'sm'}
          round={false}
          fullWidth={false}
          disabled={false}
          simple={false}
          block={false}
          link={false}
          justIcon={false}
          className={''}
        >
          <KeyboardArrowUpIcon fontSize='small' /> Submit
        </RegularButton>
      </Stack>
    </Stack>
  )
}
