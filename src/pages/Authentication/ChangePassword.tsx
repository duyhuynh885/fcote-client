import React from 'react'
import { Checkbox, Container, FormControlLabel, TextField, Typography } from '@mui/material'
import RegularButton from '../../components/Button/RegularButton'
import { RegularButtonType } from '../../models'
import { useTranslation } from 'react-i18next'

/**
 * Change Password Pages
 *
 * Version 1.0
 *
 * Date: 22-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 22-06-2022         DuyHV           Create
 */

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
  const { t } = useTranslation()

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
          <RegularButton {...regularButton}>{t('Login')}</RegularButton>
        </form>
      </Container>
    </React.Fragment>
  )
}
