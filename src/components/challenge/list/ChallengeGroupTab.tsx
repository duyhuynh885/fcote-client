import GroupsSharpIcon from '@mui/icons-material/GroupsSharp'
import { CircularProgress, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
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
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
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
      <Grid item xs={3}>
        <Paper
          elevation={8}
          square
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
          }}
        >
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
                  <ListItem
                    disablePadding
                    classes={{ root: classes.root, selected: classes.selected }}
                  >
                    <ListItemButton
                      key={group.id}
                      selected={selectedIndex === index}
                      onClick={(event) => handleClickGroup(group.id, event, index)}
                    >
                      <ListItemIcon>
                        <GroupsSharpIcon color={'success'} />
                      </ListItemIcon>
                      <ListItemText className={classes.groupTittle} primary={group.title} />
                    </ListItemButton>
                  </ListItem>
                  <Divider variant='inset' component='li' />
                </React.Fragment>
              ))
            )}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Stack className={classes.scrollBar} spacing={2} marginBottom={5}>
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
