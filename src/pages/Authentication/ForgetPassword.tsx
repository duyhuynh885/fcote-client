import React from 'react'
import { Container, TextField, Typography } from '@mui/material'
import RegularButton from '../../components/Button/RegularButton'
import { RegularButtonType } from '../../models'
import { useTranslation } from 'react-i18next'

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
          Forget Password
        </Typography>
        <form className='form'>
          <TextField
            sx={{ width: '100%', marginBottom: '1.5rem' }}
            id='outlined-email-input'
            label='Email'
          />
          <RegularButton {...regularButton}>{t('Login')}</RegularButton>
        </form>
      </Container>
    </React.Fragment>
  )
}
