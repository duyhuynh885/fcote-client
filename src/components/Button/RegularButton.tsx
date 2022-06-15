/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { Button } from '@mui/material'
import useStyles from './style'
import classNames from 'classnames'
import { RegularButtonType } from '../../types/RegularButtonType'
interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  props?: RegularButtonType
}

const RegularButton = React.forwardRef(({ props }: { props: RegularButtonType }) => {
  const classes = useStyles()
  console.log({ props })
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    type,
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
    <Button type={type} className={btnClasses}>
      {children}
    </Button>
  )
})

export default RegularButton
