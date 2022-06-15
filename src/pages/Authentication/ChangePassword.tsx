import React from 'react'
import { Checkbox, Container, FormControlLabel, TextField, Typography } from '@mui/material'
import RegularButton from '../../components/Button/RegularButton'
import { RegularButtonType } from '../../types/RegularButtonType'

const regularButton: RegularButtonType = {
  color: 'primary',
  size: 'lg',
  round: false,
  children: 'Reset Password',
  fullWidth: true,
  disabled: false,
  simple: true,
  block: true,
  link: false,
  justIcon: false,
  className: 'form__custom-button',
}

export default function ChangePassword() {
  return (
    <React.Fragment>
      <Container
        sx={{
          width: 375,
          height: 'auto',
          display: 'flex',
          justifyContent: 'flex-start',
          marginRight: '10%',
          paddingTop: '5%',
          flexDirection: 'column',
        }}
      >
        <Typography variant='h1' marginBottom='1.5rem'>
          Change New Password
        </Typography>
        <form className='form'>
          <TextField
            sx={{ width: '100%', marginBottom: '1.5rem' }}
            id='outlined-password-input'
            label='Email'
          />
          <TextField
            id='outlined-password-input'
            sx={{ width: '100%', marginBottom: '1.5rem' }}
            label='Password'
            type='password'
            autoComplete='current-password'
          />
          <FormControlLabel control={<Checkbox defaultChecked />} label='Remember me' />
          <RegularButton props={regularButton} />
        </form>
      </Container>
    </React.Fragment>
  )
}
