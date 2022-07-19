import * as React from 'react'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Grid, Stack, Typography, Paper } from '@mui/material'
import useStyles from './style'
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp'
import ChallengeCard from '../ChallengeCard/ChallengeCard'
import PaginationCard from '../../common/pagination/PaginationCard'
import { Box } from '@mui/system'

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

const groupList = [
  'Group ANTI Thuan ',
  'Group NEM DA Duy  ',
  'Group FPT TECHDAY 2021_CODE WARS',
  'Group đối tượng đam mê lập trình',
  'Group @mui/material/ListItemText ',
  'Group @mui/material/ListItemText ',
  'Group @mui/material/ListItemText ',
  'Group @mui/material/ListItemText ',
  'Group @mui/material/ListItemText ',
  'Group @mui/material/ListItemText ',
  'Group @mui/material/ListItemText ',
  'Group @mui/material/ListItemText ',
  'Group @mui/material/ListItemText ',
  'Group @mui/material/ListItemText ',
]

export default function ChallengeGroup() {
  const classes = useStyles()
  return (
    <Stack>
      <Grid container xs={12}>
        <Grid item xs={8}>
          <Stack className={classes.scrollBar} spacing={2}>
            <ChallengeCard url='/challenge/detail' />
            <ChallengeCard url='/challenge/detail' />
            <ChallengeCard url='/challenge/detail' />
            <ChallengeCard url='/challenge/detail' />
            <ChallengeCard url='/challenge/detail' />
            <ChallengeCard url='/challenge/detail' />
            <ChallengeCard url='/challenge/detail' />
            <ChallengeCard url='/challenge/detail' />
            <ChallengeCard url='/challenge/detail' />
          </Stack>
          <PaginationCard />
        </Grid>
        <Grid item xs={4} sx={{ paddingLeft: '1%' }}>
          <Paper elevation={5} sx={{ height: '80vh' }}>
            <Box>
              <Typography className={classes.myGroup}>My Group</Typography>
            </Box>
            <List className={classes.listGroupScroll}>
              {groupList.map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton key={index}>
                    <ListItemIcon>
                      <GroupsSharpIcon color={'primary'} />
                    </ListItemIcon>
                    <ListItemText className={classes.groupTittle} primary={text} />
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
