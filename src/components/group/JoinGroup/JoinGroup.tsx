import React, { useEffect } from 'react'
import { Modal, Paper, Stack, TextField, Typography } from '@mui/material'
import RegularButton from '../../common/button/RegularButton'
import useStyle from './style'
import { object, string, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { joinGroupRequest } from '../../../modules/group/join-group/action'
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
}

const joinGroupSchema = object({
  joinCode: string()
    .min(6, 'Code must be more than 8 characters')
    .max(32, 'Code must be less than 32 characters'),
})

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  backgroundColor: 'background.paper',
  borderRadius: 3,
  p: 4,
}

export default function JoinGroup({ open, onClose }: ButtonProps) {
  const classes = useStyle()
  const dispatch = useDispatch<AppDispatch>()

  type JoinGroupInput = TypeOf<typeof joinGroupSchema>

  const joinGroupState = useSelector((state: RootState) => state.joinGroup)

  const rest = {
    type: 'submit',
  }

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<JoinGroupInput>({
    resolver: zodResolver(joinGroupSchema),
  })

  const onCancel = () => {
    onClose(true)
    reset()
  }

  const onSubmit: SubmitHandler<JoinGroupInput> = (data) => {
    const { joinCode } = data
    dispatch(joinGroupRequest(joinCode))
    onCancel()
  }

  /**
   * Load error or success message if exist
   */
  useEffect(() => {
    reset()
  }, [joinGroupState.successful, joinGroupState.errors])

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
              <Typography className={classes.newGroup}>Join Group</Typography>
            </div>
            <Stack>
              <Typography className={classes.titleTextField}>Group Code</Typography>
              <TextField
                required
                id='outlined-password-input'
                sx={{ width: '100%', marginBottom: '1.5rem' }}
                label='Join Code'
                type='join_code'
                autoComplete='current-code'
                error={!!errors['joinCode']}
                helperText={errors['joinCode'] ? errors['joinCode'].message : ''}
                {...register('joinCode')}
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
                Join
              </RegularButton>
            </Stack>
          </Paper>
        </form>
      </Modal>
    </React.Fragment>
  )
}
