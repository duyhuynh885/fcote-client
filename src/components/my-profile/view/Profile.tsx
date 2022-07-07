import React, { useState } from 'react'
import {
  Avatar,
  IconButton,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import useStyles from '../style'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import EditProfileModel from '../general/EditProfileModel'

/**
 * Profile component
 *
 * Version 1.0
 *
 * Date: 21-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 21-06-2022         DuyHV           Create
 */

export default function Profile() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const rows = [
    createData('Organization', 'FPT University Da Nang'),
    createData('City', 'Da Nang, Viet Nam'),
    createData('Email', 'duyhuynh885@gmail.com'),
    createData('Phone', '0905425851'),
    createData('Gender', 'Male'),
    createData('Joined on', '13-2-2022'),
  ]

  /**
   * Handle open edit profile model
   */
  const handleOpen = () => {
    setOpen(true)
  }

  /**
   * Handle close edit profile model
   */
  const handleClose = () => {
    setOpen(false)
  }

  /**
   * Create profile table date
   * @param name string
   * @param data string
   * @returns
   */
  function createData(name: string, data: string) {
    return { name, data }
  }

  return (
    <Paper
      elevation={8}
      square
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton aria-label='Example' onClick={handleOpen}>
          <EditOutlinedIcon />
        </IconButton>
        <EditProfileModel open={open} onClose={handleClose} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar
          alt='Profile Image'
          src='https://hanoimoi.com.vn/Uploads/images/tuandiep/2022/02/12/ro.jpg'
          className={classes.myProfileAvatar}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <Typography className={classes.myProfileFullName}>Duy Huynh</Typography>
        <Typography className={classes.myProfileUsername}>@duyhuynh 885</Typography>
      </Box>
      <Box sx={{ padding: 5 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }}>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell style={{ width: 100, fontWeight: 'bold' }} component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell style={{ width: 200 }} align='left'>
                  {row.data}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </TableContainer>
      </Box>
      <Box className={classes.myProfileContainerDescription}>
        <Typography>Description</Typography>
      </Box>
    </Paper>
  )
}
