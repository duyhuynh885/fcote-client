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
import { FakeDataChallengDetails } from './FakeDataChallengeDetail'
import { ReactComponent as Gold } from '../../../../assets/Gold.svg'
import { ReactComponent as Platinum } from '../../../../assets/Platinum.svg'
import { ReactComponent as Bronze } from '../../../../assets/Bronze.svg'

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

export default function TableChallenge() {
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
      elevation={8}
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
                <Typography className={classes.textHeaderCell}>A(100)</Typography>
              </TableCell>
              <TableCell className={classes.tableHeaderCell} sx={{ maxWidth: '4em' }}>
                <Typography className={classes.textHeaderCell}>B(150)</Typography>
              </TableCell>
              <TableCell className={classes.tableHeaderCell} sx={{ maxWidth: '4em' }}>
                <Typography className={classes.textHeaderCell}>C(130)</Typography>
              </TableCell>
              <TableCell className={classes.tableHeaderCell} sx={{ maxWidth: '4em' }}>
                <Typography className={classes.textHeaderCell}>D(100)</Typography>
              </TableCell>
              <TableCell className={classes.tableHeaderCell} sx={{ maxWidth: '4em' }}>
                <Typography className={classes.textHeaderCell}>E(150)</Typography>
              </TableCell>
              <TableCell className={classes.tableHeaderCell} sx={{ maxWidth: '4em' }}>
                <Typography className={classes.textHeaderCell}>F(100)</Typography>
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                <Typography className={classes.textHeaderCell}>TOTAL</Typography>
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
                        <Typography className={classes.textAddressOrganization}>
                          {row.username.address}
                        </Typography>
                        <Typography className={classes.textAddressOrganization}>
                          {row.username.organization}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell className={classes.tableItemCell}>
                    <Box display={'flex'} sx={{ flexDirection: 'column' }}>
                      <Typography className={classes.textPoint}>{row.a.point}</Typography>
                      <Typography className={classes.textItemCell}>{row.a.progressTime}</Typography>
                      <Typography className={classes.textItemCell}>{row.a.complieTime}</Typography>
                      <Typography className={classes.textItemCell}>{row.a.numberTry}</Typography>
                      <Typography className={classes.textItemCell}>{row.a.numberSubmit}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell className={classes.tableItemCell}>
                    <Box display={'flex'} sx={{ flexDirection: 'column' }}>
                      <Typography className={classes.textPoint}>{row.b.point}</Typography>
                      <Typography className={classes.textItemCell}>{row.b.progressTime}</Typography>
                      <Typography className={classes.textItemCell}>{row.b.complieTime}</Typography>
                      <Typography className={classes.textItemCell}>{row.b.numberTry}</Typography>
                      <Typography className={classes.textItemCell}>{row.b.numberSubmit}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell className={classes.tableItemCell}>
                    <Box display={'flex'} sx={{ flexDirection: 'column' }}>
                      <Typography className={classes.textPoint}>{row.c.point}</Typography>
                      <Typography className={classes.textItemCell}>{row.c.progressTime}</Typography>
                      <Typography className={classes.textItemCell}>{row.c.complieTime}</Typography>
                      <Typography className={classes.textItemCell}>{row.c.numberTry}</Typography>
                      <Typography className={classes.textItemCell}>{row.c.numberSubmit}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell className={classes.tableItemCell}>
                    <Box display={'flex'} sx={{ flexDirection: 'column' }}>
                      <Typography className={classes.textPoint}>{row.d.point}</Typography>
                      <Typography className={classes.textItemCell}>{row.d.progressTime}</Typography>
                      <Typography className={classes.textItemCell}>{row.d.complieTime}</Typography>
                      <Typography className={classes.textItemCell}>{row.d.numberTry}</Typography>
                      <Typography className={classes.textItemCell}>{row.d.numberSubmit}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell className={classes.tableItemCell}>
                    <Box display={'flex'} sx={{ flexDirection: 'column' }}>
                      <Typography className={classes.textPoint}>{row.e.point}</Typography>
                      <Typography className={classes.textItemCell}>{row.e.progressTime}</Typography>
                      <Typography className={classes.textItemCell}>{row.e.complieTime}</Typography>
                      <Typography className={classes.textItemCell}>{row.e.numberTry}</Typography>
                      <Typography className={classes.textItemCell}>{row.e.numberSubmit}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell className={classes.tableItemCell}>
                    <Box display={'flex'} sx={{ flexDirection: 'column' }}>
                      <Typography className={classes.textPoint}>{row.f.point}</Typography>
                      <Typography className={classes.textItemCell}>{row.f.progressTime}</Typography>
                      <Typography className={classes.textItemCell}>{row.f.complieTime}</Typography>
                      <Typography className={classes.textItemCell}>{row.f.numberTry}</Typography>
                      <Typography className={classes.textItemCell}>{row.f.numberSubmit}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell className={classes.tableItemCellOfTotal}>
                    <Typography className={classes.textPointOfTotal}>{row.total.point}</Typography>
                    <Typography className={classes.textItemCell}>
                      {row.total.progressTime}
                    </Typography>
                    <Typography className={classes.textItemCell}>
                      {row.total.complieTime}
                    </Typography>
                    <Typography className={classes.textItemCell}>{row.total.numberTry}</Typography>
                    <Typography className={classes.textItemCell}></Typography>
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
