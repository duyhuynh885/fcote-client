import React, { useEffect } from 'react'
import { Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import RegularButton from '../../components/Button/RegularButton'
import { RegularButtonType } from '../../models'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useStyles from './style'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '../../hooks/hooks'
import loginRequest from '../../redux/modules/auth/action/loginAction'
import { LoginErrorPayload, LoginRequestPayload } from '../../redux/modules/auth/type'

const regularButton: RegularButtonType = {
  color: 'primary',
  size: 'lg',
  round: false,
  fullWidth: true,
  disabled: false,
  simple: true,
  block: true,
  link: false,
  justIcon: false,
  className: 'form__custom-button',
}

export default function Login() {
  const classes = useStyles()
  const { register, handleSubmit } = useForm()
  const { t } = useTranslation()
  const rest = {
    type: 'submit',
  }
  const dispatch = useAppDispatch()

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      email: { value: string }
      password: { value: string }
    }
    const email = target.email.value // typechecks!
    const password = target.password.value
    dispatch(loginRequest({ email, password }))
  }

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
          {t('WelcomeBack')}
        </Typography>
        <form onSubmit={onSubmit}>
          <TextField
            sx={{ width: '100%', marginBottom: '1.5rem' }}
            id='outlined-email-input'
            type='email'
            autoComplete='email'
            label='Email'
            {...register('email')}
          />
          <TextField
            id='outlined-password-input'
            sx={{ width: '100%', marginBottom: '1.5rem' }}
            label='Password'
            type='password'
            autoComplete='current-password'
            {...register('password')}
          />
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <FormControlLabel
                className={classes.link}
                control={<Checkbox defaultChecked />}
                label='Remember me'
                sx={{ marginBottom: '1.5rem' }}
              />
            </Grid>
            <Grid item xs={8}>
              <Link to='/forget-password' className={classes.link}>
                <Typography noWrap> {t('ForgetPassword')}</Typography>
              </Link>
            </Grid>
          </Grid>
          <RegularButton {...rest} {...regularButton}>
            {t('Login')}
          </RegularButton>
        </form>
      </Container>
    </React.Fragment>
  )
}
