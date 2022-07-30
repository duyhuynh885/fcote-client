import * as React from 'react'
import {
  Avatar,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material'
import useStyles from './style'
import { ReactComponent as Gold } from '../../../../assets/Gold.svg'
import { ReactComponent as Platinum } from '../../../../assets/Platinum.svg'
import { ReactComponent as Bronze } from '../../../../assets/Bronze.svg'
import { AssignmentList, Submit, UserInfo } from '../../../../modules/challenge/detail/type'
import { Link, useRouteMatch } from 'react-router-dom'

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

interface TableChallengeProps {
  assignmentList: AssignmentList[]
  submits: Submit[]
}

interface AssignmentResult {
  point: string | number
  progressTime: string | number
  compileTime: string | number
  numberTry: string
  numberSubmit: string | number
}

interface TotalResult {
  totalPoint: number
  totalProgressTime: number
  totalCompileTime: number
  totalNumberTry: number
  totalNumberSubmit: number
}

interface IDataRow {
  ranking: number
  userInfo: UserInfo
  result: AssignmentResult[]
  total: TotalResult
}

export default function TableChallenge(props: TableChallengeProps) {
  const classes = useStyles()
  const { assignmentList, submits } = props
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const match = useRouteMatch()

  function createData({ ranking, userInfo, result, total }: IDataRow): IDataRow {
    return { ranking, userInfo, result, total }
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleShowResultSubmit = () => {
    return submits.map((submit) => {
      const total: TotalResult = {
        totalPoint: 0,
        totalProgressTime: 0,
        totalCompileTime: 0,
        totalNumberTry: 0,
        totalNumberSubmit: 0,
      }
      const result: AssignmentResult[] = submit.assignmentResults.map((_assignmentResult) => {
        total.totalPoint +=
          typeof _assignmentResult.highestScore === 'string' ? 0 : _assignmentResult.highestScore
        total.totalProgressTime +=
          typeof _assignmentResult.shortestRuntime === 'string'
            ? 0
            : _assignmentResult.shortestRuntime
        total.totalCompileTime +=
          typeof _assignmentResult.time === 'string' ? 0 : _assignmentResult.time
        total.totalNumberTry +=
          typeof _assignmentResult.counter === 'string' ? 0 : _assignmentResult.counter
        total.totalNumberSubmit +=
          typeof _assignmentResult.counter === 'string' ? 0 : _assignmentResult.counter
        return {
          point: _assignmentResult.highestScore,
          progressTime: _assignmentResult.shortestRuntime,
          compileTime: _assignmentResult.time,
          numberTry: _assignmentResult.counter,
          numberSubmit: _assignmentResult.counter,
        } as AssignmentResult
      })
      return createData({
        ranking: submit.ranking,
        userInfo: submit.userInfo,
        result,
        total,
      })
    })
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

  const handleShowTitleTable = () => {
    const nameAssignment = ['A', 'B', 'C', 'D', 'E', 'F']
    return assignmentList.map((assignment, index) => (
      <TableCell key={index} className={classes.tableHeaderCell}>
        <Typography className={classes.textHeaderCell}>
          <Link
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to={`${match.url}/assignment/${assignment.assignmentId}`}
          >
            {nameAssignment[assignment.order - 1]}(100)
          </Link>
        </Typography>
      </TableCell>
    ))
  }

  return (
    <Paper
      square
      elevation={8}
      sx={{ width: '100%', overflow: 'hidden' }}
      className={classes.container}
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
              {handleShowTitleTable()}
              <TableCell className={classes.tableHeaderCell}>
                <Typography className={classes.textHeaderCell}>TOTAL</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {handleShowResultSubmit()
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role='checkbox'
                    tabIndex={-1}
                    key={row.ranking}
                    className={
                      row.ranking % 2 === 0 ? classes.tableRowBody1 : classes.tableRowBody2
                    }
                  >
                    <TableCell className={classes.tableItemCell}>
                      {renderRanking(row.ranking)}
                    </TableCell>
                    <TableCell className={classes.tableItemCell}>
                      <Grid container>
                        <Grid item xs={3} lg={3} className={classes.avatarWrapper}>
                          <Avatar
                            className={classes.avatar}
                            alt={row.userInfo.avatar}
                            src={row.userInfo.avatar}
                          />
                        </Grid>
                        <Grid item xs={9} lg={9}>
                          <Typography className={classes.textUsername}>
                            {row.userInfo.username}
                          </Typography>
                          <Typography className={classes.textAddressOrganization}>
                            {row.userInfo.city}
                          </Typography>
                          <Typography className={classes.textAddressOrganization}>
                            {row.userInfo.organization}
                          </Typography>
                        </Grid>
                      </Grid>
                    </TableCell>
                    {row.result.map((_result, index) => (
                      <TableCell key={index} className={classes.tableItemCell}>
                        <Stack direction='column' alignItems='center'>
                          <Typography className={classes.textPoint}>{_result.point}</Typography>
                          <Typography className={classes.textItemCell}>
                            {_result.progressTime}
                          </Typography>
                          <Typography className={classes.textItemCell}>
                            {_result.compileTime} s
                          </Typography>
                          <Typography className={classes.textItemCell}>
                            {_result.numberTry} try
                          </Typography>
                          <Typography className={classes.textItemCell}>
                            {_result.numberSubmit}/10 submission
                          </Typography>
                        </Stack>
                      </TableCell>
                    ))}
                    <TableCell className={classes.tableItemCellOfTotal}>
                      <Typography className={classes.textPointOfTotal}>
                        {row.total.totalPoint}
                      </Typography>
                      <Typography className={classes.textItemCell}>
                        {row.total.totalProgressTime}
                      </Typography>
                      <Typography className={classes.textItemCell}>
                        {row.total.totalCompileTime} s
                      </Typography>
                      <Typography className={classes.textItemCell}>
                        {row.total.totalNumberTry} tries
                      </Typography>
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
        count={handleShowResultSubmit().length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
