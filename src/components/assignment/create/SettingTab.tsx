import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import useStyles from './style'
import { useFormContext } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { updateRequestCreateAssignment } from '../../../modules/assignment/create/action'
import { SettingCreateAssignment } from '../../../modules/assignment/create/type'
import { DifficultEnum } from '../../../modules/assignment/list/type'

/**
 * SettingTab component
 *
 * Version 1.0
 *
 * Date: 28-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 28-06-2022         DuyHV           Create
 */

const config = {
  toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
}
export default function SettingTab() {
  const classes = useStyles()
  const dispatch = useDispatch<AppDispatch>()
  const requestCreateAssignmentState = useSelector(
    (state: RootState) => state.createAssignment.requestBody,
  )
  const settingState = useSelector((state: RootState) => state.createAssignment.requestBody.setting)

  const handleOnChangeEditor = (_event: any, editor: ClassicEditor) => {
    dispatch(
      updateRequestCreateAssignment({
        ...requestCreateAssignmentState,
        setting: {
          ...settingState,
          description: editor.getData(),
        },
      }),
    )
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateRequestCreateAssignment({
        ...requestCreateAssignmentState,
        setting: {
          ...settingState,
          name: event.target.value,
        },
      }),
    )
  }
  const handleChangeRadiobutton = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    // dispatch(
    //   updateRequestCreateAssignment({
    //     ...requestCreateAssignmentState,
    //     setting: {
    //       ...settingState,
    //       difficulty: ,
    //     },
    //   }),
    // )
  }

  return (
    <Stack sx={{ height: '100%' }}>
      <FormControl fullWidth variant='filled'>
        <Typography className={classes.titleTextField}>Name</Typography>
        <TextField
          value={settingState.name}
          onChange={handleChange}
          id='outlined-basic'
          variant='outlined'
          size='small'
        />
        <Typography className={classes.titleTextField}>Level of difficult</Typography>
        <RadioGroup
          row
          onChange={handleChangeRadiobutton}
          defaultValue={settingState.difficulty}
          aria-labelledby='demo-row-radio-buttons-group-label'
          name='row-radio-buttons-group'
        >
          <FormControlLabel
            value={DifficultEnum.EASY}
            control={<Radio size='small' color='success' />}
            label='Easy'
          />
          <FormControlLabel
            value={DifficultEnum.MEDIUM}
            control={<Radio size='small' color='success' />}
            label='Medium'
          />
          <FormControlLabel
            value={DifficultEnum.HARD}
            control={<Radio size='small' color='success' />}
            label='Hard'
          />
        </RadioGroup>
        <Typography className={classes.titleTextField}>Description</Typography>
        <CKEditor
          data={settingState.description}
          config={config}
          editor={ClassicEditor}
          onChange={handleOnChangeEditor}
        ></CKEditor>
      </FormControl>
    </Stack>
  )
}
