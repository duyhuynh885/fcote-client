import React from 'react'
import { Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import RegularButton from '../../components/Button/RegularButton'
import { RegularButtonType } from '../../models'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, Redirect } from 'react-router-dom'
import useStyles from './style'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '../../hooks/hooks'
import { isAuth } from '../../utils/auth'
import { loginRequest } from '../../redux/modules/auth/action/authAction'

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

type FormValues = {
  email: string
  password: string
}

export default function Login() {
  const classes = useStyles()
  const { register, handleSubmit } = useForm<FormValues>()
  const { t } = useTranslation()
  const rest = {
    type: 'submit',
  }
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { email, password } = data
    dispatch(loginRequest({ email, password }))
  }

  return (
    <React.Fragment>
      {isAuth() ? <Redirect to='/' /> : null}

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
        <form onSubmit={handleSubmit(onSubmit)}>
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
