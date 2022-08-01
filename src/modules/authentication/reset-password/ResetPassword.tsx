import React from 'react'
import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import RegularButton from '../../../components/common/button/RegularButton'
import { useTranslation } from 'react-i18next'
import useStyles from '../style'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { object, string, TypeOf } from 'zod'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../apps/ReduxContainer'
import { resetPasswordRequest } from './action'

/**
 * Forget Password Pages
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

export default function ResetPassword() {
  const { t } = useTranslation()
  const registerSchema = object({
    email: string().email('Email is invalid'),
  })
  type ResetPasswordInput = TypeOf<typeof registerSchema>
  const classes = useStyles()
  const dispatch = useDispatch<AppDispatch>()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ResetPasswordInput>({
    resolver: zodResolver(registerSchema),
  })
  const rest = {
    type: 'submit',
  }

  /**
   * Handle reset password submit
   * @param data ResetPasswordInput
   */
  const onSubmit: SubmitHandler<ResetPasswordInput> = (data) => {
    const { email } = data
    dispatch(resetPasswordRequest({ email }))
  }

  return (
    <React.Fragment>
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
              Reset Password
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                required
                color='success'
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                id='outlined-email-input'
                label='Email'
                error={!!errors['email']}
                helperText={errors['email'] ? errors['email'].message : ''}
                {...register('email')}
              />
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
                {t('Send')}
              </RegularButton>
            </form>
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
