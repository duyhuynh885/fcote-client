import React, { useState } from 'react'
import {
  Avatar,
  CircularProgress,
  IconButton,
  Paper,
  Stack,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { IUser } from '../../../modules/my-profile/view/type'
import useStyles from '../style'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import EditProfileModel from '../../../modules/my-profile/edit/EditProfileModel'
import { formatDate } from '../../../utils/dateUtil'
import { useSelector } from 'react-redux'
import { RootState } from '../../../apps/ReduxContainer'
import DefaultAvatar from '../../../assets/DefaultAvatar.png'
import { useTranslation } from 'react-i18next'

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

interface ProfileProps {
  user: IUser
}
const Profile: React.FC<ProfileProps> = (props) => {
  const classes = useStyles()
  const myProfileState = useSelector((state: RootState) => state.myProfile)
  const { t } = useTranslation()

  const handleGender = (): string => {
    switch (`${props.user.gender}`) {
      case '1':
        return t('Female')
      case '2':
        return t('Male')
      case '3':
        return t('OtherGender')
      default:
        return ''
    }
  }
  const [open, setOpen] = useState(false)
  const handleShowNull = (event: string) => {
    return event === null ? '' : event
  }
  const rows = [
    createData(t('Organization'), handleShowNull(props.user.organizationTitle)),
    createData(
      t('Address'),
      `${props.user.city}` === 'null' || `${props.user.country}` === 'null'
        ? ''
        : `${props.user.city}` + ' - ' + `${props.user.country}`,
    ),
    createData(t('Email'), handleShowNull(props.user.email)),
    createData(t('Phone'), handleShowNull(props.user.phone)),
    createData(t('Gender'), handleGender()),
    createData(t('JoinedOn'), handleShowNull(formatDate(`${props.user.createdAt}`))),
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
      elevation={4}
      square
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '47.5rem',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton aria-label='Example' onClick={handleOpen}>
          <EditOutlinedIcon />
        </IconButton>
        <EditProfileModel open={open} onClose={handleClose} />
      </Box>
      {myProfileState.requesting ? (
        <Stack alignItems='center' justifyContent='center'>
          <CircularProgress color='success' />
        </Stack>
      ) : (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              alt='Profile Image'
              src={props.user.avatar ?? DefaultAvatar}
              className={classes.myProfileAvatar}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <Typography className={classes.myProfileFullName}>
              {props.user.firstName} {props.user.lastName}
            </Typography>
            <Typography className={classes.myProfileUsername}>{props.user.username}</Typography>
          </Box>
          <Box sx={{ padding: 5 }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 300 }}>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell
                      style={{ width: 100, fontWeight: 'bold' }}
                      component='th'
                      scope='row'
                    >
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
            <Typography className={classes.description}></Typography>
          </Box>
        </>
      )}
    </Paper>
  )
}
export default Profile
