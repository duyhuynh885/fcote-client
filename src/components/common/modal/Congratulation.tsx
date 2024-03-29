import { Button, Modal, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../apps/ReduxContainer'
import useStyles from './style'
import BackgroundCongratulation from '../../../assets/BackgroundCongratulation.png'
import Reward from '../../../assets/Reward.png'
import { useTranslation } from 'react-i18next'

interface CongratulationProps {
  open: boolean
  onClose: () => void
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  backgroundImage: `url(${BackgroundCongratulation})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  borderRadius: 3,
  p: 4,
}

export default function Congratulation(props: CongratulationProps) {
  const classes = useStyles()
  const { open, onClose } = props
  const userState = useSelector((state: RootState) => state.login.userInfo)
  const { t } = useTranslation()

  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Paper sx={style}>
          <Stack alignItems='center'>
            <img style={{ width: '100px', height: '100px' }} src={Reward} alt='Reward' />
          </Stack>
          <Stack direction='row' alignItems='center' spacing={1}>
            <Typography sx={{ fontSize: '30px' }}>{t('Congratulation')} </Typography>
            <Typography sx={{ fontSize: '28px', fontWeight: '700' }}>
              {userState.username}
            </Typography>
          </Stack>
          <Typography className={classes.createTestCaseModelTitle}>
            {t('YouHaveJustFinishedThisTask')}
          </Typography>
          <Stack direction='row' justifyContent='between' marginTop={3}>
            <Button
              fullWidth
              sx={{ fontWeight: '700' }}
              variant='outlined'
              color='success'
              onClick={onClose}
            >
              {t('StayOnThisPage')}
            </Button>
            {/* <Button sx={{ fontWeight: '700' }} variant='contained' color='success'>
              Next To Assignment
            </Button> */}
          </Stack>
        </Paper>
      </Modal>
    </React.Fragment>
  )
}
