import { makeStyles } from '@mui/styles'

/**
 * Style for all button components
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
const useStyles = makeStyles((theme: any) => ({
  iconLanguage: {
    height: '1.5rem',
    width: 'auto',
    marginRight: '0.5rem',
  },
  textLanguage: {
    color: theme.color.darkGray,
    fontSize: theme.textFont.extraSmall,
    fontWeight: 'bold',
    marginLeft: theme.spacing(1),
    '&:hover': {
      color: theme.color.black,
      fontSize: theme.textFont.small,
    },
  },
  button: {
    minHeight: '50px',
    minWidth: 'auto',
    backgroundColor: `${theme.color.green} !important`,
    color: `${theme.color.black} !important`,
    border: 'none',
    borderRadius: '0px !important',
    position: 'relative',
    padding: '12px 30px',
    margin: '.3125rem 1px',
    textTransform: 'capitalize',
    fontSize: theme.textFont.small,
    fontWeight: 'bold !important',
    letterSpacing: '0',
    willChange: 'box-shadow, transform',
    lineHeight: '1.42857143',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
  },
  fullWidth: {
    width: '100% !important',
  },
  primary: {
    backgroundColor: `${theme.color.green} !important`,
  },
  info: {
    backgroundColor: `${theme.color.white} !important`,
  },
  success: {
    backgroundColor: `${theme.color.green} !important`,
  },
  warning: {
    backgroundColor: `${theme.color.yellow} !important`,
  },
  danger: {
    backgroundColor: `${theme.color.red} !important`,
  },
  white: {
    '&,&:focus,&:hover,&:visited': {
      backgroundColor: '#FFFFFF',
      color: theme.color.lightGray,
    },
  },
  transparent: {
    '&,&:focus,&:hover,&:visited': {
      color: 'inherit',
      background: 'transparent',
      boxShadow: 'none',
    },
  },
  disabled: {
    opacity: '0.65',
    pointerEvents: 'none',
  },
  lg: {
    padding: '1.125rem 2.25rem',
    fontSize: theme.textFont.small,
    lineHeight: '1.333333',
    borderRadius: '0.2rem',
  },
  sm: {
    fontWeight: 'semiBold',
    minHeight: '35px !important',
    padding: '0.2rem 0.406rem',
    fontSize: theme.textFont.small,
    lineHeight: '1',
  },
  round: {
    borderRadius: '30px',
  },
  block: {
    width: '100% !important',
  },
  link: {
    '&,&:hover,&:focus': {
      backgroundColor: 'transparent',
      color: '#999999',
      boxShadow: 'none',
    },
  },
  justIcon: {
    paddingLeft: '12px',
    paddingRight: '12px',
    fontSize: '20px',
    height: '41px',
    minWidth: '41px',
    width: '41px',
    '& .fab,& .fas,& .far,& .fal,& svg,& .material-icons': {
      marginRight: '0px',
    },
    '&$lg': {
      height: '57px',
      minWidth: '57px',
      width: '57px',
      lineHeight: '56px',
      '& .fab,& .fas,& .far,& .fal,& .material-icons': {
        fontSize: '32px',
        lineHeight: '56px',
      },
      '& svg': {
        width: '32px',
        height: '32px',
      },
    },
    '&$sm': {
      height: '30px',
      minWidth: '30px',
      width: '30px',
      '& .fab,& .fas,& .far,& .fal,& .material-icons': {
        fontSize: '17px',
        lineHeight: '29px',
      },
      '& svg': {
        width: '17px',
        height: '17px',
      },
    },
  },
  simple: {
    '&,&:focus,&:hover,&:visited': {
      color: '#FFFFFF',
      background: 'transparent',
      boxShadow: 'none',
    },
    '&$primary': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.color.green,
      },
    },
    '&$info': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.color.white,
      },
    },
    '&$success': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.color.green,
      },
    },
    '&$warning': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.color.yellow,
      },
    },
    '&$danger': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.color.red,
      },
    },
  },
}))

export default useStyles
