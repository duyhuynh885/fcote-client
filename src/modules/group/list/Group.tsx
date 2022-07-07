import { Grid, Paper, Stack } from '@mui/material'
import React from 'react'
import TaskbarFilter from '../../../components/common/toolbar/TaskbarFilter'
import GroupCard from '../../../components/group/GroupCard'
import TaskbarGroup from '../../../components/group/TaskbarGroup/TaskbarGroup'
import useStyle from './style'

/**
 *  Group page
 * <p>
 * Version 1.0
 * <p>
 * Date: 04-07-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 04-07-2022      HuyNT2711           Create
 */

export default function Group() {
  const classes = useStyle()
  return (
    <Stack margin={5}>
      <Stack marginBottom={5}>
        <TaskbarGroup />
      </Stack>

      <Paper elevation={8} className={classes.scrollBar}>
        <Grid container rowSpacing={4} columnSpacing={17} padding={3}>
          <Grid xs={6} item>
            <GroupCard url='/group/detail' />
          </Grid>
          <Grid xs={6} item>
            <GroupCard url='/group/detail' />
          </Grid>
          <Grid xs={6} item>
            <GroupCard url='/group/detail' />
          </Grid>
          <Grid xs={6} item>
            <GroupCard url='/group/detail' />
          </Grid>
          <Grid xs={6} item>
            <GroupCard url='/group/detail' />
          </Grid>
          <Grid xs={6} item>
            <GroupCard url='/group/detail' />
          </Grid>
          <Grid xs={6} item>
            <GroupCard url='/group/detail' />
          </Grid>
          <Grid xs={6} item>
            <GroupCard url='/group/detail' />
          </Grid>
          <Grid xs={6} item>
            <GroupCard url='/group/detail' />
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  )
}
