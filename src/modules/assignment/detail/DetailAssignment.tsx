import * as React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import { Stack, Divider } from '@mui/material'
import Testcase from '../../../components/assignment/detail/Testcase'
import IDE from '../../../components/assignment/general/IDE'
import useStyles from './style'
import InsideNavBar from '../../../components/common/navigation/InsideNavBar'
import RegularButton from '../../../components/common/button/RegularButton'
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot'
import TurnedInIcon from '@mui/icons-material/TurnedIn'

/**
 * Detail Assignment
 * <p>
 * Version 1.0
 * <p>
 * Date: 09-06-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 09-06-2022      HuyNT2711           Create
 */

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
  sx?: any
}

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
        <Box sx={{ p: 0 }}>
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

export default function DetailAssignment() {
  const classes = useStyles()
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark' ? `${classes.colorLightBlack}` : `${classes.colorWhite}`,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))
  const [value, setValue] = React.useState(0)
  const handleChange1 = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Stack>
      <InsideNavBar namePage='Code Space' />
      <Grid container className={classes.container}>
        <Grid className={classes.tabLeft} item xs={6} sx={{ height: '100%' }}>
          <Box sx={{ mt: '0px', pl: '10px' }}>
            <Typography variant='h6' className={classes.textTitle}>
              CodeWriting
            </Typography>
            <Typography className={classes.textItem}>
              Công ty X đang xây dựng một công trình trong n ngày và mỗi ngày cần k công nhân. Có m
              công ty cho thuê công nhân hire. Mỗi công ty được biểu diễn dưới dạng mảng [l,r,c,p].
              Công ty thứ i sẽ có chính sách cho thuê công nhân từ ngày l đến ngày r, mỗi ngày sẽ
              cho thuê tối đa c công nhân với giá p đồng trên 1 công nhân. Nếu ngày thứ i không thuê
              đủ k công nhân thì công ty sẽ thuê hết tất cả các công nhân có thể thuê. Công ty muốn
              tìm ra tổng số tiền bỏ ra thuê công nhân là ít nhất.
            </Typography>
            {/* EXAMPLE */}
            <Typography variant='h6' className={classes.textTitle} sx={{ mt: '20px' }}>
              Example
            </Typography>
            <Typography className={classes.textItem}>
              For param1 = 1 and param2 = 2, the output should be solution(param1, param2) = 3.
            </Typography>
            {/* INPUT/OUTPUT */}
            <Typography variant='h6' className={classes.textTitle}>
              Input/Output
            </Typography>
            <Typography className={classes.textItem}>
              [execution time limit] 3 seconds (java)
            </Typography>
            <Typography className={classes.textItem}>[input] integer param1</Typography>
            <Typography className={classes.textItem}>
              Guaranteed constraints: -1000 ≤ param1 ≤ 1000.
            </Typography>
            <Typography className={classes.textItem}>[input] integer param2</Typography>
            <Typography className={classes.textItem}>
              Guaranteed constraints: -1000 ≤ param2 ≤ 1000.
            </Typography>
            <Typography className={classes.textItem}>[output] integer</Typography>
            <Typography className={classes.textItem}>he sum of the two inputs.</Typography>
          </Box>
        </Grid>
        <Grid className={classes.tabRight} item xs={6} sx={{ height: '100%' }}>
          <Grid container>
            <Grid item xs={12} sx={{ height: '55vh' }}>
              <Box>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange1} aria-label='basic tabs example'>
                    <Tab label='test.java' {...a11yProps(0)} className={classes.textTitle} />
                    <Tab label='Author solution' {...a11yProps(1)} className={classes.textTitle} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <IDE />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Author solution
                </TabPanel>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Divider />
              <Testcase />
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
                  className={classes.button}
                >
                  <TurnedInNotIcon />
                  RUN CODE
                </RegularButton>
                <Divider />
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
                  className={classes.button}
                >
                  <TurnedInIcon />
                  SUBMIT
                </RegularButton>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  )
}
