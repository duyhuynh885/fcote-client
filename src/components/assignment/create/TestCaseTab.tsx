import { Box, IconButton, Stack, Typography } from '@mui/material'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React, { useState } from 'react'
import useStyles from './style'
import CreateTestCaseModal from './CreateTestCaseModal'
import RegularButton from '../../../components/common/button/RegularButton'
import {
  InputCreateAssignment,
  OutputCreateAssignment,
  TestCaseCreateAssignment,
} from '../../../modules/assignment/create/type'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import _ from 'lodash'
import { styled } from '@mui/material/styles'

/**
 * TestCaseTab component
 *
 * Version 1.0
 *
 * Date: 28-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 28-06-2022         DuyHV           Create
 */
interface TestCaseTabProps {
  inputList: InputCreateAssignment[]
  output: OutputCreateAssignment
  testCaseList: TestCaseCreateAssignment[]
  handleTestCaseList: (testCaseList: TestCaseCreateAssignment[]) => void
}

export default function TestCaseTab(props: TestCaseTabProps) {
  const { inputList, output, testCaseList, handleTestCaseList } = props
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  /**
   * Handle open edit profile model
   */
  const handleOpen = () => {
    setOpen(true)
  }

  /**
   * Handle close edit profile model
   */
  const handleClose = () => {
    setOpen(false)
  }

  /**
   * Handle create new testCase form
   */
  const handleTestCaseFormCreate = (testCase: TestCaseCreateAssignment) => {
    handleTestCaseList([...testCaseList, testCase])
  }

  /**
   * Handle remove testCase form
   */
  const handleTestCaseFormRemove = (order: number) => {
    const list = [...testCaseList]
    const index = _.findIndex(list, { order: order })
    list.splice(index, 1)
    handleTestCaseList(list)
  }

  /**
   * Handle change testCase form
   */
  const handleTestCaseFormChange = (data: InputCreateAssignment, index: number) => {
    // const list = [...inputList]
    // const indexOfInputList = _.findIndex(list, { order: index })
    // list.splice(indexOfInputList, 1, data)
    // handleInputList(list)
  }

  return (
    <Stack sx={{ height: '100%', borderTop: '1px solid black' }}>
      <Stack
        direction='row'
        justifyContent='flex-start'
        sx={{
          padding: '5px',
          borderBottom: '1px solid black',
        }}
      >
        <Typography className={classes.testCaseTabsTitle}>TESTS</Typography>
      </Stack>
      <Stack direction='row' padding={2}>
        <RegularButton
          color={'dotted'}
          size={'sm'}
          round={false}
          fullWidth={true}
          disabled={false}
          simple={false}
          block={false}
          link={false}
          justIcon={false}
          className={''}
          onClick={handleOpen}
        >
          + ADD TEST
        </RegularButton>
      </Stack>
      <Stack direction='column' padding={2} className={classes.scrollBarTestCase}>
        {testCaseList.map((testCase) => (
          <GenerateTestCase
            key={testCase.order}
            testCase={testCase}
            handleRemove={handleTestCaseFormRemove}
          />
        ))}
      </Stack>{' '}
      <CreateTestCaseModal
        open={open}
        onClose={handleClose}
        inputList={inputList}
        output={output}
        onSave={handleTestCaseFormCreate}
        currentSize={testCaseList.length}
      />
    </Stack>
  )
}
interface GenerateTestCaseProps {
  testCase: TestCaseCreateAssignment
  handleRemove: (index: number) => void
}

// Form Input Create Assignment
function GenerateTestCase(props: GenerateTestCaseProps) {
  const { testCase, handleRemove } = props
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
            <Box>
              <IconButton aria-label='delete'>
                <EditOutlinedIcon fontSize='small' color='primary' />
              </IconButton>
              <IconButton
                onClick={() => {
                  handleRemove(testCase.order)
                }}
                aria-label='delete'
              >
                <DeleteIcon fontSize='small' color='error' />
              </IconButton>
            </Box>
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
