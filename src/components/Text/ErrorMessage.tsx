import { Typography } from '@mui/material'
import React from 'react'
import useStyles from './style'
import { useTranslation } from 'react-i18next'

interface ErrorMessageProps {
  error: ErrorMessage
}

/**
 * Error Message
 *
 * Version 1.0
 *
 * Date: 01-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 01-06-2022         DuyHV           Create
 * 06-07-2022         DuyHV           hideNavbarPath
 */
const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { i18n } = useTranslation()
  const { error } = props
  const classes = useStyles()
  const { language } = i18n

  /**
   * Swaps the current translation
   * @param textVi string
   * @param textEn string
   * @returns
   */
  const changeLanguage = (textVi: string, textEn: string) => {
    if (language === 'en') {
      return textEn
    } else {
      return textVi
    }
  }

  return (
    <Typography className={classes.errorText}>
      {changeLanguage(error.errorMessageVi, error.errorMessageEn)}
    </Typography>
  )
}

export default ErrorMessage
