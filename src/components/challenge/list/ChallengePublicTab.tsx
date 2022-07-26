import { Stack } from '@mui/material'
import React from 'react'
import useStyles from './style'
import ChallengeCardForOwner from '../general/ChallengeCard/ChallengeCardForOwner'
import { IChallenge } from '../../../modules/challenge/list/type'
import PaginationCard from '../../common/pagination/PaginationCard'
import ChallengeCard from '../general/ChallengeCard/ChallengeCard'

/**
 * ChallengePublic
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
interface ChallengePublicProps {
  listChallenges: IChallenge[]
  page?: number
  handleChangePage?: (_event: React.ChangeEvent<unknown>, value: number) => void
  count?: number
}
const ChallengePublic: React.FC<ChallengePublicProps> = (props) => {
  const listChallenges = props.listChallenges
  const page = props.page
  const handleChangePage = props.handleChangePage
  const count = props.count
  const classes = useStyles()
  return (
    <Stack>
      <Stack className={classes.scrollBar} spacing={2}>
        {listChallenges.map((challenge) => (
          <ChallengeCard
            key={challenge.challengeId}
            challenge={challenge}
            url={`/challenge/${challenge.challengeId}`}
          />
        ))}
      </Stack>
      <PaginationCard page={page} handleChangePage={handleChangePage} count={count} />
    </Stack>
  )
}

export default ChallengePublic
