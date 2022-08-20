import {
  TestCaseInputCreateAssignment,
  TestCaseOutputCreateAssignment,
} from '../modules/assignment/create/type'
import { getCookie } from './auth'

export const generateFunctionTemplate = () => {
  return false
}

export const swapMessage = (messageEn: string, messageVi: string) => {
  return getCookie('i18next') === 'en' ? messageEn : messageVi
}

export const validationInputOutputTestCase = (
  inputTestCase: TestCaseInputCreateAssignment[],
  outputTestCase: TestCaseOutputCreateAssignment,
) => {
  let result = {
    message: '',
    isValid: true,
  }
  // Check input value is valid type
  inputTestCase.forEach((input) => {
    const { message, isValid } = checkIsValidType(input.value, input.type)
    if (!isValid) {
      result = {
        ...result,
        message: 'Invalid Input: ' + message,
        isValid: isValid,
      }
    }
  })

  // Check ouput value is valid type
  const { message, isValid } = checkIsValidType(outputTestCase.value, outputTestCase.type)
  if (!isValid) {
    result = {
      ...result,
      message: 'Invalid Output: ' + message,
      isValid: isValid,
    }
  }

  return { result }
}

const checkIsValidType = (value: string, type: number) => {
  let isValid = true
  let message = ''

  switch (type - 1) {
    case DataTypeEnum.Integer: {
      if (!validation.isIntegerNumber(value)) {
        isValid = false
        message = swapMessage('Excepted Integer Number', 'InValidInput')
      }
      break
    }
    case DataTypeEnum.Long: {
      if (!validation.isLongNumber(value)) {
        isValid = false
        message = swapMessage('Excepted Long Number', 'InValidInput')
      }
      break
    }
    case DataTypeEnum.Float: {
      if (!validation.isFloatNumber(value)) {
        isValid = false
        message = swapMessage('Excepted Float Number', 'InValidInput')
      }
      break
    }
    case DataTypeEnum.Char: {
      if (!validation.isChar(value)) {
        isValid = false
        message = swapMessage('Excepted Char', 'InValidInput')
      }
      break
    }
    case DataTypeEnum.String: {
      if (!validation.isString(value)) {
        isValid = false
        message = swapMessage('Excepted String', 'InValidInput')
      }
      break
    }
    case DataTypeEnum.Boolean: {
      if (!validation.isBoolean(value)) {
        isValid = false
        message = swapMessage('Excepted Boolean', 'InValidInput')
      }
      break
    }
    case DataTypeEnum.ArrayOfIntegers: {
      if (!validation.isArrayInteger(value)) {
        isValid = false
        message = swapMessage('Excepted Array Of Integers', 'InValidInput')
      }
      break
    }
    case DataTypeEnum.ArrayOfLongs: {
      if (!validation.isArrayLong(value)) {
        isValid = false
        message = swapMessage('Excepted Array Of Longs', 'InValidInput')
      }
      break
    }
    case DataTypeEnum.ArrayOfFloats: {
      if (!validation.isArrayFloat(value)) {
        isValid = false
        message = swapMessage('Excepted Array Of Floats', 'InValidInput')
      }
      break
    }
  }
  return { isValid, message }
}

const validation = {
  isIntegerNumber(data: string) {
    const pattern = /^([+-]?[1-9]\d*|0)$/
    return pattern.test(data)
  },
  isLongNumber(data: string) {
    const pattern = /^([+-]?[1-9]\d*|0)$/
    return pattern.test(data)
  },
  isFloatNumber(data: string) {
    const pattern = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/
    return pattern.test(data)
  },
  isChar(data: string) {
    const pattern = /^[A-Za-z ]+$/
    return pattern.test(data)
  },
  isString(data: string) {
    const pattern = /[A-Za-z]{3}([0-9]{1,4})?|[A-Za-z]{1,3}/
    return pattern.test(data)
  },
  isBoolean(data: string) {
    const pattern = /^([Tt][Rr][Uu][Ee]|[Ff][Aa][Ll][Ss][Ee])$/
    return pattern.test(data)
  },
  isArrayInteger(data: string) {
    const pattern = /\[[0-9,]+[0-9]*\]/
    return pattern.test(data)
  },
  isArrayLong(data: string) {
    const pattern = /\[[0-9,]+[0-9]*\]/
    return pattern.test(data)
  },
  isArrayFloat(data: string) {
    const pattern = /\[[0-9,]+[0-9]*\]/
    return pattern.test(data)
  },
}

enum DataTypeEnum {
  Integer,
  Long,
  Float,
  Double,
  Char,
  String,
  Boolean,
  ArrayOfIntegers,
  ArrayOfLongs,
  ArrayOfFloats,
  ArrayOfDoubles,
  ArrayOfChars,
  ArrayOfStrings,
  ArrayOfBooleans,
  MatrixOfIntegers,
  MatrixOfLongs,
  MatrixOfFloats,
  MatrixOfDoubles,
  MatrixOfChars,
  MatrixOfStrings,
  MatrixOfBooleans,
}
