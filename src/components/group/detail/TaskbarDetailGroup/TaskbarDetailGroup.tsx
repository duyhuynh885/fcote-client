import { Box, IconButton, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Divider from '@mui/material/Divider'
import SearchIcon from '@mui/icons-material/Search'
import ButtonBack from '../../../common/button/ButtonBack'
import useStyles from './style'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import EditGroup from '../../setting-group/EditGroup'

/**
 * Taskbar Detail Group
 * <p>
 * Version 1.0
 * <p>
 * Date: 04-07-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 04-07-2022      HuyNT2711           Create
 * 21-07-2022       TuanLA             Add Show Invite Code
 */

interface TaskbarDetailGroupProps {
  code: string
  isOwner: boolean
}

enum optionsEnum {
  EDIT,
  LEAVE_GROUP,
  DELETE_GROUP,
}

const options = ['Edit', 'Leave Group', 'Delete Group']

const ITEM_HEIGHT = 48

export default function TaskbarDetailGroup(props: TaskbarDetailGroupProps) {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    handleClose()
    console.log(`You clicked ${options[index]}`)
    switch (index) {
      case optionsEnum.EDIT:
        setOpenEdit(true)
        break
      case optionsEnum.LEAVE_GROUP:
        break
      case optionsEnum.DELETE_GROUP:
        break
      default:
        break
    }
  }

  const [openEdit, setOpenEdit] = useState(false)
  const handleCloseEditGroup = () => {
    setOpenEdit(false)
  }
  return (
    <Paper
      square
      elevation={3}
      sx={{ width: '100%', padding: '10px', display: 'flex', justifyContent: 'space-between' }}
    >
      <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
        <ButtonBack />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          size='small'
          color='success'
          placeholder='Search here'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Divider orientation='vertical' flexItem />
        <Box sx={{ padding: '10px' }}>
          <Typography className={classes.code}>CODE: {props.code}</Typography>
        </Box>
        <Divider orientation='vertical' flexItem />
        <Box>
          <IconButton
            aria-label='more'
            id='long-button'
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup='true'
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id='long-menu'
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={option === 'Edit'}
                disabled={option === 'Delete Group' && !props.isOwner}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Stack>
      <EditGroup urlNamePopup='Edit Group' open={openEdit} onClose={handleCloseEditGroup} />
    </Paper>
  )
}
