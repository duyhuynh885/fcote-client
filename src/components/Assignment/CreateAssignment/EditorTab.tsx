import Editor from '@monaco-editor/react'
import { Box, Stack, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import IDE from '../IDE/IDE'
import useStyles from './style'

/**
 * Editor tab component
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

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}

export default function EditorTab() {
  const [value, setValue] = React.useState(0)
  const [checked, setChecked] = React.useState([''])
  const classes = useStyles()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Stack>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          className={classes.tabEditor}
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab className={classes.tabFileName} label='test.java' {...a11yProps(0)} />
          <Tab className={classes.tabTitle} label='Author Solution' {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <IDE />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <IDE />
      </TabPanel>
    </Stack>
  )
}
