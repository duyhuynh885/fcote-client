import { Box, Paper } from '@mui/material'
import React from 'react'
import useStyles from './style'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import LeaderboardsTable from './LeaderboardsTable/LeaderboardsTable'
/**
 * Leaderboard component
 *
 * Version 1.0
 *
 * Date: 24-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 24-06-2022         TuanLA           Create
 */

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
      id={`leaderboard-tabpanel-${index}`}
      aria-labelledby={`leaderboard-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  )
}

function ChangeValueProps(index: number) {
  return {
    id: `leaderboard-tab-${index}`,
    'aria-controls': `leaderboard-tabpanel-${index}`,
  }
}

export default function Leaderboard(props: any) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Paper
      elevation={8}
      square
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label='Leaderboard'>
            <Tab label='Universities' {...ChangeValueProps(0)} />
            <Tab label='Individual' {...ChangeValueProps(1)} />
            <Tab label='Group' {...ChangeValueProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <LeaderboardsTable type='university' rankingList={props.data}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <LeaderboardsTable type='individual' rankingList={props.data}/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <LeaderboardsTable type='group' rankingList={props.data}/>
        </TabPanel>
      </Box>
    </Paper>
  )
}
