import {
  ViewListChallengeRequestPayload,
  ViewListChallengeRequestAction,
  ViewListChallengeActionType,
  ViewListChallengeClearStateAction,
  UpdateFilterListChallengeAction,
  StatusChallengeEnum,
} from './type'

/**
 * action list challenge
 *
 * Version 1.0
 *
 * Date: 10-07-2022
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 10-07-2022      HuyNT2711           Create
 */

export const fetchListChallengeRequest = (
  { typeData, searchBy, pageSize, pageNumber }: ViewListChallengeRequestPayload,
  username: string | undefined,
  status: StatusChallengeEnum | undefined,
  groupID: number | undefined,
): ViewListChallengeRequestAction => {
  return {
    type: ViewListChallengeActionType.VIEW_LIST_CHALLENGE_REQUESTING,
    typeData,
    searchBy,
    groupID: groupID,
    pageSize,
    pageNumber,
    username: username,
    status: status,
  }
}

export const updateFilterListChallengesRequest = ({
  typeData,
  searchBy,
  groupID,
  pageSize,
  pageNumber,
  username,
  status,
}: ViewListChallengeRequestPayload): UpdateFilterListChallengeAction => {
  return {
    type: ViewListChallengeActionType.UPDATE_FILTER_LIST_CHALLENGE_REQUEST,
    typeData,
    searchBy,
    groupID,
    pageSize,
    pageNumber,
    username,
    status,
  }
}

export const clearStateViewListChallenge = (): ViewListChallengeClearStateAction => {
  return {
    type: ViewListChallengeActionType.VIEW_LIST_CHALLENGE_CLEAR_STATE,
  }
}
