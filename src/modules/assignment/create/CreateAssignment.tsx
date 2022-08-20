import React, { useState } from 'react'
import { Box, Grid, Stack, Tab, Tabs } from '@mui/material'
import RegularButton from '../../../components/common/button/RegularButton'
import useStyles from './style'
import EditorTab from '../../../components/assignment/create/EditorTab'
import TestCaseTab from '../../../components/assignment/create/TestCaseTab'
import SettingTab from '../../../components/assignment/create/SettingTab'
import LanguageTab from '../../../components/assignment/create/LanguageTab'
import InputOutputTab from '../../../components/assignment/create/InputOutputTab'
import PreviewTab from '../../../components/assignment/create/PreviewTab'
import InsideNavBar from '../../../components/common/navigation/InsideNavBar'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../apps/ReduxContainer'
import {
  InputCreateAssignment,
  LanguageCreateAssignment,
  OutputCreateAssignment,
  SettingCreateAssignment,
  TestCaseCreateAssignment,
} from './type'
import { DifficultEnum } from '../list/type'
import { createAssignmentRequest } from './action'
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined'
import ConfirmModal from '../../../components/assignment/create/ConfirmModal'

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

export default function CreateAssignment() {
  const dispatch = useDispatch<AppDispatch>()
  const [value, setValue] = React.useState(0)
  const classes = useStyles()
  const [inputList, setInputList] = useState<InputCreateAssignment[]>([
    {
      order: 0,
      name: 'arg1',
      type: 1,
    },
  ])
  const [output, setOutput] = useState<OutputCreateAssignment>({
    order: 0,
    name: 'OUTPUT',
    type: 1,
  })
  const [setting, setSetting] = useState<SettingCreateAssignment>({
    name: '',
    difficulty: DifficultEnum.EASY,
  })
  const [testCaseList, setTestCaseList] = useState<TestCaseCreateAssignment[]>([])
  const [language, setLanguage] = useState<LanguageCreateAssignment[]>([
    {
      language: 'Python',
      timeLimit: 10,
    },
    {
      language: 'Java',
      timeLimit: 10,
    },
  ])
  const [openConfirmModal, setOpenConfirmModal] = React.useState(false)

  /**
   * Handle change tab in create assignment page
   * @param _event
   * @param newValue
   */
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  /**
   * Handle submit to create assignment
   */
  const handleSubmit = () => {
    handleCloseConfirmModal()
    dispatch(
      createAssignmentRequest({
        setting,
        language,
        inputOutput: { input: inputList, output: output },
        testCase: testCaseList,
      }),
    )
  }

  const handleClickOpenConfirmModal = () => {
    setOpenConfirmModal(true)
  }

  const handleCloseConfirmModal = () => {
    setOpenConfirmModal(false)
  }

  return (
    <Stack className={classes.container}>
      <InsideNavBar namePage='New Assignment' />
      <ConfirmModal
        openConfirmModal={openConfirmModal}
        handleClose={handleCloseConfirmModal}
        handleAgree={handleSubmit}
        description='Are you sure to create an assignment?'
      />
      <Grid container sx={{ height: '100% !important' }}>
        <Grid className={classes.tabLeft} item xs={6} sx={{ height: '100% !important' }}>
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
            <SettingTab setting={setting} handleSetting={setSetting} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <LanguageTab />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <InputOutputTab
              type={'CREATE'}
              inputList={inputList}
              output={output}
              handleInputList={setInputList}
              handleOutput={setOutput}
            />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <PreviewTab setting={setting} inputList={inputList} output={output} />
          </TabPanel>
        </Grid>
        <Grid className={classes.tabRight} item xs={6} sx={{ height: '100%' }}>
          <Grid item xs={12} sx={{ height: '50%' }}>
            <EditorTab />
          </Grid>
          <Grid item xs={12} sx={{ height: '50%' }}>
            <TestCaseTab
              type={'CREATE'}
              inputList={inputList}
              output={output}
              testCaseList={testCaseList}
              handleTestCaseList={setTestCaseList}
            />
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
          onClick={handleClickOpenConfirmModal}
        >
          <SaveAltOutlinedIcon fontSize='small' /> Save
        </RegularButton>
      </Stack>
    </Stack>
  )
}

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
