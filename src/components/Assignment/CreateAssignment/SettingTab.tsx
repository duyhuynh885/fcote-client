import { FormControl, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import useStyles from './style'
import parse from 'html-react-parser'

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

  const [editorState, setEditorState] = useState('')
  const handleOnChange = (event: any, editor: ClassicEditor) => {
    const data = editor.getData()
    setEditorState(data)
  }
  return (
    <Stack sx={{ height: '100%' }}>
      <FormControl fullWidth variant='filled'>
        <Typography className={classes.titleTextField}>Name</Typography>
        <TextField id='outlined-basic' variant='outlined' />
        <Typography className={classes.titleTextField}>Description</Typography>
        <CKEditor config={config} editor={ClassicEditor} onChange={handleOnChange}></CKEditor>
        <div>{parse(editorState)}</div>
      </FormControl>
    </Stack>
  )
}
