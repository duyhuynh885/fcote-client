import * as React from 'react'
import {
  Avatar,
  Grid,
  IconButton,
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

import { ReactComponent as Gold } from '../../../../assets/Gold.svg'
import { ReactComponent as Platinum } from '../../../../assets/Platinum.svg'
import { ReactComponent as Bronze } from '../../../../assets/Bronze.svg'
import LogoutIcon from '@mui/icons-material/Logout'
import { MemberInGroup } from '../../../../modules/group/detail/type'
import { isNoSubstitutionTemplateLiteral } from 'typescript'

interface DetailGroupProps {
  member: MemberInGroup[]
  isOwner: boolean
}

export default function Member(props: DetailGroupProps) {
  const classes = useStyles()
  const { member, isOwner } = props
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const rows = member
  const handleChangePage = (_event: unknown, newPage: number) => {
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
  function renderKickMemberButton(isOwner: boolean, idMember: number) {
    if (isOwner) {
      return (
        <IconButton
          color='primary'
          aria-label='logout'
          onClick={() => {
            console.log('ID member: ', idMember)
          }}
        >
          <LogoutIcon />
        </IconButton>
      )
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
              const index = rows.indexOf(row)
              return (
                <TableRow
                  hover
                  role='checkbox'
                  tabIndex={-1}
                  key={index}
                  className={index % 2 === 0 ? classes.tableRowBody1 : classes.tableRowBody2}
                >
                  <TableCell className={classes.tableItemCell}>
                    {renderRanking(index + 1)}
                  </TableCell>
                  <TableCell className={classes.tableItemCell}>
                    <Grid container>
                      <Grid item xs={3} lg={3} className={classes.avatarWrapper}>
                        <Avatar className={classes.avatar} alt={row.avatar} src={row.avatar} />
                      </Grid>
                      <Grid item xs={9} lg={9} sx={{ paddingLeft: '0.3em' }}>
                        <Typography className={classes.textUsername}>{row.username}</Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell className={classes.tableItemCell}>
                    <Box display={'flex'} sx={{ flexDirection: 'column' }}>
                      <Typography className={classes.textPoint}>{row.totalCompleted}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell className={classes.tableItemCell}>
                    <Box display={'flex'} sx={{ flexDirection: 'column' }}>
                      <Typography className={classes.textPoint}>{row.totalMissing}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell className={classes.tableItemCell}>
                    <Box display={'flex'} sx={{ flexDirection: 'column' }}>
                      <Typography className={classes.textPoint}>{row.totalScore}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell className={classes.tableItemCell}>
                    <Box display={'flex'} sx={{ flexDirection: 'column' }}>
                      {renderKickMemberButton(isOwner, row.id)}
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
