import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {
  CircularProgress,
  Grid,
  Pagination,
  PaginationItem,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import { Box } from '@mui/system'
import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import {
  clearStateViewListChallenge,
  fetchListChallengeRequest,
  updateFilterListChallengesRequest,
} from '../../../modules/challenge/list/action'
import { ViewListChallengeRequestPayload } from '../../../modules/challenge/list/type'
import { fetchListGroupRequest } from '../../../modules/group/list/action'
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
  typeData: number
  handleGetGroupID: (valueGroupID: number | undefined) => void
  handleGetPageNumber: (valuePageNumber: number | undefined) => void
}
const ChallengeGroup: React.FC<ChallengeGroupProps> = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch<AppDispatch>()
  const listGroupState = useSelector((state: RootState) => state.listGroup)
  const listChallengeState = useSelector((state: RootState) => state.listChallenges)
  const { requesting: listGroupRequesting, groups: groups } = listGroupState
  const { filterRequest, totalChallenge, requesting, challenges } = listChallengeState
  const { typeData, handleGetGroupID, handleGetPageNumber } = props
  const [groupID, setGroupId] = React.useState<number | undefined>(0)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [page, setPage] = React.useState(1)
  const PER_PAGE = 4
  const count = Math.ceil(totalChallenge / PER_PAGE)

  const groupChallengeRequest: ViewListChallengeRequestPayload = {
    typeData: 2,
    pageSize: 4,
    pageNumber: 1,
  }

  const handleClickGroup = (
    groupID: number | undefined,
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    handleGetGroupID(groupID)
    dispatch(fetchListChallengeRequest(groupChallengeRequest, undefined, undefined, groupID))
    setGroupId(groupID)
    setSelectedIndex(index)
    setPage(1)
  }

  // get all Groups current user joined
  useEffect(() => {
    dispatch(fetchListGroupRequest({}))
  }, [])

  // After getting the group, call api challenge
  useEffect(() => {
    if (groups.length > 0) {
      dispatch(fetchListChallengeRequest(groupChallengeRequest, undefined, undefined, groups[0].id))
      handleGetGroupID(groups[0].id)
      setGroupId(groups[0].id)
    }
  }, [groups])

  /**
   * clear state
   */
  useEffect(() => {
    return () => {
      dispatch(clearStateViewListChallenge())
    }
  }, [])

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    handleGetPageNumber(value)
    dispatch(
      updateFilterListChallengesRequest({
        ...filterRequest,
        pageNumber: value,
        typeData: typeData,
        groupID: groupID,
      }),
    )
  }
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
        <Stack className={classes.scrollBar} spacing={2} marginBottom={5}>
          {requesting ? (
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
        <Stack alignItems='center'>
          <Pagination
            page={page}
            onChange={handleChange}
            count={count}
            renderItem={(item) => (
              <PaginationItem
                components={{
                  previous: ArrowBackIcon,
                  next: ArrowForwardIcon,
                }}
                {...item}
              />
            )}
          />
        </Stack>
      </Grid>
    </Grid>
  )
}
export default ChallengeGroup
