import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Grid, Stack } from '@mui/material'
import useStyles from './style'

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

export default function TestsCard() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const classes = useStyles()
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 224,
        padding: '0px',
      }}
    >
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
        sx={{ width: '10vw', padding: '0px' }}
        className={classes.tabs}
      >
        <Tab label='Test Case 1' {...a11yProps(0)} />
        <Tab label='Test Case 2' {...a11yProps(1)} />
        <Tab label='Test Case 3' {...a11yProps(2)} />
        <Tab label='Test Case 4' {...a11yProps(3)} />
        <Tab label='Test Case 5' {...a11yProps(4)} />
        <Tab label='Test Case 6' {...a11yProps(5)} />
        <Tab label='Test Case 7' {...a11yProps(6)} />
      </Tabs>
      <Stack sx={{ width: '100%' }} className={classes.scrollBar}>
        <TabPanel value={value} index={0}>
          <Grid container>
            <Grid item xs={12} className={classes.gridTestcase}>
              <Typography className={classes.textRight}>Input:</Typography>
              <Typography>
                [[3,3,1,10],[7,9,8,11],[7,8,5,25],[2,7,7,29],[2,5,8,37],[2,3,6,45],[2,4,7,56],[8,8,10,63],[9,10,10,68],[5,10,1,80]],10,20
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.gridTestcase}>
              <Typography className={classes.textRight}>Actual output:</Typography>
              <Typography></Typography>
            </Grid>
            <Grid item xs={12} className={classes.gridTestcase}>
              <Typography className={classes.textRight}>Expected output:</Typography>
              <Typography>5732</Typography>
            </Grid>
            <Grid item xs={12} className={classes.gridTestcase}>
              <Typography className={classes.textRight}>Execute time limit :</Typography>
              <Typography>40000 ms</Typography>
            </Grid>
            <Grid item xs={12} className={classes.gridTestcase}>
              <Typography className={classes.textRight}>Execute time :</Typography>
              <Typography></Typography>
            </Grid>
            <Grid item xs={12} className={classes.gridTestcase}>
              <Typography className={classes.textRight}>Message:</Typography>
              <Typography></Typography>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}></TabPanel>
        <TabPanel value={value} index={2}>
          Item three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Stack>
    </Box>
  )
}
