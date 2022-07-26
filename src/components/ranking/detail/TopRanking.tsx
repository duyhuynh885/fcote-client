import React from 'react'
import { Stack } from '@mui/material'
import { UserInfo } from '../../../modules/ranking/type'
import TopMember from './Top/TopMenber'
/**
 * First Rank Card component
 *
 * Version 1.0
 *
 * Date: 24-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 24-06-2022         TuanLA           Create
 */

interface UserInforProps {
  data: UserInfo[]
}

const immutablySwapItems = (items: UserInfo[], firstIndex: number, secondIndex: number) =>
  items.map((element, index) =>
    index === firstIndex ? items[secondIndex] : index === secondIndex ? items[firstIndex] : element,
  )

const TopRanking: React.FC<UserInforProps> = (props) => {
  const topRanking = immutablySwapItems(props.data, 0, 1)
  return (
    <Stack
      direction='row'
      spacing={2}
      alignItems='center'
      justifyContent='space-around'
      sx={{ maxHeight: '30vh' }}
    >
      {topRanking.map((top) => (
        <TopMember
          key={top.order}
          order={top.order}
          rank={top.order}
          avatar={top.avatar}
          username={top.username}
          fullname={top.fullname}
          score={top.total_score}
          organization={top.organization}
        />
      ))}
    </Stack>
  )
}

export default TopRanking
