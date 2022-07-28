import { Modal, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import RegularButton from '../../common/button/RegularButton'
import useStyle from './style'
import { object, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { TypeModalGroup } from './type'
import { leaveGroupRequest } from '../../../modules/group/setting/leave/action'

/**
 * Create Group component
 * <p>
 * Version 1.0
 * <p>
 * Date: 04-07-2022
 * <p>
 * Copyright By TuanLA
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 04-07-2022      TuanLA           Create
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

const leaveGroupObject = object({})

export default function LeaveGroup({ open, onClose, urlNamePopup }: ButtonProps) {
  const classes = useStyle()
  const dispatch = useDispatch<AppDispatch>()

  type LeaveGroupInput = TypeOf<typeof leaveGroupObject>

  const detailGroupState = useSelector((state: RootState) => state.detailGroup)
  const rest = {
    type: 'submit',
  }

  const { handleSubmit } = useForm<LeaveGroupInput>({
    resolver: zodResolver(leaveGroupObject),
  })

  const onCancel = () => {
    onClose(true)
  }

  const onSubmit: SubmitHandler<LeaveGroupInput> = () => {
    if (urlNamePopup === TypeModalGroup.LEAVE_GROUP) {
      dispatch(leaveGroupRequest(detailGroupState.groupDetail.id))
    }
    onCancel()
  }

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
              <Typography className={classes.newGroup}>Are you sure ?</Typography>
            </div>
            <Stack direction='row' justifyContent='space-around' alignItems='center' spacing={8}>
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
                onClick={onCancel}
              >
                Cancel
              </RegularButton>
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
                {...rest}
              >
                Leave
              </RegularButton>
            </Stack>
          </Paper>
        </form>
      </Modal>
    </React.Fragment>
  )
}
