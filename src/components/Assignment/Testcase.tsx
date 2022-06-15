import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { Box, Grid, TableContainer } from '@mui/material'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#22C283' : '#22C283',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

export default function Testcase() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1')

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <TableContainer
        sx={{
          '&::-webkit-scrollbar': {
            width: 20,
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'orange',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'red',
            borderRadius: 2,
          },
        }}
      >
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
            <Typography>Test 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid columns={12} container>
              <Grid item xs={12}>
                <Typography sx={{ float: 'left' }}>Input:</Typography>
                <Typography sx={{ ml: '11rem' }}>
                  [[3,3,1,10],[7,9,8,11],[7,8,5,25],[2,7,7,29],[2,5,8,37],[2,3,6,45],[2,4,7,56],[8,8,10,63],[9,10,10,68],[5,10,1,80]],10,20
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ float: 'left' }}>Actual output:</Typography>
                <Typography sx={{ ml: '11rem' }}></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ float: 'left' }}>Expected output:</Typography>
                <Typography sx={{ ml: '11rem' }}>5732</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ float: 'left' }}>Execute time limit :</Typography>
                <Typography sx={{ ml: '11rem' }}>40000 ms</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ float: 'left' }}>Execute time :</Typography>
                <Typography sx={{ ml: '11rem' }}></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ float: 'left' }}>Message:</Typography>
                <Typography sx={{ ml: '11rem' }}></Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
            <Typography>Test 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid columns={12} container>
              <Grid item xs={12}>
                <Typography sx={{ float: 'left' }}>Input:</Typography>
                <Typography sx={{ ml: '11rem' }}>
                  [[3,3,1,10],[7,9,8,11],[7,8,5,25],[2,7,7,29],[2,5,8,37],[2,3,6,45],[2,4,7,56],[8,8,10,63],[9,10,10,68],[5,10,1,80]],10,20
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ float: 'left' }}>Actual output:</Typography>
                <Typography sx={{ ml: '11rem' }}></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ float: 'left' }}>Expected output:</Typography>
                <Typography sx={{ ml: '11rem' }}>5732</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ float: 'left' }}>Execute time limit :</Typography>
                <Typography sx={{ ml: '11rem' }}>40000 ms</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ float: 'left' }}>Execute time :</Typography>
                <Typography sx={{ ml: '11rem' }}></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ float: 'left' }}>Message:</Typography>
                <Typography sx={{ ml: '11rem' }}></Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
            <Typography>Test 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid columns={12} container>
              <Grid item xs={12}>
                <Typography sx={{ float: 'left' }}>Input:</Typography>
                <Typography sx={{ ml: '11rem' }}>
                  [[3,3,1,10],[7,9,8,11],[7,8,5,25],[2,7,7,29],[2,5,8,37],[2,3,6,45],[2,4,7,56],[8,8,10,63],[9,10,10,68],[5,10,1,80]],10,20
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ float: 'left' }}>Actual output:</Typography>
                <Typography sx={{ ml: '11rem' }}></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ float: 'left' }}>Expected output:</Typography>
                <Typography sx={{ ml: '11rem' }}>5732</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ float: 'left' }}>Execute time limit :</Typography>
                <Typography sx={{ ml: '11rem' }}>40000 ms</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ float: 'left' }}>Execute time :</Typography>
                <Typography sx={{ ml: '11rem' }}></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ float: 'left' }}>Message:</Typography>
                <Typography sx={{ ml: '11rem' }}></Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </TableContainer>
    </div>
  )
}
