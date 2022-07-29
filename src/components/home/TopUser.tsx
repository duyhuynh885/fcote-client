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
import { ReactComponent as Gold } from '../../assets/Gold.svg'
import { ReactComponent as Platinum } from '../../assets/Platinum.svg'
import { ReactComponent as Bronze } from '../../assets/Bronze.svg'
import { FakeDataChallengDetails } from '../challenge/general/TableChallenge/FakeDataChallengeDetail'
import useStyles from './style'

/**
 * Table Challenge
 *
 * Version 1.0
 *
 * Date: 30-06-2022
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 30-06-2022      HuyNT2711           Create
 */

export default function TopUser() {
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
                <Typography className={classes.textHeaderCell}>Point</Typography>
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
                  className={classes.tableRowBody2}
                >
                  <TableCell className={classes.tableRankingCell}>
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
                      <Grid item xs={9} lg={9} sx={{ paddingLeft: '0.3em', paddingTop: '0.4em' }}>
                        <Typography className={classes.textUsername}>
                          {row.username.name}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>

                  <TableCell className={classes.tableItemCellOfTotal}>
                    <Typography className={classes.textPointOfTotal}>{row.total.point}</Typography>
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
