import { LoaderAction, LoaderActionType } from './type'
export const INITIAL_STATE = {
  loading: false,
}

export default (state = INITIAL_STATE, action: LoaderAction) => {
  switch (action.type) {
    case LoaderActionType.SHOW_LOADER_ACTION:
      return { ...state, loading: true }
    case LoaderActionType.HIDE_LOADER_ACTION:
      return { ...state, loading: false }
    default:
      return state
  }
}
