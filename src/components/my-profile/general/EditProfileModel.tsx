import { Avatar, IconButton, Modal, Paper, Stack, TextField } from '@mui/material'
import React from 'react'
import RegularButton from '../../common/button/RegularButton'
import useStyles from '../style'

/**
 * Edit profile model component
 *
 * Version 1.0
 *
 * Date: 21-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 21-06-2022         DuyHV           Create
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
export default function EditProfileModel({ open, onClose }: ButtonProps) {
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
          <div className={classes.root}>
            <input accept='image/*' className={classes.input} id='icon-button-file' type='file' />
            <label htmlFor='icon-button-file'>
              <IconButton color='primary' aria-label='upload picture' component='span'>
                <Avatar
                  src='https://hanoimoi.com.vn/Uploads/images/tuandiep/2022/02/12/ro.jpg'
                  className={classes.large}
                />
              </IconButton>
            </label>
          </div>
          <Stack className={classes.scrollBar}>
            <TextField
              sx={{ width: '100%', marginBottom: '1.5rem' }}
              id='outlined-fullName-input'
              label='Full Name'
            />
            <TextField
              id='outlined-organization-input'
              sx={{ width: '100%', marginBottom: '1.5rem' }}
              label='Organization'
            />
            <TextField
              sx={{ width: '100%', marginBottom: '1.5rem' }}
              id='outlined-email-input'
              label='Email'
            />
            <TextField
              id='outlined-city-input'
              sx={{ width: '100%', marginBottom: '1.5rem' }}
              label='City'
            />
            <TextField
              sx={{ width: '100%', marginBottom: '1.5rem' }}
              id='outlined-phone-input'
              label='Phone'
            />
            <TextField
              id='outlined-gender-input'
              sx={{ width: '100%', marginBottom: '1.5rem' }}
              label='Gender'
            />
            <TextField
              id='outlined-description-input'
              sx={{ width: '100%', marginBottom: '1.5rem' }}
              label='Description'
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
