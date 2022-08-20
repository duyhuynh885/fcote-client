import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { object, string, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import useStyles from './style'
import RegularButton from '../../../components/common/button/RegularButton'
/**
 * Contact Us Pages
 *
 * Version 1.0
 *
 * Date: 07-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 07-07-2022         TuanLA           Create
 */

const contactUsFormSchema = object({
  email: string().email('Email is invalid'),
  description: string().min(8, 'Content is not enough!'),
})

export default function ContactUs() {
  const classes = useStyles()
  const { t } = useTranslation()
  type ContactsUs = TypeOf<typeof contactUsFormSchema>
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactsUs>({
    resolver: zodResolver(contactUsFormSchema),
  })
  const rest = {
    type: 'submit',
  }
  const onSubmit: SubmitHandler<ContactsUs> = (data) => {
    const { email, description } = data
    // TODO
  }

  return (
    <React.Fragment>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: '50vh' }}
      >
        <Box>
          <Typography
            variant='h1'
            component='div'
            gutterBottom
            align='center'
            className={classes.title}
          >
            Contacts Us
          </Typography>
          <Typography
            variant='subtitle1'
            component='div'
            gutterBottom
            align='center'
            mt={2}
            className={classes.subContent}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non fringilla diam. In
            suscipit libero posuere aliquet iaculis. Donec hendrerit accumsan gravida. Pellentesque
            neque elit, lacinia et ullamcorper vitae, tempor fermentum metus. In hac habitasse
            platea dictumst. Aliquam id dictum lorem, vel auctor nisl. Aliquam mattis odio sem, at
            volutpat enim fermentum eu.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant='h1'
            component='div'
            gutterBottom
            align='center'
            className={classes.contenTitle}
          >
            Write Message
          </Typography>
          <Container fixed disableGutters>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                required
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                id='outlined-email-input'
                autoComplete='email'
                label='Email'
                error={!!errors['email']}
                helperText={errors['email'] ? errors['email'].message : ''}
                {...register('email')}
              />
              <TextField
                required
                multiline
                rows={4}
                id='outlined-description-input'
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                label='Description'
                type='description'
                autoComplete='current-description'
                error={!!errors['description']}
                helperText={errors['description'] ? errors['description'].message : ''}
                {...register('description')}
              />
              <Grid container justifyContent='flex-end'>
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
                  {t('Send')}
                </RegularButton>
              </Grid>
            </form>
          </Container>
        </Box>
      </Grid>
    </React.Fragment>
  )
}
