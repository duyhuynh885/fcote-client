import React from 'react'
import { CircularProgress, Stack } from '@mui/material'
import { UserInfo } from '../../../modules/ranking/type'
import TopMember from './Top/TopMember'
import { useSelector } from 'react-redux'
import { RootState } from '../../../apps/ReduxContainer'
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

interface UserInfoProps {
  data: UserInfo[]
}

function immutablySwapItems(items: UserInfo[], firstIndex: number, secondIndex: number) {
  return items.map((element, index) => {
    if (index === firstIndex) return items[secondIndex]
    else if (index === secondIndex) return items[firstIndex]
    else return element
  })
}

const TopRanking: React.FC<UserInfoProps> = (props) => {
  const rankingRequestingState = useSelector((state: RootState) => state.ranking.requesting)
  const topRanking = immutablySwapItems(props.data, 0, 1)

  return (
    <Stack
      direction='row'
      spacing={2}
      alignItems='center'
      justifyContent='space-around'
      sx={{ maxHeight: '30vh' }}
    >
      {rankingRequestingState ? (
        <Stack marginTop={5} alignItems='center'>
          <CircularProgress color='success' />
        </Stack>
      ) : (
        topRanking.map((top) => (
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
        ))
      )}
    </Stack>
  )
}

export default TopRanking
