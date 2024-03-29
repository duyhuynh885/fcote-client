import React, { useEffect } from 'react'
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import RegularButton from '../../../components/common/button/RegularButton'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useStyles from '../style'
import { useTranslation } from 'react-i18next'
import { isAuth } from '../../../utils/auth'
import { object, string, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import history from '../../../configs/routing/history'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { loginClearStateRequest, loginRequest } from './action'
import ErrorMessage from '../../../components/common/text/ErrorMessage'

/**
 * Login Pages
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

export default function Login() {
  const registerSchema = object({
    email: string().email('Email is invalid'),
    password: string()
      .min(8, 'Password must be more than 8 characters')
      .max(32, 'Password must be less than 32 characters'),
  })
  type LoginInput = TypeOf<typeof registerSchema>
  const { t } = useTranslation()
  const classes = useStyles()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginInput>({
    resolver: zodResolver(registerSchema),
  })
  const rest = {
    type: 'submit',
  }
  const loginState = useSelector((state: RootState) => state.login)
  const dispatch = useDispatch<AppDispatch>()

  /**
   * Handle login
   * @param data LoginInput
   */
  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    const { email, password } = data
    dispatch(loginRequest({ email, password }))
  }

  useEffect(() => {
    dispatch(loginClearStateRequest())
  }, [])

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
              {t('WelcomeBack')}
            </Typography>
            {loginState.errors ? <ErrorMessage error={loginState.errors} /> : null}
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                required
                color='success'
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                id='outlined-email-input'
                autoComplete='email'
                label={t('Email')}
                error={!!errors['email']}
                helperText={errors['email'] ? errors['email'].message : ''}
                {...register('email')}
              />
              <TextField
                required
                color='success'
                id='outlined-password-input'
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                label={t('Password')}
                type='password'
                autoComplete='current-password'
                error={!!errors['password']}
                helperText={errors['password'] ? errors['password'].message : ''}
                {...register('password')}
              />
              <Stack direction='row' justifyContent='flex-end' alignItems='center'>
                <Link to='/forget-password' className={classes.link}>
                  <Typography sx={{ fontWeight: 'bold', marginBottom: '15px' }} noWrap>
                    {t('ForgetPassword')}
                  </Typography>
                </Link>
              </Stack>
              <RegularButton
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
                {...rest}
              >
                {t('Login')}
              </RegularButton>
            </form>
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
