import { SubmitAssignmentDetailActionType } from './../submit/type'
import { RunAssignmentDetailActionType } from './../run/type'
import {
  Result,
  TestCaseResult,
  ViewAssignmentDetailAction,
  ViewAssignmentDetailActionType,
  ViewAssignmentDetailState,
} from './type'
import _ from 'lodash'

/**
 * Reducer for get assignments detail
 *
 * Version 1.0
 *
 * Date: 26-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 26-07-2022         DuyHV           Create
 */

const initialState: ViewAssignmentDetailState = {
  requesting: false,
  successful: false,
  errors: {} as ErrorMessage,
  detail: {
    id: 0,
    title: '',
    description: '',
    sample: '',
    difficulty: 0,
    totalTestCase: 0,
    score: 0,
    characterLimit: 0,
    totalParticipant: 0,
    createdBy: '',
    isOwner: false,
    limitSubmission: 0,
    availableSubmission: 0,
  },
  languages: [],
  parameters: {
    input: [],
    output: {
      id: 0,
      assignment: 0,
      order: 0,
      type: 0,
      name: '',
      dataType: 0,
      description: '',
    },
  },
  testCases: [],
  summarize: {
    score: 0,
    passAll: false,
  },
}

const updateTestCaseRunAndSubmitSuccessful = (
  testCasesResultState: TestCaseResult[],
  results: Result[],
) => {
  return testCasesResultState.map((o1) => {
    const testCaseToUpdate = _.find(results, { testCaseId: o1.id })
    if (testCaseToUpdate) {
      return {
        ...o1,
        isPassed: testCaseToUpdate.isPassed,
        runSuccess: testCaseToUpdate.runSuccess,
        actualOutput: testCaseToUpdate.actualOutput,
        expectedOutput: testCaseToUpdate.expectedOutput,
      }
    } else return o1
  })
}

/**
 * Reducer Authentication
 * @param state ViewAssignmentDetailState
 * @param action ViewAssignmentDetailAction
 * @returns
 */
const reducer = (state = initialState, action: ViewAssignmentDetailAction) => {
  switch (action.type) {
    case ViewAssignmentDetailActionType.VIEW_ASSIGNMENT_DETAIL_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case ViewAssignmentDetailActionType.VIEW_ASSIGNMENT_DETAIL_SUCCESS: {
      return {
        ...state,
        requesting: false,
        successful: true,
        detail: action.detail,
        languages: action.languages,
        parameters: action.parameters,
        testCases: action.testCases,
      }
    }

    case ViewAssignmentDetailActionType.VIEW_ASSIGNMENT_DETAIL_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case RunAssignmentDetailActionType.RUN_ASSIGNMENT_DETAIL_SUCCESS: {
      const testCasesClone: TestCaseResult[] = state.testCases.slice()
      const testCasesUpdated = updateTestCaseRunAndSubmitSuccessful(testCasesClone, action.result)
      return { ...state, testCases: testCasesUpdated }
    }

    case SubmitAssignmentDetailActionType.SUBMIT_ASSIGNMENT_DETAIL_SUCCESS: {
      const testCasesClone: TestCaseResult[] = state.testCases.slice()
      const testCasesUpdated = updateTestCaseRunAndSubmitSuccessful(testCasesClone, action.result)
      return { ...state, summarize: action.summarize, testCases: testCasesUpdated }
    }

    case ViewAssignmentDetailActionType.VIEW_ASSIGNMENT_DETAIL_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
