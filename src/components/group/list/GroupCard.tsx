import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import useStyles from './style'
import { Link } from 'react-router-dom'
import GroupIcon from '@mui/icons-material/Group'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { Group } from '../../../modules/group/list/type'
/**
 * Group Card
 *
 * Version 1.0
 *
 * Date: 4-07-2022
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 4-07-2022      HuyNT2711           Create
 * 21-07-2022     TuanLA              Add logic API
 */

interface IProps {
  group: Group
}

export default function GroupCard(props: IProps) {
  const classes = useStyles()
  const { group } = props
  return (
    <Paper square className={classes.wrapper}>
      <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/group/' + group.id}>
        <Stack direction='row'>
          <img
            className={classes.groupCardBanner}
            src='https://cdn.dribbble.com/users/2328253/screenshots/15014957/media/313122ac2b8ae8ad7757c4fcf7c7f81c.jpg?compress=1&resize=400x300&vertical=top'
          />
          <Stack direction='column' className={classes.challengeCardContainer}>
            <Typography className={classes.groupCardTittle}>{group.title}</Typography>
            <Box className={classes.box}>
              <GroupIcon />
              <Typography className={classes.text}>{group.totalMember}</Typography>
            </Box>
            <Box className={classes.box}>
              <GroupAddIcon />
              <Typography className={classes.text}>Private</Typography>
            </Box>
            <Box className={classes.box}>
              <StarBorderIcon />
              <Typography className={classes.text}>{group.createdBy}</Typography>
            </Box>
          </Stack>
        </Stack>
      </Link>
    </Paper>
  )
}
