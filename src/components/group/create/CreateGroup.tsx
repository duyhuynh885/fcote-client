import { Avatar, Box, IconButton, Modal, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import RegularButton from '../../../components/common/button/RegularButton'
import useStyle from './style'

/**
 * Create Group component
 * <p>
 * Version 1.0
 * <p>
 * Date: 04-07-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 04-07-2022      HuyNT2711           Create
 */

interface ButtonProps {
  open: boolean
  onClose: (shown: boolean) => void
  urlNamePopup: string
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

export default function CreateGroup({ open, onClose, urlNamePopup }: ButtonProps) {
  const classes = useStyle()
  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Paper sx={style}>
          <div className={classes.root}>
            <Typography className={classes.newGroup}>{urlNamePopup}</Typography>
          </div>
          <Stack className={classes.scrollBar}>
            <Typography className={classes.titleTextField}>Group Name</Typography>
            <TextField id='outlined-basic' variant='outlined' />
            <Typography className={classes.titleTextField}>Description</Typography>
            <TextField fullWidth multiline rows={3} />
          </Stack>
          <Stack direction='row' justifyContent='space-around' alignItems='center' spacing={8}>
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
