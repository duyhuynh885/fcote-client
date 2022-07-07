import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Grid, Stack } from '@mui/material'
import useStyles from './style'
import TestsCard from './TestsCard'
import CustomeTestsCard from './CustomeTestsCard'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

export default function Testcase() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tab label='TEST' {...a11yProps(0)} className={classes.textTitle} />
        <Tab label='CUSTOME TEST' {...a11yProps(1)} className={classes.textTitle} />
        <Typography></Typography>
      </Box>
      <TabPanel value={value} index={0}>
        <TestsCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CustomeTestsCard />
      </TabPanel>
    </Box>
  )
}
