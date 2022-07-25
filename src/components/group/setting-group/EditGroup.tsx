import { Modal, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import RegularButton from '../../common/button/RegularButton'
import useStyle from './style'
import { object, string, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { TypeModalGroup } from './type'
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

const editGroupObject = object({
  groupName: string()
    .min(1, 'Group Name must be more than 1 characters')
    .max(100, 'Group Name must be less than 100 characters'),
  groupDescription: string()
    .min(1, 'Description must be more than 1 characters')
    .max(255, 'Description must be less than 255 characters'),
})

export default function EditGroup({ open, onClose, urlNamePopup }: ButtonProps) {
  const classes = useStyle()
  const dispatch = useDispatch<AppDispatch>()

  type EditGroupInput = TypeOf<typeof editGroupObject>
  const groupDetailRequestState = useSelector(
    (state: RootState) => state.createGroup.createGroupRequest,
  )
  const createGroupState = useSelector((state: RootState) => state.createGroup)
  const detailGroupState = useSelector((state: RootState) => state.detailGroup)
  const rest = {
    type: 'submit',
  }

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EditGroupInput>({
    resolver: zodResolver(editGroupObject),
  })

  const onCancel = () => {
    onClose(true)
    reset()
  }

  const onSubmit: SubmitHandler<EditGroupInput> = (data) => {
    const { groupName, groupDescription } = data
    if (urlNamePopup === TypeModalGroup.EDIT_GROUP) {
      console.log('Edit', groupName, groupDescription)
    }
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
                defaultValue={detailGroupState.groupDetail.title}
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
                defaultValue={detailGroupState.groupDetail.joinCode}
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
                Edit
              </RegularButton>
            </Stack>
          </Paper>
        </form>
      </Modal>
    </React.Fragment>
  )
}
