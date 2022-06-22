import React from 'react'
import useStyles from './style'
import { Button } from '@mui/material'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'

/**
 * ButtonBack
 * <p>
 * Version 1.0
 * <p>
 * Date: 03-06-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 03-06-2022      HuyNT2711           Create
 */

export default function ButtonBack() {
  const className = useStyles()

  return (
    <div>
      <Button variant='outlined' color='primary' className={className.buttonBack}>
        <ArrowBackIosOutlinedIcon />
        Primary
      </Button>
      <Button variant='outlined' color='secondary' className={className.buttonBack}>
        <ArrowBackIosOutlinedIcon />
        secondary
      </Button>
    </div>
  )
}
