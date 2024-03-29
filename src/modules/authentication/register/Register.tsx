import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { object, string, TypeOf } from 'zod'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import RegularButton from '../../../components/common/button/RegularButton'
import ErrorMessage from '../../../components/common/text/ErrorMessage'
import history from '../../../configs/routing/history'
import { isAuth } from '../../../utils/auth'
import useStyles from '../style'
import { registerClearStateRequest, registerRequest } from './action'

/**
 * Register Pages
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

export default function Register() {
  const registerSchema = object({
    firstName: string().max(32, 'First name must be less than 100 characters').trim(),
    lastName: string().max(32, 'Last name must be less than 100 characters').trim(),
    username: string()
      .max(32, 'User name must be less than 100 characters')
      .regex(
        new RegExp('^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$'),
        'Username is invalid format',
      )
      .trim(),
    email: string()
      .email('Email is invalid')
      .regex(
        new RegExp('^[a-z0-9](\\.?[a-z0-9]){5,}@g(oogle)?mail\\.com$'),
        'Email is format abc@gmail.com',
      )
      .trim(),
    password: string()
      .min(8, 'Password must be more than 8 characters')
      .max(32, 'Password must be less than 32 characters')
      .trim(),
    confirmPassword: string().trim(),
    // terms: literal(true),
  }).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  })
  type RegisterInput = TypeOf<typeof registerSchema>
  const classes = useStyles()
  const { t } = useTranslation()
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  })
  const dispatch = useDispatch<AppDispatch>()
  const registerState = useSelector((state: RootState) => state.register)

  const rest = {
    type: 'submit',
  }

  useEffect(() => {
    return () => {
      dispatch(registerClearStateRequest())
    }
  }, [])

  /**
   * Load error or success message if exist
   */
  useEffect(() => {
    if (registerState.errors) {
      reset()
    }
    if (registerState.successful) {
      dispatch(registerClearStateRequest())
      reset()
    }
  }, [registerState.successful, registerState.errors])

  /**
   * Handle registers
   * @param data RegisterInput
   */
  const onSubmit: SubmitHandler<RegisterInput> = (data) => {
    const { firstName, lastName, username, email, password } = data
    dispatch(registerRequest({ firstName, lastName, username, email, password }))
  }

  return (
    <React.Fragment>
      {isAuth() ? history.push('/') : null}

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Box sx={{ height: '100vh', zIndex: '-1' }} className={classes.authLayout} />
        </Grid>
        <Grid item xs={6}>
          <Container
            sx={{
              width: 375,
              height: 'auto',
              display: 'flex',
              justifyContent: 'flex-start',
              paddingTop: '5%',
              flexDirection: 'column',
            }}
          >
            <Typography variant='h1' marginBottom='1.5rem'>
              {t('CreateAccount')}
            </Typography>
            {registerState.errors ? <ErrorMessage error={registerState.errors} /> : null}
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                  <TextField
                    color='success'
                    {...register('firstName')}
                    required
                    sx={{ width: '100%', marginBottom: '1.5rem' }}
                    id='outlined-firstName-input'
                    label={t('FirstName')}
                    error={!!errors['firstName']}
                    helperText={errors['firstName'] ? errors['firstName'].message : ''}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    color='success'
                    {...register('lastName')}
                    required
                    sx={{ width: '100%', marginBottom: '1.5rem' }}
                    id='outlined-lastName-input'
                    label={t('LastName')}
                    error={!!errors['lastName']}
                    helperText={errors['lastName'] ? errors['lastName'].message : ''}
                  />
                </Grid>
              </Grid>
              <TextField
                color='success'
                {...register('username')}
                required
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                id='outlined-userName-input'
                label={t('Username')}
                error={!!errors['username']}
                helperText={errors['username'] ? errors['username'].message : ''}
              />
              <TextField
                color='success'
                {...register('email')}
                required
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                id='outlined-email-input'
                label='Email'
                error={!!errors['email']}
                helperText={errors['email'] ? errors['email'].message : ''}
                {...register('email')}
              />
              <TextField
                color='success'
                {...register('password')}
                required
                id='outlined-password-input'
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                label={t('Password')}
                type='password'
                error={!!errors['password']}
                helperText={errors['password'] ? errors['password'].message : ''}
                {...register('password')}
              />
              <TextField
                color='success'
                {...register('confirmPassword')}
                required
                id='outlined-confirm-password-input'
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                label={t('ConfirmPassword')}
                type='password'
                error={!!errors['confirmPassword']}
                helperText={errors['confirmPassword'] ? errors['confirmPassword'].message : ''}
              />

              {/* <FormGroup>
                <FormControlLabel
                  control={<Checkbox required />}
                  {...register('terms')}
                  label={
                    <Typography color={errors['terms'] ? 'error' : 'inherit'}>
                      Accept Terms and Conditions
                    </Typography>
                  }
                />
                <FormHelperText error={!!errors['terms']}>
                  {errors['terms'] ? errors['terms'].message : ''}
                </FormHelperText>
              </FormGroup> */}

              <RegularButton
                {...rest}
                color={'primary'}
                size={'lg'}
                round={false}
                fullWidth={true}
                disabled={false}
                simple={false}
                block={false}
                link={false}
                justIcon={false}
                className={''}
              >
                {t('Register')}
              </RegularButton>
            </form>
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
