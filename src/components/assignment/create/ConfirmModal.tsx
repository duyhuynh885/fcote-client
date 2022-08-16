import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Paper,
  PaperProps,
  ButtonProps,
  styled,
} from '@mui/material'
import React from 'react'

interface ConfirmModalProps {
  openConfirmModal: boolean
  handleClose: () => void
  handleAgree: () => void
  description: string
}

const style = {
  width: 400,
  borderRadius: 3,
  p: 1,
}

function PaperComponent(props: PaperProps) {
  return <Paper sx={style} {...props} />
}

const CancelButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.color.darkGray,
  fontWeight: '700',

  '&:hover': {
    backgroundColor: `${theme.color.darkGray}10`,
  },
}))

export default function ConfirmModal(props: ConfirmModalProps) {
  const { openConfirmModal, handleClose, handleAgree, description } = props
  return (
    <Dialog
      open={openConfirmModal}
      onClose={handleClose}
      PaperComponent={PaperComponent}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle style={{ cursor: 'pointer', fontWeight: '700' }} id='draggable-dialog-title'>
        Confirmation
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ cursor: 'pointer', fontWeight: '600' }}>
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <CancelButton autoFocus onClick={handleClose}>
          Cancel
        </CancelButton>
        <Button sx={{ fontWeight: '700' }} color='error' onClick={handleAgree}>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}
