import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import { SettingCreateAssignment } from '../../../modules/assignment/create/type'
import { DifficultEnum } from '../../../modules/assignment/list/type'
import useStyles from './style'

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
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      '|',
      'link',
      '|',
      'outdent',
      'indent',
      '|',
      'bulletedList',
      'numberedList',
      '|',
      'insertTable',
      'blockQuote',
      '|',
      'undo',
      'redo',
    ],
    shouldNotGroupWhenFull: true,
  },
}

interface SettingTabProps {
  type: 'CREATE' | 'EDIT'
  setting: SettingCreateAssignment
  handleSetting: (setting: SettingCreateAssignment) => void
}

export default function SettingTab(props: SettingTabProps) {
  const { setting, handleSetting, type } = props
  const classes = useStyles()

  /**
   * Handle update description of setting
   * @param _event
   * @param editor
   */
  const handleOnChangeEditor = (_event: any, editor: ClassicEditor) => {
    handleSetting({
      ...setting,
      description: editor.getData(),
    })
  }

  /**
   * Handle update name of setting
   * @param event
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSetting({
      ...setting,
      name: event.target.value.trim(),
    })
  }

  /**
   * Handle update difficulty of setting
   * @param event
   */
  const handleChangeRadiobutton = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSetting({
      ...setting,
      difficulty: +event.target.value,
    })
  }

  return (
    <Box className={classes.scrollBar}>
      <FormControl fullWidth variant='filled'>
        <Typography className={classes.titleTextField}>Name</Typography>
        <TextField
          value={setting.name}
          onChange={handleChange}
          id='outlined-basic'
          variant='outlined'
          size='small'
          color='success'
        />
        <Typography className={classes.titleTextField}>
          No spaces. Only letters and numbers starting with a letter.
        </Typography>
        <Typography className={classes.titleTextField}>Level of difficult</Typography>
        <RadioGroup
          row
          onChange={handleChangeRadiobutton}
          value={setting.difficulty}
          aria-labelledby='demo-row-radio-buttons-group-label'
          name='row-radio-buttons-group'
        >
          <FormControlLabel
            disabled={type === 'EDIT' ? true : false}
            value={DifficultEnum.EASY}
            control={<Radio size='small' color='success' />}
            label='Easy'
          />
          <FormControlLabel
            disabled={type === 'EDIT' ? true : false}
            value={DifficultEnum.MEDIUM}
            control={<Radio size='small' color='success' />}
            label='Medium'
          />
          <FormControlLabel
            disabled={type === 'EDIT' ? true : false}
            value={DifficultEnum.HARD}
            control={<Radio size='small' color='success' />}
            label='Hard'
          />
        </RadioGroup>
        <Typography className={classes.titleTextField}>Description</Typography>
        <CKEditor
          data={setting.description}
          config={config}
          editor={ClassicEditor}
          onBlur={handleOnChangeEditor}
        ></CKEditor>
      </FormControl>
    </Box>
  )
}
