import { DataType } from '../modules/assignment/data-type/type'
import _ from 'lodash'
import { DifficultEnum, StatusEnum } from '../modules/assignment/list/type'
import { StatusChallengeEnum } from '../modules/challenge/list/type'

export const mapNameDataTypeByValue = (dataType: DataType[], value: number) => {
  const result = _.find(dataType, { value: value })
  return result && result.name
}

export const mapDifficultyAssignment = (difficultEnum: DifficultEnum) => {
  type resultType = 'easy' | 'medium' | 'hard'
  let result: resultType
  switch (difficultEnum) {
    case DifficultEnum.EASY:
      result = 'easy'
      break
    case DifficultEnum.MEDIUM:
      result = 'medium'
      break
    case DifficultEnum.HARD:
      result = 'hard'
      break
    default:
      result = 'easy'
      break
  }
  return result
}

export const mapStatusAssignment = (statusEnum: StatusEnum) => {
  type resultType = 'notSolved' | 'inProgress' | 'solved'
  let result: resultType
  switch (statusEnum) {
    case StatusEnum.NOT_SOLVED:
      result = 'notSolved'
      break
    case StatusEnum.IN_PROGRESS:
      result = 'inProgress'
      break
    case StatusEnum.SOLVED:
      result = 'solved'
      break
    default:
      result = 'notSolved'
      break
  }
  return result
}

export const mapStatusChallenge = (statusChallengeEnum: StatusChallengeEnum) => {
  type resultType = 'notOpenYet' | 'open' | 'close'
  let status: resultType
  let displayText: string

  switch (statusChallengeEnum) {
    case StatusChallengeEnum.NOT_OPEN_YET:
      status = 'notOpenYet'
      displayText = 'NOT_OPEN_YET'
      break
    case StatusChallengeEnum.OPEN:
      status = 'open'
      displayText = 'OPEN'
      break
    case StatusChallengeEnum.CLOSE:
      status = 'close'
      displayText = 'CLOSE'
      break
    default:
      status = 'notOpenYet'
      displayText = ''
      break
  }
  return { status, displayText }
}
