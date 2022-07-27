import { Grid, Stack } from '@mui/material'
import React from 'react'
import ChooseAssignmentForm from '../../../components/challenge/create/ChooseAssignmentForm'
import SettingForm from '../../../components/challenge/create/SettingForm'
import RegularButton from '../../../components/common/button/RegularButton'
import InsideNavBar from '../../../components/common/navigation/InsideNavBar'
import useStyles from './style'
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined'

export default function CreateChallenge() {
  const classes = useStyles()
  return (
    <Stack className={classes.container}>
      <InsideNavBar namePage='New Challenge' />
      <Grid container sx={{ height: '100% !important', padding: '20px 50px' }}>
        <Grid item xs={12} sx={{ height: '35%' }}>
          <SettingForm />
        </Grid>
        <Grid item xs={12} sx={{ height: '65%' }}>
          <ChooseAssignmentForm />
        </Grid>
      </Grid>
      <Stack className={classes.footer} direction='row' justifyContent='flex-end'>
        <RegularButton
          color={'primary'}
          size={'sm'}
          round={false}
          fullWidth={false}
          disabled={false}
          simple={false}
          block={false}
          link={false}
          justIcon={false}
          className={''}
        >
          <SaveAltOutlinedIcon fontSize='small' /> Save
        </RegularButton>
      </Stack>
    </Stack>
  )
}
