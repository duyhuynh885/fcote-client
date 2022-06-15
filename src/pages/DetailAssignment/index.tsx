import * as React from 'react'
import DetailAssignmentStyle from './style'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import { textAlign } from '@mui/system'
import { Button, createTheme, ThemeProvider } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import Testcase from '../../components/Assignment/Testcase'
import IDE from '../../components/Assignment/IDE/IDE'

// const theme = createTheme({
//   overrides: {
//     MuiCssBaseline: {
//       "@global": {
//         "*::-webkit-scrollbar": {
//           width: "10px"
//         },
//         "*::-webkit-scrollbar-track": {
//           background: "#E4EFEF"
//         },
//         "*::-webkit-scrollbar-thumb": {
//           background: "#1D388F61",
//           borderRadius: "2px"
//         }
//       }
//     }
//   }
// });

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
  sx?: any
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
  const classes = DetailAssignmentStyle()
  const [value, setValue] = React.useState(0)

  const handleChange1 = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const handleChange2 = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Grid container spacing={0.5} columns={16}>
      <Grid item xs={16}>
        <Item elevation={4}>
          <Button
            sx={{
              float: 'left',
              ml: 'left',
              color: 'black',
              fontWeight: '800',
              fontSize: '20px',
              lineHeight: '27px',
            }}
          >
            <ArrowBackIosNewIcon />
            Back
          </Button>

          <Typography variant='h4' sx={{ fontWeight: '900', color: 'black' }}>
            Code Space
          </Typography>
        </Item>
      </Grid>

      <Grid item xs={8} sx={{ height: '100%' }}>
        <Item elevation={3} style={{ height: '754px' }}>
          <Box sx={{ mt: '0px', pl: '10px' }}>
            <Typography variant='h6' className={classes.textTitle}>
              CodeWriting
            </Typography>
            <Typography className={classes.textItem} sx={{}}>
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
            <Typography className={classes.textItem} sx={{ pl: '20px' }}>
              For param1 = 1 and param2 = 2, the output should be solution(param1, param2) = 3.
            </Typography>
            {/* INPUT/OUTPUT */}
            <Typography variant='h6' className={classes.textTitle} sx={{ pt: '20px' }}>
              Input/Output
            </Typography>
            <Typography className={classes.textItem} sx={{ pl: '20px' }}>
              [execution time limit] 3 seconds (java)
            </Typography>
            <Typography className={classes.textItem} sx={{ pl: '20px' }}>
              [input] integer param1
            </Typography>
            <Typography className={classes.textItem} sx={{ pl: '20px' }}>
              Guaranteed constraints: -1000 ≤ param1 ≤ 1000.
            </Typography>
            <Typography className={classes.textItem} sx={{ pl: '20px' }}>
              [input] integer param2
            </Typography>
            <Typography className={classes.textItem} sx={{ pl: '20px' }}>
              Guaranteed constraints: -1000 ≤ param2 ≤ 1000.
            </Typography>

            <Typography className={classes.textItem} sx={{ pl: '20px' }}>
              [output] integer
            </Typography>
            <Typography className={classes.textItem} sx={{ pl: '20px' }}>
              he sum of the two inputs.
            </Typography>
          </Box>
        </Item>
      </Grid>

      <Grid item xs={8}>
        <Item sx={{}} elevation={3}>
          <Box sx={{ width: '100%', height: '375px' }}>
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
        </Item>

        <Item sx={{ mt: '5px' }} elevation={3}>
          <Box
            sx={{
              '&::-webkit-scrollbar': {
                width: 20,
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'orange !important',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'red !important',
                borderRadius: 2,
              },
              width: '100% !important',
              height: '375px !important',
            }}
          >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange1} aria-label='basic tabs '>
                <Tab label='TEST' {...a11yProps(0)} className={classes.textTitle} />

                <Tab label='CUSTOME TEST' {...a11yProps(1)} className={classes.textTitle} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflowY: 'scroll',
                  flex: 1,
                }}
              >
                <Testcase />
              </div>
            </TabPanel>
            <TabPanel sx={{}} value={value} index={1}>
              CUSTOME TEST
            </TabPanel>
          </Box>
        </Item>
      </Grid>
    </Grid>
  )
}
