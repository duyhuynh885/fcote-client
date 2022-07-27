import { Avatar, IconButton, MenuItem, Modal, Paper, Select, Stack, TextField } from '@mui/material'
import { clearStateMyProfile, editMyProfileRequest } from './action'
import React, { useEffect } from 'react'
import RegularButton from '../../../components/common/button/RegularButton'
import useStyles from '../../../components/my-profile/style'
import { object, string, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { SubmitHandler, useForm } from 'react-hook-form'
import { fetchUserAssignmentRequest } from '../view/action'

/**
 * Edit profile model component
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

interface ButtonProps {
  open: boolean
  onClose: () => void
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  borderRadius: 3,
  p: 4,
}

const editProfileSchema = object({
  firstName: string().max(32, 'First name must be less than 100 characters'),
  lastName: string().max(32, 'Last name must be less than 100 characters'),
  organization: string().max(32, 'Organization must be less than 100 characters'),
  city: string().max(32, 'City must be less than 100 characters'),
  country: string().max(32, 'Country must be less than 100 characters'),
  phone: string(),
  gender: string(),
})

type EditProfileInput = TypeOf<typeof editProfileSchema>

export default function EditProfileModel({ open, onClose }: ButtonProps) {
  const classes = useStyles()
  const dispatch = useDispatch<AppDispatch>()
  const profile = useSelector((state: RootState) => state.myProfile)
  const editMyProfileState = useSelector((state: RootState) => state.editMyProfile)
  // const [gender, setGender] = useState(profile.user.gender)
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EditProfileInput>({
    resolver: zodResolver(editProfileSchema),
  })
  const rest = {
    type: 'submit',
  }

  useEffect(() => {
    if (editMyProfileState.errors) {
      reset()
    }
    if (editMyProfileState.successful) {
      dispatch(clearStateMyProfile())
      reset()
    }
  }, [editMyProfileState.successful, editMyProfileState.errors])

  const onSubmit: SubmitHandler<EditProfileInput> = (data) => {
    const { firstName, lastName, organization, city, country, phone, gender } = data
    console.log(
      'firstName, lastName, organization, city, country, phone, gender',
      firstName,
      lastName,
      organization,
      city,
      country,
      phone,
      gender,
    )
    dispatch(
      editMyProfileRequest({
        firstName,
        lastName,
        organization,
        city,
        country,
        phone,
        gender,
      }),
    )

    onClose()
  }

  // const handleChangeGender = (event: SelectChangeEvent) => {
  //   setGender(event.target.value)
  // }

  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <Paper sx={style}>
            <div className={classes.root}>
              <input accept='image/*' className={classes.input} id='icon-button-file' type='file' />
              <label htmlFor='icon-button-file'>
                <IconButton color='primary' aria-label='upload picture' component='span'>
                  <Avatar
                    src='https://hanoimoi.com.vn/Uploads/images/tuandiep/2022/02/12/ro.jpg'
                    className={classes.large}
                  />
                </IconButton>
              </label>
            </div>
            <Stack className={classes.scrollBar}>
              <TextField
                {...register('firstName')}
                required
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                id='outlined-firstname-input'
                label='First Name'
                defaultValue={profile.user.firstName}
                error={!!errors['firstName']}
                helperText={errors['firstName'] ? errors['firstName'].message : ''}
              />
              <TextField
                {...register('lastName')}
                required
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                id='outlined-lastname-input'
                label='Last Name'
                defaultValue={profile.user.lastName}
                error={!!errors['lastName']}
                helperText={errors['lastName'] ? errors['lastName'].message : ''}
              />
              <TextField
                {...register('organization')}
                id='outlined-organization-input'
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                label='Organization'
                defaultValue={profile.user.organizationTitle}
                error={!!errors['organization']}
                helperText={errors['organization'] ? errors['organization'].message : ''}
              />
              <TextField
                {...register('city')}
                id='outlined-city-input'
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                label='City'
                defaultValue={profile.user.city}
                error={!!errors['city']}
                helperText={errors['city'] ? errors['city'].message : ''}
              />
              <TextField
                {...register('country')}
                id='outlined-country-input'
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                label='Country'
                defaultValue={profile.user.country}
                error={!!errors['country']}
                helperText={errors['country'] ? errors['country'].message : ''}
              />
              <TextField
                {...register('phone')}
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                id='outlined-phone-input'
                label='Phone'
                defaultValue={profile.user.phone}
                error={!!errors['phone']}
                helperText={errors['phone'] ? errors['phone'].message : ''}
              />

              <Select
                {...register('gender')}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                defaultValue={profile.user.gender}
                label='Gender'
                // onChange={handleChangeGender}
              >
                <MenuItem value={'1'}>Female</MenuItem>
                <MenuItem value={'2'}>Male</MenuItem>
                <MenuItem value={'3'}>Other Gender</MenuItem>
              </Select>
            </Stack>
            <Stack
              direction='row'
              justifyContent='space-around'
              alignItems='center'
              spacing={8}
              sx={{
                paddingTop: 2,
                paddingRight: 2,
                paddingLeft: 2,
              }}
            >
              <RegularButton
                color={'danger'}
                size={'sm'}
                round={false}
                fullWidth={true}
                disabled={false}
                simple={false}
                block={false}
                link={false}
                justIcon={false}
                className={''}
                onClick={onClose}
              >
                Cancel
              </RegularButton>

              <RegularButton
                {...rest}
                color={'success'}
                size={'sm'}
                round={false}
                fullWidth={true}
                disabled={false}
                simple={false}
                block={false}
                link={false}
                justIcon={false}
                className={''}
              >
                Save
              </RegularButton>
            </Stack>
          </Paper>
        </form>
      </Modal>
    </React.Fragment>
  )
}