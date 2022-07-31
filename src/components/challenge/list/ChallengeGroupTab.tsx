import { CircularProgress, Grid, Paper, Stack, Typography } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import { Box } from '@mui/system'
import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { clearStateViewListChallenge } from '../../../modules/challenge/list/action'
import { IChallenge } from '../../../modules/challenge/list/type'
import { Group } from '../../../modules/group/list/type'
import PaginationCard from '../../common/pagination/PaginationCard'
import ChallengeCard from '../general/ChallengeCard/ChallengeCard'
import useStyles from './style'

/**
 * ChallengeGroup
 *
 * Version 1.0
 *
 * Date: 29-06-2022
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 29-06-2022      HuyNT2711           Create
 */

interface ChallengeGroupProps {
  challenges: IChallenge[]
  groups: Group[]
  onclick: (groupID: number | undefined) => void
  page: number
  handleChangePage: (_event: React.ChangeEvent<unknown>, value: number) => void
  count: number
}
const ChallengeGroup: React.FC<ChallengeGroupProps> = (props) => {
  const classes = useStyles()
  const { challenges, groups, onclick, page, handleChangePage, count } = props
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const dispatch = useDispatch<AppDispatch>()
  const listChallengeRequesting = useSelector((state: RootState) => state.listChallenges.requesting)
  const listGroupRequesting = useSelector((state: RootState) => state.listGroup.requesting)
  // handle show challenges follow Group
  const handleClickGroup = (
    groupID: number | undefined,
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    onclick(groupID)
    setSelectedIndex(index)
  }

  /**
   * clear state
   */
  useEffect(() => {
    return () => {
      dispatch(clearStateViewListChallenge())
    }
  }, [])

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
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
              <Typography className={classes.myGroup}>My Group</Typography>
            </Box>
            <List className={classes.listGroupScroll}>
              {listGroupRequesting ? (
                <Stack marginTop={5} alignItems='center'>
                  <CircularProgress color='success' />
                </Stack>
              ) : (
                groups.map((group, index: number) => (
                  <React.Fragment key={group.id}>
                    <ListItem disablePadding button>
                      <ListItemButton
                        key={group.id}
                        selected={selectedIndex === index}
                        classes={{ root: classes.root, selected: classes.selected }}
                        onClick={(event) => handleClickGroup(group.id, event, index)}
                      >
                        <Paper square className={classes.cardGroup} elevation={0}>
                          <Stack direction='row' justifyContent='space-between' alignItems='center'>
                            <Typography className={classes.cardGroupTitle}>
                              {group.title}
                            </Typography>
                            <Stack direction='row' alignItems='center' spacing={0.5}>
                              <Typography className={classes.cardGroupTotalMember}>
                                {group.totalMember}
                              </Typography>
                              <Typography className={classes.cardGroupTitleMember}>
                                Member
                              </Typography>
                            </Stack>
                          </Stack>
                        </Paper>
                      </ListItemButton>
                    </ListItem>
                  </React.Fragment>
                ))
              )}
            </List>{' '}
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Stack sx={{ minHeight: '70vh' }} spacing={2} marginBottom={5}>
          {listChallengeRequesting ? (
            <Stack marginTop={5} alignItems='center'>
              <CircularProgress color='success' />
            </Stack>
          ) : (
            challenges.map((challenge) => (
              <ChallengeCard
                key={challenge.challengeId}
                url={`/challenge/${challenge.challengeId}`}
                challenge={challenge}
              />
            ))
          )}
        </Stack>
        <PaginationCard page={page} handleChangePage={handleChangePage} count={count} />
      </Grid>
    </Grid>
  )
}
export default ChallengeGroup
