/**
 * Type for loader
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
 * 22-06-2022         DuyHV           Create
 */

export enum LoaderActionType {
  SHOW_LOADER_ACTION = 'SHOW_LOADER_ACTION',
  HIDE_LOADER_ACTION = 'HIDE_LOADER_ACTION',
}

export type HideLoaderAction = Action<LoaderActionType.HIDE_LOADER_ACTION>
export type ShowLoaderAction = Action<LoaderActionType.SHOW_LOADER_ACTION>
export type LoaderAction = ShowLoaderAction | HideLoaderAction
