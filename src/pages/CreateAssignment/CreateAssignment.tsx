import React from 'react'
import CreateAssignmentNavBar from '../../components/NavBar/CreateAssignmentNavBar'
import { Box, Grid, Stack, Tab, Tabs } from '@mui/material'
import RegularButton from '../../components/Button/RegularButton'
import useStyles from './style'
import EditorTab from '../../components/Assignment/CreateAssignment/EditorTab'
import TestCaseTab from '../../components/Assignment/CreateAssignment/TestCaseTab'
import SettingTab from '../../components/Assignment/CreateAssignment/SettingTab'
import LanguageTab from '../../components/Assignment/CreateAssignment/LanguageTab'
import InputOutputTab from '../../components/Assignment/CreateAssignment/InputOutputTab'
import PreviewTab from '../../components/Assignment/CreateAssignment/PreviewTab'

/**
 * Create Assignment Pages
 *
 * Version 1.0
 *
 * Date: 10-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 10-06-2022         TuanLA           Create
 * 24-06-2022         DuyHV            Update UI
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

export default function CreateAssignment() {
  const [value, setValue] = React.useState(0)
  const [checked, setChecked] = React.useState([''])
  const [inputOutputList, setInputOutputList] = React.useState(0)
  const classes = useStyles()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Stack>
      <CreateAssignmentNavBar namePage='NEW ASSIGNMENT' />
      <Grid container className={classes.container}>
        <Grid className={classes.tabLeft} item xs={6} sx={{ height: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              className={classes.tabStyle}
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab className={classes.tabTitle} label='SETTINGS' {...a11yProps(0)} />
              <Tab className={classes.tabTitle} label='LANGUAGE' {...a11yProps(1)} />
              <Tab className={classes.tabTitle} label='INPUT/OUTPUT' {...a11yProps(2)} />
              <Tab className={classes.tabTitle} label='PREVIEW' {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <SettingTab />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <LanguageTab />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <InputOutputTab />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <PreviewTab />
          </TabPanel>
        </Grid>
        <Grid className={classes.tabRight} item xs={6} sx={{ height: '100%' }}>
          <Grid container>
            <Grid item xs={12} sx={{ height: '50%' }}>
              <EditorTab />
            </Grid>
            <Grid item xs={12} sx={{ height: '50%' }}>
              <TestCaseTab />
            </Grid>
          </Grid>
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
          Save
        </RegularButton>
      </Stack>
    </Stack>
  )
}
