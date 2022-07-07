import React from 'react'
import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
} from '@mui/material'

/**
 * Language tab component
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

export default function LanguageTab() {
  const [checked, setChecked] = React.useState([''])
  let index = 0

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }
  return (
    <Stack>
      <List
        sx={{
          width: '100%',
          maxWidth: 'auto',
          bgcolor: 'background.paper',
        }}
      >
        {['C#', 'Java', 'Python2', 'Python3', 'C', 'C++', 'JavaScript'].map((value) => {
          const labelId = `checkbox-list-label-${index++}`
          return (
            <ListItem key={value} disablePadding>
              <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge='start'
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${value}`} />
                <TextField id='standard-basic' variant='standard' />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Stack>
  )
}
