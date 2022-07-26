import { Box, Tab, Tabs } from '@mui/material'
import React from 'react'

/**
 * Nav filter component
 *
 * Version 1.0
 *
 * Date: 21-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 21-06-2022         DuyHV           Create
 */

export default function NavFilter() {
  const [value, setValue] = React.useState('one')

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', marginTop: 0, marginBottom: 5 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor='secondary'
        indicatorColor='secondary'
        aria-label='secondary tabs example'
      >
        <Tab value='one' label='Item One' />
        <Tab value='two' label='Item Two' />
        <Tab value='three' label='Item Three' />
      </Tabs>
    </Box>
  )
}
