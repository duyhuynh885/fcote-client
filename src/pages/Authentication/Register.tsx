import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { literal, object, string, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import RegularButton from '../../components/Button/RegularButton'
import { useAppDispatch } from '../../hooks/hooks'
import { RegularButtonType } from '../../models'
import { registerRequest } from '../../redux/modules/auth/action/authAction'
import useStyles from './style'
import { isAuth } from '../../utils/auth'
import history from '../../routing/history'

const regularButton: RegularButtonType = {
  color: 'primary',
  size: 'lg',
  round: false,
  children: 'Register',
  fullWidth: true,
  disabled: false,
  simple: true,
  block: true,
  link: false,
  justIcon: false,
  className: 'form__custom-button',
}

export default function Register() {
  const registerSchema = object({
    firstName: string().max(32, 'First name must be less than 100 characters'),
    lastName: string().max(32, 'Last name must be less than 100 characters'),
    userName: string().max(32, 'User name must be less than 100 characters'),
    email: string().email('Email is invalid'),
    password: string()
      .min(8, 'Password must be more than 8 characters')
      .max(32, 'Password must be less than 32 characters'),
    confirmPassword: string(),
    terms: literal(true),
  }).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  })
  type RegisterInput = TypeOf<typeof registerSchema>
  const classes = useStyles()
  const { t } = useTranslation()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  })
  const dispatch = useAppDispatch()
  const rest = {
    type: 'submit',
  }

  /**
   * Handle register
   * @param data RegisterInput
   */
  const onSubmit: SubmitHandler<RegisterInput> = (data) => {
    const { firstName, lastName, userName, email, password } = data
    dispatch(registerRequest({ firstName, lastName, userName, email, password }))
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
              Create Account{' '}
            </Typography>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                  <TextField
                    {...register('firstName')}
                    required
                    sx={{ width: '100%', marginBottom: '1.5rem' }}
                    id='outlined-fullName-input'
                    label='Fist Name'
                    error={!!errors['firstName']}
                    helperText={errors['firstName'] ? errors['firstName'].message : ''}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    {...register('lastName')}
                    required
                    sx={{ width: '100%', marginBottom: '1.5rem' }}
                    id='outlined-fullName-input'
                    label='Last Name'
                    error={!!errors['lastName']}
                    helperText={errors['lastName'] ? errors['lastName'].message : ''}
                  />
                </Grid>
              </Grid>
              <TextField
                {...register('userName')}
                required
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                id='outlined-fullName-input'
                label='User Name'
                error={!!errors['userName']}
                helperText={errors['userName'] ? errors['userName'].message : ''}
              />
              <TextField
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
                {...register('password')}
                required
                id='outlined-password-input'
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                label='Password'
                type='password'
                error={!!errors['password']}
                helperText={errors['password'] ? errors['password'].message : ''}
                {...register('password')}
              />
              <TextField
                {...register('confirmPassword')}
                required
                id='outlined-password-input'
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                label='Confirm password'
                type='password'
                error={!!errors['confirmPassword']}
                helperText={errors['confirmPassword'] ? errors['confirmPassword'].message : ''}
              />

              <FormGroup>
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
              </FormGroup>

              <RegularButton {...rest} {...regularButton}>
                {t('Register')}
              </RegularButton>
            </form>
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
