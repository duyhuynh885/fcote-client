import { HideLoaderAction, LoaderActionType, ShowLoaderAction } from './../type'
/* CHANGE LANGUAGE NOTIFIER */

const showLoaderAction = (): ShowLoaderAction => {
  return {
    type: LoaderActionType.SHOW_LOADER_ACTION,
  }
}

const hideLoaderAction = (): HideLoaderAction => {
  return {
    type: LoaderActionType.HIDE_LOADER_ACTION,
  }
}

export { showLoaderAction, hideLoaderAction }
