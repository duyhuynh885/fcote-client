import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import useStyles from './style'
import { useTranslation } from 'react-i18next'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import { styled } from '@mui/material/styles'
import { theme } from '../../../configs/theme/theme'
/**
 * UnAuthorized 401 Pages
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
 * 22-06-2022         TuanLA           Create
 */

const ButtonBack = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: `${theme.textFont.small}`,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: `${theme.color.darkBlue}`,
  borderColor: `${theme.color.darkBlue}`,
  '&:hover': {
    backgroundColor: `${theme.color.darkBlue}`,
    borderColor: `${theme.border.blueGray}`,
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: `${theme.color.darkBlue}`,
    borderColor: `${theme.border.blue}`,
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255, 0.8)',
  },
})

export default function UnAuthorized() {
  const classes = useStyles()
  const { t } = useTranslation()
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
            className={classes.typographyError}
          >
            401
          </Typography>
          <Typography
            variant='h1'
            component='div'
            gutterBottom
            align='center'
            className={classes.typographyErrorContent}
          >
            {t('ErrorUnAuthorized')}
          </Typography>
        </Box>
        <Grid item xs={12}>
          <Box
            sx={{ height: '50vh', width: '70vh', zIndex: '-1' }}
            className={classes.unAuthorizedLayout}
          />
        </Grid>
        <Link
          href='/'
          underline='none'
          color='inherit'
          component={ButtonBack}
          startIcon={<KeyboardReturnIcon />}
          className={classes.buttonBack}
        >
          {t('GoHome')}
        </Link>
      </Grid>
    </React.Fragment>
  )
}
