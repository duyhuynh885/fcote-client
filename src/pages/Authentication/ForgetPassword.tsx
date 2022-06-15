import React from 'react'
import { Container, TextField, Typography } from '@mui/material'
import RegularButton from '../../components/Button/RegularButton'
import { RegularButtonType } from '../../types/RegularButtonType'

const regularButton: RegularButtonType = {
  color: 'primary',
  size: 'lg',
  round: false,
  children: 'Send To Email',
  fullWidth: true,
  disabled: false,
  simple: true,
  block: true,
  link: false,
  justIcon: false,
  className: 'form__custom-button',
}

export default function ForgetPassword() {
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
          Forget Password
        </Typography>
        <form className='form'>
          <TextField
            sx={{ width: '100%', marginBottom: '1.5rem' }}
            id='outlined-email-input'
            label='Email'
          />
          <RegularButton props={regularButton} />
        </form>
      </Container>
    </React.Fragment>
  )
}
