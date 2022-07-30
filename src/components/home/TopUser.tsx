import {
  Avatar,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import * as React from 'react'
import { ReactComponent as Bronze } from '../../assets/Bronze.svg'
import { ReactComponent as Gold } from '../../assets/Gold.svg'
import { ReactComponent as Platinum } from '../../assets/Platinum.svg'
import { UserInfo } from '../../modules/ranking/type'
import useStyles from './style'

/**
 * Top User Component
 *
 * Version 1.0
 *
 * Date: 22-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 30-07-2022         HuyNT2711           Create
 */
interface TopUserProps {
  rankingList: UserInfo[]
}
const TopUser: React.FC<TopUserProps> = (props) => {
  const classes = useStyles()
  const { rankingList } = props
  console.log('------- rankingList', rankingList)
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const rows = rankingList
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
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
            return (
              <TableRow
                hover
                role='checkbox'
                tabIndex={-1}
                key={row.id}
                className={classes.tableRowBody2}
              >
                <TableCell className={classes.tableRankingCell}>
                  {renderRanking(index + 1)}
                </TableCell>
                <TableCell className={classes.tableItemCell}>
                  <Grid container>
                    <Grid item xs={3} lg={3} className={classes.avatarWrapper}>
                      <Avatar className={classes.avatar} alt={row.avatar} src={row.avatar} />
                    </Grid>
                    <Grid item xs={9} lg={9} sx={{ paddingLeft: '0.3em', paddingTop: '0.4em' }}>
                      <Typography className={classes.textUsername}>{row.username}</Typography>
                    </Grid>
                  </Grid>
                </TableCell>

                <TableCell className={classes.tableItemCellOfTotal}>
                  <Typography className={classes.textPointOfTotal}>{row.total_score}</Typography>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TopUser
