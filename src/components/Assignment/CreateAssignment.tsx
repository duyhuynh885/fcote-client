import * as React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

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
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function CreateAssignment() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Grid container spacing={2} columns={16}>
      <Grid item xs={8}>
        <Item>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
                <Tab label='SETTINGS' {...a11yProps(0)} />
                <Tab label='LANGUAGE' {...a11yProps(1)} />
                <Tab label='INPUT/OUTPUT' {...a11yProps(2)} />
                <Tab label='PREVIEW' {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              SETTINGS
            </TabPanel>
            <TabPanel value={value} index={1}>
              LANGUAGE
            </TabPanel>
            <TabPanel value={value} index={2}>
              INPUT/OUTPUT
            </TabPanel>
            <TabPanel value={value} index={3}>
              PREVIEW
            </TabPanel>
          </Box>
        </Item>
      </Grid>

      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  )
}
