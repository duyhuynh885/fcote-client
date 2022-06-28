import React from 'react'
import { Button } from '@mui/material'
import useStyles from './style'
import classNames from 'classnames'
import { RegularButtonType } from '../../models'

/**
 * Regular Button Component
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
 * 28-06-2022         DuyHV           Add Props onClick event for button
 */
const RegularButton = React.forwardRef<HTMLButtonElement, RegularButtonType>((props, ref) => {
  const classes = useStyles()
  const {
    color,
    round,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    onClick,
    ...rest
  } = props

  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
  })

  return (
    <Button {...rest} ref={ref} onClick={onClick} className={btnClasses}>
      {props.children}
    </Button>
  )
})

RegularButton.displayName = 'RegularButton'

export default RegularButton
