import * as React from 'react'
import {
  Avatar,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import useStyles from './style'

import { ReactComponent as Gold } from '../../../../asset/Gold.svg'
import { ReactComponent as Platinum } from '../../../../asset/Platinum.svg'
import { ReactComponent as Bronze } from '../../../../asset/Bronze.svg'
import { FakeDataChallengDetails } from '../../../Challenge/TableChallenge/FakeDataChallengeDetail'
import LogoutIcon from '@mui/icons-material/Logout'

export default function Member() {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const rows = FakeDataChallengDetails
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  function renderRanking(ranking: number) {
    {
      switch (ranking) {
        case 1:
          return <Gold className={classes.assignmentWardIcon} />
        case 2:
          return <Platinum className={classes.assignmentWardIcon}></Platinum>
        case 3:
          return <Bronze className={classes.assignmentWardIcon}></Bronze>
        default:
          return <Typography className={classes.ranking}>{ranking}</Typography>
      }
    }
  }

  return (
    <Paper
      square
      elevation={4}
      sx={{ width: '100%', overflow: 'hidden' }}
      className={classes.containerWraper}
    >
      <TableContainer sx={{ maxHeight: 440 }} className={classes.tableContainer}>
        <Table stickyHeader aria-label='sticky table' className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCellRanking}>
                <Typography className={classes.textHeaderCell}>RANK</Typography>
              </TableCell>
              <TableCell className={classes.tableHeaderCellUsername}>
                <Typography className={classes.textHeaderCell}>USER NAME</Typography>
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                <Typography className={classes.textHeaderCell}>TOTAL COMPLETED</Typography>
              </TableCell>
              <TableCell className={classes.tableHeaderCell} sx={{ maxWidth: '4em' }}>
                <Typography className={classes.textHeaderCell}>TOTAL MISSING</Typography>
              </TableCell>
              <TableCell className={classes.tableHeaderCell} sx={{ maxWidth: '4em' }}>
                <Typography className={classes.textHeaderCell}>TOTAL SCORE</Typography>
              </TableCell>
              <TableCell className={classes.tableHeaderCellFinal} sx={{ maxWidth: '4em' }}>
                <Typography className={classes.textHeaderCell}></Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow
                  hover
                  role='checkbox'
                  tabIndex={-1}
                  key={row.ranking}
                  className={row.ranking % 2 === 0 ? classes.tableRowBody1 : classes.tableRowBody2}
                >
                  <TableCell className={classes.tableItemCell}>
                    {renderRanking(row.ranking)}
                  </TableCell>
                  <TableCell className={classes.tableItemCell}>
                    <Grid container>
                      <Grid item xs={3} lg={3} className={classes.avatarWrapper}>
                        <Avatar
                          className={classes.avatar}
                          alt={row.username.avatar}
                          src={row.username.avatar}
                        />
                      </Grid>
                      <Grid item xs={9} lg={9} sx={{ paddingLeft: '0.3em' }}>
                        <Typography className={classes.textUsername}>
                          {row.username.name}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell className={classes.tableItemCell}>
                    <Box display={'flex'} sx={{ flexDirection: 'column' }}>
                      <Typography className={classes.textPoint}>{row.a.point}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell className={classes.tableItemCell}>
                    <Box display={'flex'} sx={{ flexDirection: 'column' }}>
                      <Typography className={classes.textPoint}>{row.b.point}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell className={classes.tableItemCell}>
                    <Box display={'flex'} sx={{ flexDirection: 'column' }}>
                      <Typography className={classes.textPoint}>{row.c.point}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell className={classes.tableItemCell}>
                    <Box display={'flex'} sx={{ flexDirection: 'column' }}>
                      <LogoutIcon />
                    </Box>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
