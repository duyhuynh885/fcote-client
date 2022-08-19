import { zodResolver } from '@hookform/resolvers/zod'
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined'
import { Grid, Stack } from '@mui/material'
import moment from 'moment'
import { useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { array, object, string, TypeOf } from 'zod'
import { AppDispatch } from '../../../apps/ReduxContainer'
import ChooseAssignmentForm from '../../../components/challenge/create/ChooseAssignmentForm'
import SettingForm from '../../../components/challenge/create/SettingForm'
import RegularButton from '../../../components/common/button/RegularButton'
import InsideNavBar from '../../../components/common/navigation/InsideNavBar'
import { showToastAction } from '../../layout/toast/toastAction'
import { createChallengeRequest } from './action'
import useStyles from './style'
import { Element } from './type'

export default function CreateChallenge() {
  const registerSchema = object({
    title: string().min(1, { message: 'Must be 1 or more characters long' }).trim(),
    description: string().min(1, { message: 'Must be 1 or more characters long' }).trim(),
    durationDate: array(string()),
    secret: string(),
    group: string(),
    limitSubmissions: string().trim(),
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
    const { title, description, durationDate, secret, group, limitSubmissions } = data
    let startAt = ''
    let endAt = ''
    if (durationDate.length > 0) {
      startAt = durationDate[0] ?? moment(durationDate[0], 'YYYY-MM-DD HH:mm:ss')
      endAt = durationDate[1] ?? moment(durationDate[0], 'YYYY-MM-DD HH:mm:ss')
      const msCurrentDay = moment(startAt, 'YYYY-MM-DD HH:mm:ss').diff(
        moment(new Date(), 'YYYY-MM-DD HH:mm:ss'),
      )
      const dCurrentDay = moment.duration(msCurrentDay)
      const daysCurrentDay = dCurrentDay.asDays()

      const msEndDate = moment(endAt, 'YYYY-MM-DD HH:mm:ss').diff(
        moment(startAt, 'YYYY-MM-DD HH:mm:ss'),
      )
      const dEndDate = moment.duration(msEndDate)
      const daysEndDate = dEndDate.asDays()
      if (daysCurrentDay < 0) {
        dispatch(
          showToastAction(
            'error',
            'Please select start date must be greater than the current date',
          ),
        )
        return
      }
      if (daysEndDate > 14) {
        dispatch(showToastAction('error', 'The challenge is only valid for a period of 14 days'))
        return
      }
      if (moment(startAt).isAfter(endAt)) {
        dispatch(showToastAction('error', 'Please select end date larger start date'))
        return
      }
    }
    let groupId = 1
    const image = ''
    let element: Element[]
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
          startAt: startAt,
          endAt: endAt,
          element,
          limitSubmissions: +limitSubmissions,
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
