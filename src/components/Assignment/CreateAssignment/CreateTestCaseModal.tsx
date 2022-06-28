import React from 'react'
import {
  Avatar,
  Divider,
  IconButton,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import RegularButton from '../../Button/RegularButton'
import useStyles from './style'

/**
 * Create test case model component
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

interface ButtonProps {
  open: boolean
  onClose: (shown: boolean) => void
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  borderRadius: 3,
  p: 4,
}

export default function CreateTestCaseModal({ open, onClose }: ButtonProps) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Paper sx={style}>
          <Typography className={classes.createTestCaseModelTitle}>Add new test case</Typography>
          <Stack>
            <Typography className={classes.titleNameInput}>Input</Typography>
            <Typography className={classes.titleTextField}>Arg1 (Integer)</Typography>
            <TextField
              fullWidth
              id='outlined-basic'
              variant='outlined'
              required
              // {...nameFiled}
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              //   nameFiled.onChange(e)
              //   handleOnChange(e)
              // }}
            />
            <Typography className={classes.titleTextField}>Arg2 (Integer)</Typography>
            <TextField
              fullWidth
              id='outlined-basic'
              variant='outlined'
              required
              // {...nameFiled}
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              //   nameFiled.onChange(e)
              //   handleOnChange(e)
              // }}
            />
            <Divider sx={{ margin: '10px 0px' }} />
            <Typography className={classes.titleNameInput}>Excepted Output</Typography>
            <Typography className={classes.titleTextField}>Integer</Typography>
            <TextField
              fullWidth
              id='outlined-basic'
              variant='outlined'
              required
              // {...nameFiled}
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              //   nameFiled.onChange(e)
              //   handleOnChange(e)
              // }}
            />
          </Stack>
          <Stack
            direction='row'
            justifyContent='space-around'
            alignItems='center'
            spacing={8}
            sx={{
              paddingTop: 2,
              paddingRight: 2,
              paddingLeft: 2,
            }}
          >
            <RegularButton
              color={'danger'}
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
              Cancel
            </RegularButton>
            <RegularButton
              color={'success'}
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
              Save
            </RegularButton>
          </Stack>
        </Paper>
      </Modal>
    </React.Fragment>
  )
}
