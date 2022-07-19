import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material'
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
  const handleTestCaseFormRemove = (index: number) => {
    // const list = [...inputList]
    // list.splice(index, 1)
    // handleInputList(list)
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
        >
          + RANDOM TEST
        </RegularButton>
      </Stack>
      <Stack direction='column' padding={2}>
        {testCaseList.map((testCase) => (
          <GenerateTestCase key={testCase.order} testCase={testCase} />
        ))}
      </Stack>{' '}
      <CreateTestCaseModal
        open={open}
        onClose={handleClose}
        inputList={inputList}
        output={output}
        onSave={handleTestCaseFormCreate}
      />
    </Stack>
  )
}
interface GenerateTestCaseProps {
  testCase: TestCaseCreateAssignment
}

// Form Input Create Assignment
function GenerateTestCase(props: GenerateTestCaseProps) {
  const { testCase } = props
  console.log(props)
  return (
    <React.Fragment>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Test {testCase.order + 1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Input:</Typography>
          <Typography>Output:</Typography>
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  )
}
