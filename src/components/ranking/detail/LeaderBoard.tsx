import { Box, Paper } from '@mui/material'
import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import LeaderBoardsTable from './LeaderBoardsTable/LeaderBoardsTable'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { updateFilterRankingRequest } from '../../../modules/ranking/action'
import useStyles from './style'

/**
 * LeaderBoard component
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
 * 19-07-2022         TuanLA           Update fetch API
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

export default function LeaderBoard(props: any) {
  const [value, setValue] = React.useState(0)
  const dispatch = useDispatch<AppDispatch>()
  const filterRankingState = useSelector((state: RootState) => state.ranking.rankingTypeRequest)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    dispatch(updateFilterRankingRequest({ ...filterRankingState, typeRanking: newValue + 1 }))
  }
  const classes = useStyles()

  return (
    <Paper
      elevation={2}
      square
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            className={classes.tabStyle}
            value={value}
            onChange={handleChange}
            aria-label='LeaderBoard'
          >
            <Tab className={classes.tabTitle} label='individual' {...ChangeValueProps(0)} />
            <Tab className={classes.tabTitle} label='Organization' {...ChangeValueProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <LeaderBoardsTable type='university' rankingList={props.data} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <LeaderBoardsTable type='organization' rankingList={props.data} />
        </TabPanel>
      </Box>
    </Paper>
  )
}
