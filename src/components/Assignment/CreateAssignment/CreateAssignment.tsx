/**
 * Auth Header
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
 */
import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

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
// Form Input Create Assignment
function FormInput() {
  const [type, setType] = React.useState('')

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setType(event.target.value as string)
  }
  return (
    <React.Fragment>
      <Grid item xs={6}>
        Name
        <TextField fullWidth id='outlined-basic' label='Name' variant='outlined' />
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          Type
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={type}
            label='Type'
            onChange={handleChangeSelect}
          >
            {['Integer', 'Double', 'String', 'Float', 'Character'].map((value) => {
              return (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        Description
        <TextField fullWidth multiline rows={2} maxRows={5} />
      </Grid>
    </React.Fragment>
  )
}

export default function CreateAssignment() {
  const [value, setValue] = React.useState(0)
  const [checked, setChecked] = React.useState([''])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }
  let index = 0
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
              <FormControl fullWidth sx={{ m: 1 }} variant='filled'>
                <TextField id='outlined-basic' label='Name' variant='outlined' />
              </FormControl>
            </TabPanel>
            <TabPanel value={value} index={1}>
              LANGUAGE
              <List
                sx={{
                  width: '100%',
                  maxWidth: 'auto',
                  bgcolor: 'background.paper',
                }}
              >
                {['C#', 'Java', 'Python2', 'Python3', 'C', 'C++', 'JavaScript'].map((value) => {
                  const labelId = `checkbox-list-label-${index++}`
                  return (
                    <ListItem key={value} disablePadding>
                      <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                        <ListItemIcon>
                          <Checkbox
                            edge='start'
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`${value}`} />
                        <TextField id='standard-basic' variant='standard' />
                      </ListItemButton>
                    </ListItem>
                  )
                })}
              </List>
            </TabPanel>
            <TabPanel value={value} index={2}>
              INPUT/OUTPUT
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid container item spacing={4}>
                    <FormInput />
                  </Grid>
                  <Grid container item spacing={4}>
                    <FormInput />
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={3}>
              PREVIEW
            </TabPanel>
          </Box>
        </Item>
      </Grid>

      <Grid item xs={8}>
        <Item>xs=8</Item>
        <Item></Item>
      </Grid>
    </Grid>
  )
}
