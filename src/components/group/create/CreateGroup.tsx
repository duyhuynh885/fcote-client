import { Modal, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import RegularButton from '../../../components/common/button/RegularButton'
import useStyle from './style'
import { object, string, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { createGroupRequest } from '../../../modules/group/create-group/action'
/**
 * Create Group component
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

interface ButtonProps {
  open: boolean
  onClose: (shown: boolean) => void
  urlNamePopup: string
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

const createGroupObject = object({
  groupName: string()
    .min(1, 'Group Name must be more than 1 characters')
    .max(100, 'Group Name must be less than 100 characters'),
  groupDescription: string()
    .min(1, 'Description must be more than 1 characters')
    .max(255, 'Description must be less than 255 characters'),
})

export default function CreateGroup({ open, onClose, urlNamePopup }: ButtonProps) {
  const classes = useStyle()
  const dispatch = useDispatch<AppDispatch>()

  type CreateGroupInput = TypeOf<typeof createGroupObject>
  const groupDetailRequestState = useSelector(
    (state: RootState) => state.createGroup.createGroupRequest,
  )
  const createGroupState = useSelector((state: RootState) => state.createGroup)
  const rest = {
    type: 'submit',
  }

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateGroupInput>({
    resolver: zodResolver(createGroupObject),
  })

  const onCancel = () => {
    onClose(true)
    reset()
  }

  const onSubmit: SubmitHandler<CreateGroupInput> = (data) => {
    const { groupName, groupDescription } = data
    dispatch(createGroupRequest(groupDetailRequestState, groupName, groupDescription))
    console.log('Create', groupName, groupDescription)
    onCancel()
  }

  /**
   * Load error or success message if exist
   */
  useEffect(() => {
    reset()
  }, [createGroupState.successful, createGroupState.errors])

  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Paper sx={style}>
            <div className={classes.root}>
              <Typography className={classes.newGroup}>{urlNamePopup}</Typography>
            </div>
            <Stack className={classes.scrollBar}>
              <Typography className={classes.titleTextField}>Group Name</Typography>
              <TextField
                required
                id='outlined-groupName-input'
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                type='groupName'
                autoComplete='current-code'
                error={!!errors['groupName']}
                helperText={errors['groupName'] ? errors['groupName'].message : ''}
                {...register('groupName')}
              />
              <Typography className={classes.titleTextField}>Description</Typography>
              <TextField
                required
                id='outlined-groupDescription-input'
                fullWidth
                multiline
                rows={3}
                type='groupDescription'
                autoComplete='current-code'
                error={!!errors['groupDescription']}
                helperText={errors['groupDescription'] ? errors['groupDescription'].message : ''}
                {...register('groupDescription')}
              />
            </Stack>
            <Stack direction='row' justifyContent='space-around' alignItems='center' spacing={8}>
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
                onClick={onCancel}
              >
                Cancel
              </RegularButton>
              <RegularButton
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
                {...rest}
              >
                Create
              </RegularButton>
            </Stack>
          </Paper>
        </form>
      </Modal>
    </React.Fragment>
  )
}
