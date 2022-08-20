import {
  PreviewEditAssignmentAction,
  PreviewEditAssignmentActionType,
  PreviewEditAssignmentResponse,
  PreviewEditAssignmentState,
} from './type'

/**
 * Reducer for previewEdit assignment
 *
 * Version 1.0
 *
 * Date: 22-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 22-06-2022         DuyHV           PreviewEdit
 */

const initialState: any = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
  setting: {},
  language: [],
  inputOutput: {},
  testCase: [],
}

/**
 * Reducer Authentication
 * @param state PreviewEditAssignmentState
 * @param action PreviewEditAssignmentAction
 * @returns
 */
const reducer = (state = initialState, action: PreviewEditAssignmentAction) => {
  switch (action.type) {
    case PreviewEditAssignmentActionType.PREVIEW_EDIT_ASSIGNMENT_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case PreviewEditAssignmentActionType.PREVIEW_EDIT_ASSIGNMENT_SUCCESS:
      return {
        ...state,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
        setting: action.setting,
        language: action.language,
        inputOutput: action.inputOutput,
        testCase: action.testCase,
      }

    case PreviewEditAssignmentActionType.PREVIEW_EDIT_ASSIGNMENT_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case PreviewEditAssignmentActionType.PREVIEW_EDIT_ASSIGNMENT_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
