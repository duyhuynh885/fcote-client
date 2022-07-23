import { Box, Stack, Tabs, Tab } from '@mui/material'
import React from 'react'
import SwapLanguageCode from '../../common/button/SwapLanguageCode'
import IDE from '../general/IDE'
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

interface IDETabProps {
  sourceCode: string
  onChangeSourceCode: (sourceCode: string) => void
  language: number
  handleChangeLanguage: (language: number) => void
}

export default function IDETab(props: IDETabProps) {
  const [value, setValue] = React.useState(0)
  const classes = useStyles()
  const { sourceCode, onChangeSourceCode, language, handleChangeLanguage } = props
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Stack>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Tabs
          className={classes.tabEditor}
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab className={classes.tabFileName} label='test.java' {...a11yProps(0)} />
        </Tabs>
        <SwapLanguageCode language={language} onChange={handleChangeLanguage} />
      </Box>
      <TabPanel value={value} index={0}>
        <IDE language={language} sourceCode={sourceCode} onChange={onChangeSourceCode} />
      </TabPanel>
    </Stack>
  )
}
