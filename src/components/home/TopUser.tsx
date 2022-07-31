import {
  Avatar,
  Box,
  Paper,
  Stack,
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
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const rows = rankingList

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
      elevation={4}
      square
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      <Stack direction='column' spacing={2}>
        <Box>
          <Typography className={classes.title}>Leader board</Typography>
        </Box>
        <TableContainer className={classes.tableContainer}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeaderCellRanking}>
                  <Typography className={classes.textHeaderCell}>No</Typography>
                </TableCell>
                <TableCell className={classes.tableHeaderCellUsername}>
                  <Typography textAlign='start' className={classes.textHeaderCellUsername}>
                    User name
                  </Typography>
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  <Typography className={classes.textHeaderCell}>Point</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
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
                        <Stack direction='row' alignItems='center' spacing={1}>
                          <Avatar className={classes.avatar} alt={row.avatar} src={row.avatar} />
                          <Typography className={classes.textUsername}>{row.username}</Typography>
                        </Stack>
                      </TableCell>
                      <TableCell className={classes.tableItemCellOfTotal}>
                        <Typography className={classes.textPointOfTotal}>
                          {row.total_score}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Paper>
  )
}

export default TopUser
