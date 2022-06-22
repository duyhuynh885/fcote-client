import { AppDispatch, RootState } from './../app/ReduxContainer'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

/**
 * Setup react hook
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
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
