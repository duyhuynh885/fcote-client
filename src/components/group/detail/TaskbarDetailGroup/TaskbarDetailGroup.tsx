import { Box, IconButton, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider'
import SearchIcon from '@mui/icons-material/Search'
import ButtonBack from '../../../common/button/ButtonBack'
import useStyles from './style'

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
 */

export default function TaskbarDetailGroup() {
  const classes = useStyles()

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
          <Typography className={classes.code}>CODE: 123456</Typography>
        </Box>
      </Stack>
    </Paper>
  )
}
