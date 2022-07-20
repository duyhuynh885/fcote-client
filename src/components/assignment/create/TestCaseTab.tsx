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
import EditTestCaseModal from './EditTestCaseModal'

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
  const [openCreateModal, setOpenCreateModal] = useState(false)
  const [testCaseEdit, setTestCaseEdit] = useState<TestCaseCreateAssignment>()
  const [openEditModal, setOpenEditModal] = useState(false)

  /**
   * Handle open create testCase model
   */
  const handleOpenCreateTestCaseModal = () => {
    setOpenCreateModal(true)
  }

  /**
   * Handle close testCase model
   */
  const handleCloseCreateTestCaseModal = () => {
    setOpenCreateModal(false)
  }

  /**
   * Handle open edit testCase model
   */
  const handleOpenEditTestCaseModal = () => {
    setOpenEditModal(true)
  }

  /**
   * Handle close testCase model
   */
  const handleCloseEditTestCaseModal = () => {
    setOpenEditModal(false)
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
   * Handle edit testCase form
   */
  const handleTestCaseFormEdit = (data: TestCaseCreateAssignment) => {
    const list = [...testCaseList]
    const index = _.findIndex(list, { order: data.order })
    list.splice(index, 1, data)
    handleTestCaseList(list)
    setTestCaseEdit(undefined)
  }

  /**
   * Handle open modal edit testCase
   */
  const handleEditTestCase = (data: TestCaseCreateAssignment) => {
    setTestCaseEdit(data)
    handleOpenEditTestCaseModal()
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
          onClick={handleOpenCreateTestCaseModal}
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
            handleEdit={handleEditTestCase}
          />
        ))}
      </Stack>
      <CreateTestCaseModal
        open={openCreateModal}
        onClose={handleCloseCreateTestCaseModal}
        inputList={inputList}
        output={output}
        onSave={handleTestCaseFormCreate}
        currentSize={testCaseList.length}
      />
      <EditTestCaseModal
        open={openEditModal}
        testCase={testCaseEdit}
        onClose={handleCloseEditTestCaseModal}
        inputList={inputList}
        output={output}
        onSave={handleTestCaseFormEdit}
        currentSize={testCaseList.length}
      />
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
            <Box>
              <IconButton
                onClick={() => {
                  handleEdit(testCase)
                }}
                aria-label='edit'
              >
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
