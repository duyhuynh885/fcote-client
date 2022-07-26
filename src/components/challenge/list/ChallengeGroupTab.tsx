import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Grid, Stack, Typography, Paper } from '@mui/material'
import useStyles from './style'
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp'
import ChallengeCard from '../general/ChallengeCard/ChallengeCard'
import PaginationCard from '../../common/pagination/PaginationCard'
import { Box } from '@mui/system'
import { Group } from '../../../modules/group/list/type'
import { IChallenge } from '../../../modules/challenge/list/type'

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
  const challenges = props.challenges
  const groups = props.groups

  const page = props.page
  const handleChangePage = props.handleChangePage
  const count = props.count

  const handleClickGroup = (groupID: number | undefined) => {
    props.onclick(groupID)
  }
  return (
    <Stack>
      <Grid container xs={12}>
        <Grid item xs={8}>
          <Stack className={classes.scrollBar} spacing={2}>
            {challenges.map((challenge) => (
              <ChallengeCard
                key={challenge.challengeId}
                url={`/challenge/${challenge.challengeId}`}
                challenge={challenge}
              />
            ))}
          </Stack>
          <PaginationCard page={page} handleChangePage={handleChangePage} count={count} />
        </Grid>
        <Grid item xs={4} sx={{ paddingLeft: '1%' }}>
          <Paper elevation={5} sx={{ height: '80vh' }}>
            <Box>
              <Typography className={classes.myGroup}>My Group</Typography>
            </Box>
            <List className={classes.listGroupScroll}>
              {groups.map((group) => (
                <ListItem key={group.id} disablePadding>
                  <ListItemButton key={group.id} onClick={() => handleClickGroup(group.id)}>
                    <ListItemIcon>
                      <GroupsSharpIcon color={'primary'} />
                    </ListItemIcon>
                    <ListItemText className={classes.groupTittle} primary={group.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  )
}
export default ChallengeGroup
