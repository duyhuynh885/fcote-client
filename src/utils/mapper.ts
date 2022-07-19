import { DataType } from '../modules/assignment/data-type/type'
import _ from 'lodash'

export const mapNameDataTypeByValue = (dataType: DataType[], value: number) => {
  const result = _.find(dataType, { value: value })
  return result && result.name
}
