import { Box, Paper, Typography} from '@mui/material'
import React from 'react'
import useStyles from './style'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import LeaderboardsTable from '../Ranking/LeaderboardsTable/LeaderboardsTable'
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
          <Typography>{children}</Typography>
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

export default function Leaderboard() {
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
      className={classes.paperRoot}
    >
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label='Leaderboard'>
            <Tab label='Item One' {...ChangeValueProps(0)} />
            <Tab label='Item Two' {...ChangeValueProps(1)} />
            <Tab label='Item Three' {...ChangeValueProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <LeaderboardsTable/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </Paper>
  )
}
