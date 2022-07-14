import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React, { useState } from 'react'
import useStyles from './style'
import CreateTestCaseModal from './CreateTestCaseModal'
import RegularButton from '../../../components/common/button/RegularButton'

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

export default function TestCaseTab() {
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
        <GenerateTestCase />
      </Stack>{' '}
      <CreateTestCaseModal open={open} onClose={handleClose} />
    </Stack>
  )
}
interface GenerateTestCaseProps {
  inputGenerate: any
  outputGenerate: any
}

// Form Input Create Assignment
function GenerateTestCase() {
  return (
    <React.Fragment>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Test 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Input:</Typography>
          <Typography>Output:</Typography>
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  )
}
