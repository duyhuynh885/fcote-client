import { Stack, styled, Typography } from '@mui/material'
import React from 'react'
import RegularButton from '../../common/button/RegularButton'
import useStyles from './style'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import { Detail, TestCaseResult } from '../../../modules/assignment/detail/type'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { RootState } from '../../../apps/ReduxContainer'
import { useSelector } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import _ from 'lodash'
import { useTranslation } from 'react-i18next'

/**
 * IDETabProps component
 *
 * Version 1.0
 *
 * Date: 26-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 26-07-2022         DuyHV           Create
 */

interface TestCaseTabProps {
  detail: Detail
  testCases: TestCaseResult[]
  onRunTestCase: () => void
}

export default function TestCaseTab(props: TestCaseTabProps) {
  const { detail, testCases, onRunTestCase } = props
  const classes = useStyles()
  const runAssignmentState = useSelector((state: RootState) => state.runAssignment)
  const submitAssignmentState = useSelector((state: RootState) => state.submitAssignment)
  const { requesting } = runAssignmentState
  const sortedByPrivate = [
    ...testCases.filter((c) => c.isPrivate === false),
    ...testCases.filter((c) => c.isPrivate === true),
  ]
  const { t } = useTranslation()

  /**
   * Handle show result description of run and submit testcase
   * @returns testResult description
   */
  const handleShowResultRunTestCase = () => {
    if (runAssignmentState.successful || submitAssignmentState.successful) {
      const countPassedTestCase = _.filter(testCases, function (o) {
        if (o.isPassed) return o
      }).length
      if (countPassedTestCase === detail.totalTestCase) {
        return (
          <Stack marginBottom='10px' direction='row' alignItems='center'>
            <Typography className={`${classes.testResultDescription} ${classes.successText}`}>
              {t('AllTestsPassed')}
            </Typography>
          </Stack>
        )
      } else
        return (
          <Stack marginBottom='10px' direction='row' alignItems='center'>
            <WarningAmberIcon
              fontSize='small'
              className={classes.iconWarning}
              sx={{ marginRight: 1 }}
            />
            <Typography className={`${classes.testResultDescription} ${classes.failedText}`}>
              {t('TestsPassed')}: {countPassedTestCase}/{detail.totalTestCase}.
            </Typography>
          </Stack>
        )
    }
    return null
  }

  return (
    <Stack sx={{ height: '100%', borderTop: '1px solid black' }}>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{
          padding: '5px 10px',
          borderBottom: '1px solid black',
        }}
      >
        <Typography className={classes.testCaseTabsTitle}>{t('Tests').toUpperCase()}</Typography>
        <RegularButton
          color={'primary'}
          size={'sm'}
          round={false}
          fullWidth={false}
          disabled={requesting}
          simple={false}
          block={false}
          link={false}
          justIcon={false}
          className={''}
          onClick={onRunTestCase}
        >
          <PlayArrowOutlinedIcon fontSize='small' /> {t('RunTests')}
        </RegularButton>
      </Stack>
      {requesting ? (
        <Stack marginTop={5} alignItems='center'>
          <CircularProgress color='success' />
        </Stack>
      ) : (
        <React.Fragment>
          <Stack direction='column' padding={2} className={classes.scrollBarTestCase}>
            {handleShowResultRunTestCase()}
            {sortedByPrivate.map((testCase, index) => (
              <GenerateTestCase key={index} index={index} testCase={testCase} />
            ))}
          </Stack>
        </React.Fragment>
      )}
    </Stack>
  )
}

interface GenerateTestCaseProps {
  testCase: TestCaseResult
  index: number
}

// Form Input Create Assignment
function GenerateTestCase(props: GenerateTestCaseProps) {
  const { testCase, index } = props
  const classes = useStyles()
  const { t } = useTranslation()

  const handleShowPassedTestCase = (isPassed: boolean | undefined) => {
    if (typeof isPassed !== 'undefined') {
      return isPassed ? (
        <CheckCircleOutlineIcon fontSize='small' className={classes.iconSuccess} />
      ) : (
        <WarningAmberIcon fontSize='small' className={classes.iconWarning} />
      )
    }
    return null
  }

  const handleShowActualOutput = (actualOutput: string | undefined) => {
    if (typeof actualOutput !== 'undefined') {
      return (
        <Stack direction='row'>
          <Typography
            sx={{
              width: '150px',
            }}
            className={classes.tabTitle}
          >
            {t('Output')}:
          </Typography>
          <Typography className={classes.inputTestCaseDescription}>
            {testCase.actualOutput}
          </Typography>
        </Stack>
      )
    }
    return null
  }

  return (
    <React.Fragment>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Stack
            sx={{ width: '100%' }}
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            spacing={2}
          >
            <Typography className={classes.titleTextField}>Test {index + 1}</Typography>
            <Stack direction='row' alignItems='center' spacing={2}>
              {testCase.isPrivate && <LockOutlinedIcon fontSize='small' />}
              {handleShowPassedTestCase(testCase.isPassed)}
            </Stack>
          </Stack>
        </AccordionSummary>
        {testCase.isPrivate ? (
          <AccordionDetails>
            <Typography className={classes.tabTitle}>{t('Hidden')}</Typography>
          </AccordionDetails>
        ) : (
          <AccordionDetails>
            <Stack direction='row'>
              <Typography
                sx={{
                  width: '150px',
                }}
                className={classes.tabTitle}
              >
                {t('Input')}:
              </Typography>
              <Stack direction='column'>
                {testCase.input.map((_input) => (
                  <Typography
                    className={classes.inputTestCaseDescription}
                    key={_input.order}
                  >{`${_input.name}: ${_input.value}`}</Typography>
                ))}
              </Stack>
            </Stack>
            {handleShowActualOutput(testCase.actualOutput)}
            <Stack direction='row'>
              <Typography
                sx={{
                  width: '150px',
                }}
                className={classes.tabTitle}
              >
                {t('ExceptedOutput')}:
              </Typography>
              <Typography className={classes.inputTestCaseDescription}>
                {testCase.output.value}
              </Typography>
            </Stack>
          </AccordionDetails>
        )}
      </Accordion>
    </React.Fragment>
  )
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    margin: `${theme.spacing(0)} ${theme.spacing(1)}`,
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))
