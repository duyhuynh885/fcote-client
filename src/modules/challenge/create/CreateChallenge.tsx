import { Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import ChooseAssignmentForm from '../../../components/challenge/create/ChooseAssignmentForm'
import SettingForm from '../../../components/challenge/create/SettingForm'
import RegularButton from '../../../components/common/button/RegularButton'
import InsideNavBar from '../../../components/common/navigation/InsideNavBar'
import useStyles from './style'
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { object, string, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../apps/ReduxContainer'
import { showToastAction } from '../../layout/toast/toastAction'
import { createChallengeRequest } from './action'
import { Element } from './type'
import moment from 'moment'

export default function CreateChallenge() {
  const registerSchema = object({
    title: string().min(1, { message: 'Must be 1 or more characters long' }).trim(),
    description: string().min(1, { message: 'Must be 1 or more characters long' }).trim(),
    startAt: string(),
    endAt: string().trim(),
    secret: string(),
    group: string(),
  })
  type CreateChallengeInput = TypeOf<typeof registerSchema>
  const dispatch = useDispatch<AppDispatch>()
  const classes = useStyles()
  const methods = useForm<CreateChallengeInput>({
    resolver: zodResolver(registerSchema),
  })
  const rest = { type: 'submit' }
  const [assignmentIdSelected, setAssignmentIdSelected] = useState<number[]>([])

  const onSubmit: SubmitHandler<CreateChallengeInput> = (data) => {
    const { title, description, startAt, endAt, secret, group } = data
    let groupId = 1
    const image = ''
    let element: Element[]
    const ms = moment(startAt, 'YYYY-MM-DD HH:mm:ss').diff(moment(endAt, 'YYYY-MM-DD HH:mm:ss'))
    const d = moment.duration(ms)
    const days = d.asDays()

    if (days === 0) {
      dispatch(showToastAction('error', 'Challenge duration least 1 day'))
      return
    }
    if (moment(startAt).isAfter(endAt)) {
      dispatch(showToastAction('error', 'Please select end date larger start date'))
      return
    }
    if (assignmentIdSelected.length >= 3) {
      element = assignmentIdSelected.map((assignmentId) => {
        return {
          assignmentId: assignmentId,
        } as Element
      })
      if (group !== '1' && secret === 'Private') {
        groupId = +group
      }

      dispatch(
        createChallengeRequest({
          title,
          description,
          image,
          groupId,
          startAt: moment(startAt).format('YYYY-MM-DD HH:mm:ss'),
          endAt: moment(endAt).format('YYYY-MM-DD HH:mm:ss'),
          element,
        }),
      )
    } else {
      dispatch(showToastAction('error', 'Please choose at least 3 and at most 6 exercises'))
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack className={classes.container}>
          <InsideNavBar namePage='New Challenge' />
          <Grid container sx={{ height: '100% !important', padding: '20px 50px' }}>
            <Grid item xs={12} sx={{ height: '40%' }}>
              <SettingForm />
            </Grid>
            <Grid item xs={12} sx={{ height: '60%' }}>
              <ChooseAssignmentForm
                assignmentIdSelected={assignmentIdSelected}
                handleChangeAssignmentIdSelected={setAssignmentIdSelected}
              />
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
              {...rest}
            >
              <SaveAltOutlinedIcon fontSize='small' /> Save
            </RegularButton>
          </Stack>
        </Stack>
      </form>
    </FormProvider>
  )
}
