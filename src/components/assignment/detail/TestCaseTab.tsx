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
import { Detail, TestCase } from '../../../modules/assignment/detail/type'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { RootState } from '../../../apps/ReduxContainer'
import { useSelector } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress'
import _ from 'lodash'

interface TestCaseTabProps {
  detail: Detail
  testCases: TestCase[]
  onRunTestCase: () => void
}
export default function TestCaseTab(props: TestCaseTabProps) {
  const { detail, testCases, onRunTestCase } = props
  const classes = useStyles()
  const runAssignmentState = useSelector((state: RootState) => state.runAssignment)
  const { requesting, result } = runAssignmentState

  const handleShowResultRunTestCase = () => {
    if (result && result.length > 0) {
      const countPassedTestCase = _.filter(result, function (o) {
        if (o.isPassed) return o
      }).length
      return (
        <Stack
          sx={{
            padding: '10px 0px 0px 16px',
          }}
          direction='row'
          alignItems='center'
        >
          <WarningAmberIcon fontSize='small' className={classes.iconWarning} />
          <Typography className={classes.testResultDescription}>
            Tests passed: {countPassedTestCase}/{detail.totalTestCase}.
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
        <Typography className={classes.testCaseTabsTitle}>TESTS</Typography>
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
          <PlayArrowOutlinedIcon fontSize='small' /> Run Tests
        </RegularButton>
      </Stack>
      {requesting ? (
        <Stack alignItems='center'>
          <CircularProgress color='success' />
        </Stack>
      ) : (
        <React.Fragment>
          {handleShowResultRunTestCase()}
          <Stack direction='column' padding={2} className={classes.scrollBarTestCase}>
            {testCases.map((testCase, index) => (
              <GenerateTestCase key={index} testCase={testCase} />
            ))}
          </Stack>
        </React.Fragment>
      )}
    </Stack>
  )
}

interface GenerateTestCaseProps {
  testCase: TestCase
}

// Form Input Create Assignment
function GenerateTestCase(props: GenerateTestCaseProps) {
  const { testCase } = props
  const classes = useStyles()
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
            <Typography className={classes.titleTextField}>Test {testCase.order}</Typography>
            {/* <WarningAmberIcon fontSize='small' className={classes.iconWarning} />
            <CheckCircleOutlineIcon fontSize='small' className={classes.iconSuccess} /> */}
            {testCase.isPrivate && <LockOutlinedIcon fontSize='small' />}
          </Stack>
        </AccordionSummary>
        {testCase.isPrivate ? (
          <AccordionDetails>
            <Typography className={classes.tabTitle}>Hidden</Typography>
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
                Input:
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
            <Stack direction='row'>
              <Typography
                sx={{
                  width: '150px',
                }}
                className={classes.tabTitle}
              >
                Output:
              </Typography>
              <Typography className={classes.inputTestCaseDescription}>null</Typography>
            </Stack>
            <Stack direction='row'>
              <Typography
                sx={{
                  width: '150px',
                }}
                className={classes.tabTitle}
              >
                Expected Output:
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
