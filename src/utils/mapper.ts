import { DataType } from '../modules/assignment/data-type/type'
import _ from 'lodash'
import { DifficultEnum, StatusEnum } from '../modules/assignment/list/type'

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
