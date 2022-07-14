import { IconButton, Menu, MenuItem, Typography } from '@mui/material'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { ReactComponent as VietnameseIcon } from '../../../assets/Vietnamese.svg'
import { ReactComponent as EnglishIcon } from '../../../assets/English.svg'
import { ReactComponent as VietnameseRectangleIcon } from '../../../assets/VN-Rectangle.svg'
import { ReactComponent as EnglishRectangleIcon } from '../../../assets/English-Rectangle.svg'
import useStyles from './style'

/**
 * Change Language Button Component
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
 */
export default function ChangeLanguage() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = React.useState(i18n.language)
  const classes = useStyles()

  /**
   * Handle click to open menu language
   * @param event RegisterRequestPayload
   */
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  /**
   * Handle click to close menu language
   */
  const handleClose = () => {
    setAnchorEl(null)
  }

  /**
   * Handle click to change language
   * @param data string
   */
  const changeLanguage = (data: string) => {
    setLanguage(data)
    i18n.changeLanguage(data)
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {language === 'en' ? <EnglishIcon /> : <VietnameseIcon />}
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => {
            changeLanguage('en')
          }}
        >
          <EnglishRectangleIcon className={classes.iconLanguage} />
          <Typography className={classes.textLanguage}>{t('English')}</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            changeLanguage('vi')
          }}
        >
          <VietnameseRectangleIcon className={classes.iconLanguage} />
          <Typography className={classes.textLanguage}>{t('Vietnamese')}</Typography>
        </MenuItem>
      </Menu>
    </div>
  )
}
