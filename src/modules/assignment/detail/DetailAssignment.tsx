import * as React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import { Stack, Divider } from '@mui/material'
import Testcase from '../../../components/assignment/detail/Testcase'
import IDE from '../../../components/assignment/general/IDE'
import useStyles from './style'
import InsideNavBar from '../../../components/common/navigation/InsideNavBar'
import RegularButton from '../../../components/common/button/RegularButton'
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot'
import TurnedInIcon from '@mui/icons-material/TurnedIn'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchDataAssignmentDetailRequest } from './action'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { ViewAssignmentDetailResponse } from './type'

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
 * 09-06-2022      HuyNT2711           Create
 */

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
  sx?: any
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

interface RouteParams {
  assignmentId: string
}

export default function DetailAssignment() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const handleChange1 = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const dispatch = useDispatch<AppDispatch>()
  const params = useParams<RouteParams>()
  const assignmentDetailState = useSelector((state: RootState) => state.detailAssignment.data)
  const { detail, languages, parameters, testCases } = assignmentDetailState
  const [assignmentDetail, setAssignmentDetail] = useState<ViewAssignmentDetailResponse>(
    assignmentDetailState ? assignmentDetailState : ({} as ViewAssignmentDetailResponse),
  )

  useEffect(() => {
    dispatch(fetchDataAssignmentDetailRequest({ id: +params.assignmentId }))
  }, [])

  useEffect(() => {
    if (assignmentDetailState) {
      setAssignmentDetail(assignmentDetailState)
    }
  }, [assignmentDetailState]) // listen only to assignmentDetailState changes

  return (
    <Stack>
      <InsideNavBar namePage={assignmentDetail.detail.title} />
      <Grid container className={classes.container}>
        <Grid className={classes.tabLeft} item xs={6} sx={{ height: '100%' }}></Grid>
        <Grid className={classes.tabRight} item xs={6} sx={{ height: '100%' }}>
          <Grid container>
            <Grid item xs={12} sx={{ height: '50%' }}></Grid>
            <Grid item xs={12} sx={{ height: '50%' }}></Grid>
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
          Submit
        </RegularButton>
      </Stack>
    </Stack>
  )
}
