import { Box, IconButton, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import RegularButton from '../../common/button/RegularButton'
import useStyles from './style'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { TestCaseCreateAssignment } from '../../../modules/assignment/create/type'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'

export default function TestCaseTab() {
  const classes = useStyles()
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
          disabled={false}
          simple={false}
          block={false}
          link={false}
          justIcon={false}
          className={''}
        >
          <PlayArrowOutlinedIcon fontSize='small' /> Run Tests
        </RegularButton>
      </Stack>
      <Stack direction='row' padding={2}></Stack>
      <Stack direction='column' padding={2} className={classes.scrollBarTestCase}></Stack>
    </Stack>
  )
}

interface GenerateTestCaseProps {
  testCase: TestCaseCreateAssignment
  handleRemove: (index: number) => void
  handleEdit: (testCase: TestCaseCreateAssignment) => void
}

// Form Input Create Assignment
function GenerateTestCase(props: GenerateTestCaseProps) {
  const { testCase, handleRemove, handleEdit } = props
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
            <Typography className={classes.titleTextField}>TEST {testCase.order}</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction='row'>
            <Typography
              sx={{
                width: '80px',
              }}
              className={classes.tabTitle}
            >
              Input:
            </Typography>
            <Stack direction='column'>
              {testCase.input.map((_input) => (
                <Typography
                  key={_input.order}
                  className={classes.tabTitle}
                >{`${_input.name} ${_input.value}`}</Typography>
              ))}
            </Stack>
          </Stack>
          <Stack direction='row'>
            <Typography
              sx={{
                width: '80px',
              }}
              className={classes.tabTitle}
            >
              Output:
            </Typography>
            <Typography className={classes.tabTitle}>{testCase.output.value}</Typography>
          </Stack>
        </AccordionDetails>
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
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))
