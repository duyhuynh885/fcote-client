import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  FormHelperText,
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
import { StringDecoder } from 'string_decoder'

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

type FormValues = {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}

export default function Register() {
  const registerSchema = object({
    fullName: string().max(32, 'Name must be less than 100 characters'),
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

  const onSubmit: SubmitHandler<RegisterInput> = (data) => {
    const { fullName, email, password } = data
    dispatch(registerRequest({ fullName, email, password }))
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
          Create Account{' '}
        </Typography>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('fullName')}
            required
            sx={{ width: '100%', marginBottom: '1.5rem' }}
            id='outlined-fullName-input'
            label='Full Name'
            error={!!errors['fullName']}
            helperText={errors['fullName'] ? errors['fullName'].message : ''}
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
    </React.Fragment>
  )
}
