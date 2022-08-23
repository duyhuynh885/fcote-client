import * as React from 'react'
import Grid from '@mui/material/Grid'
import { Box, Stack, Typography } from '@mui/material'
import useStyles from './style'
import InsideNavBar from '../../../components/common/navigation/InsideNavBar'
import RegularButton from '../../../components/common/button/RegularButton'
import { Link, useParams, useRouteMatch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchDataAssignmentDetailRequest, viewAssignmentDetailClearStateRequest } from './action'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import DescriptionTab from '../../../components/assignment/detail/DescriptionTab'
import IDETab from '../../../components/assignment/detail/IDETab'
import TestCaseTab from '../../../components/assignment/detail/TestCaseTab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { runAssignmentDetailClearStateRequest, runAssignmentDetailRequest } from '../run/action'
import {
  submitAssignmentDetailClearStateRequest,
  submitAssignmentDetailRequest,
} from '../submit/action'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import Congratulation from '../../../components/common/modal/Congratulation'
import { useTranslation } from 'react-i18next'

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
  challengeId: string
  groupId: string
}

export default function DetailAssignment() {
  const classes = useStyles()
  const dispatch = useDispatch<AppDispatch>()
  const params = useParams<RouteParams>()
  const assignmentDetailState = useSelector((state: RootState) => state.detailAssignment)
  const { detail, languages, parameters, testCases, summarize } = assignmentDetailState
  const assignmentId: number = +params.assignmentId
  const challengeId: number = params.challengeId ? +params.challengeId : 1
  const [sourceCode, setSourceCode] = useState<string>(detail?.sourceCode)
  const [language, setLanguage] = useState<number>(1)
  const match = useRouteMatch()
  const [openCongratulationModal, setOpenCongratulationModal] = React.useState(false)
  const submitAssignmentState = useSelector((state: RootState) => state.submitAssignment)
  const { t } = useTranslation()

  /**
   * Fetch assignment detail for preview data
   */
  useEffect(() => {
    dispatch(fetchDataAssignmentDetailRequest({ id: assignmentId, challengeId }))
  }, [])

  /**
   * Fetch assignment detail for preview data
   */
  useEffect(() => {
    if (
      submitAssignmentState.successful &&
      summarize.passAll &&
      summarize.score === detail.score
      //  && challengeId !== 1
    ) {
      handleClickOpenCongratulationModal()
    }
  }, [submitAssignmentState])

  useEffect(() => {
    setSourceCode(detail?.sourceCode)
  }, [assignmentDetailState])

  /**
   * Clear state
   */
  useEffect(() => {
    return () => {
      dispatch(viewAssignmentDetailClearStateRequest())
      dispatch(runAssignmentDetailClearStateRequest())
      dispatch(submitAssignmentDetailClearStateRequest())
    }
  }, [])

  /**
   * Handle run test case
   */
  const handleRunTestCase = () => {
    dispatch(runAssignmentDetailRequest({ assignmentId, challengeId, sourceCode, language }))
  }

  /**
   * Handle submit assignment
   */
  const handleSubmitAssignment = () => {
    dispatch(submitAssignmentDetailRequest({ assignmentId, challengeId, sourceCode, language }))
  }

  const handleClickOpenCongratulationModal = () => {
    setOpenCongratulationModal(true)
  }

  const handleCloseCongratulationModal = () => {
    setOpenCongratulationModal(false)
  }

  return (
    <Stack className={classes.container}>
      <InsideNavBar namePage={detail.title} />
      <Congratulation open={openCongratulationModal} onClose={handleCloseCongratulationModal} />
      <Grid sx={{ height: '100% !important' }} container>
        <Grid className={classes.tabLeft} item xs={6} sx={{ height: '100%' }} padding={3}>
          <DescriptionTab detail={detail} parameters={parameters} />
        </Grid>
        <Grid container className={classes.tabRight} item xs={6} sx={{ height: '100%' }}>
          <Grid item xs={12} sx={{ height: '50%' }}>
            <IDETab
              sourceCode={sourceCode}
              onChangeSourceCode={setSourceCode}
              language={language}
              handleChangeLanguage={setLanguage}
            />
          </Grid>
          <Grid item xs={12} sx={{ height: '50%' }}>
            <TestCaseTab onRunTestCase={handleRunTestCase} testCases={testCases} detail={detail} />
          </Grid>
        </Grid>
      </Grid>
      <Stack
        className={classes.footer}
        direction='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Stack direction='row' alignItems='center'>
          {detail.isOwner && challengeId === 1 ? (
            <Box marginRight={2}>
              <Link
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                to={`${match.url}/update`}
              >
                <RegularButton
                  color={'dotted'}
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
                  <EditOutlinedIcon fontSize='small' /> {t('Edit')}
                </RegularButton>
              </Link>
            </Box>
          ) : null}
          <PersonOutlineIcon fontSize='small' />
          <Typography className={classes.totalParticipant}>{detail.totalParticipant}</Typography>
        </Stack>
        <Stack direction='row' alignItems='center'>
          <Typography className={classes.score}>
            {summarize.score}/{detail.score}
          </Typography>
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
            onClick={handleSubmitAssignment}
          >
            <KeyboardArrowUpIcon fontSize='small' /> {t('Submit')}
          </RegularButton>
        </Stack>
      </Stack>
    </Stack>
  )
}
