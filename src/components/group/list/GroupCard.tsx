import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import useStyles from './style'
import { Link } from 'react-router-dom'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined'
import { Group } from '../../../modules/group/list/type'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  const { group } = props
  return (
    <Paper elevation={2} square className={classes.wrapper}>
      <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/group/' + group.id}>
        <Stack direction='row' alignItems='center'>
          <img
            className={classes.groupCardBanner}
            src='https://cdn.dribbble.com/users/2328253/screenshots/15014957/media/313122ac2b8ae8ad7757c4fcf7c7f81c.jpg?compress=1&resize=400x300&vertical=top'
          />
          <Stack direction='column' paddingLeft={1}>
            <Typography className={classes.groupCardTittle}>{group.title}</Typography>
            <Stack direction='row' alignItems='center'>
              <GroupOutlinedIcon fontSize='small' />
              <Typography className={classes.text}>{group.totalMember}</Typography>
            </Stack>
            <Stack direction='row' alignItems='center'>
              <SecurityOutlinedIcon fontSize='small' />
              <Typography className={classes.text}>{t('Private')}</Typography>
            </Stack>
            <Stack direction='row' alignItems='center'>
              <LocalActivityOutlinedIcon fontSize='small' />
              <Typography className={classes.text}>{group.createdBy}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Link>
    </Paper>
  )
}
