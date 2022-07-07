import React from 'react'
import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import RegularButton from '../../../components/common/button/RegularButton'
import { useTranslation } from 'react-i18next'
import useStyles from '../style'

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

export default function ForgetPassword() {
  const { t } = useTranslation()
  const classes = useStyles()

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
              Forget Password
            </Typography>
            <form className='form'>
              <TextField
                required
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                id='outlined-email-input'
                label='Email'
              />
              <RegularButton
                color={'primary'}
                size={'lg'}
                round={false}
                fullWidth={false}
                disabled={false}
                simple={false}
                block={false}
                link={false}
                justIcon={false}
                className={''}
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