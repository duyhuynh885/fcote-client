import { IconButton, InputAdornment, NativeSelect, Paper, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import Divider from '@mui/material/Divider'
import SearchIcon from '@mui/icons-material/Search'
import RegularButton from '../../common/button/RegularButton'
import { Link } from 'react-router-dom'
import useStyle from './style'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import CreateGroup from '../create/CreateGroup'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import JoinGroup from '../JoinGroup/JoinGroup'
/**
 * Taskbar Group
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
 */

export default function TaskbarGroup() {
  const classes = useStyle()
  const [openJoin, setOpenJoin] = useState(false)
  const [openCreate, setOpenCreate] = useState(false)
  const handleOpenCreateGroup = () => {
    setOpenCreate(true)
  }
  const handleCloseCreateGroup = () => {
    setOpenCreate(false)
  }

  const handleOpenJoinGroup = () => {
    setOpenJoin(true)
  }
  const handleCloseJoinGroup = () => {
    setOpenJoin(false)
  }
  return (
    <Paper
      square
      elevation={5}
      sx={{ width: '100%', padding: '5px', display: 'flex', justifyContent: 'space-between' }}
    >
      <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
        <TextField
          sx={{ marginLeft: '20px' }}
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
      </Stack>
      <Stack direction='row'>
        <RegularButton
          color={'warning'}
          size={'sm'}
          round={false}
          fullWidth={false}
          disabled={false}
          simple={false}
          block={false}
          link={false}
          justIcon={false}
          className={classes.button}
          onClick={handleOpenJoinGroup}
        >
          <GroupAddIcon />
          Join
        </RegularButton>
        <Divider orientation='vertical' flexItem />

        <RegularButton
          color={'primary'}
          size={'sm'}
          round={false}
          fullWidth={false}
          disabled={false}
          simple={false}
          block={false}
          link={false}
          justIcon={false}
          className={classes.button}
          onClick={handleOpenCreateGroup}
        >
          + Create
        </RegularButton>
      </Stack>
      <CreateGroup urlNamePopup='New Group' open={openCreate} onClose={handleCloseCreateGroup} />
      <JoinGroup open={openJoin} onClose={handleCloseJoinGroup} />
    </Paper>
  )
}
