import { Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CreateTestCaseModal from './CreateTestCaseModal'
import useStyles from './style'
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
      <CreateTestCaseModal open={open} onClose={handleClose} />
    </Stack>
  )
}
