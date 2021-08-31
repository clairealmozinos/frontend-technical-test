import { Dispatch } from 'redux'
import { User } from 'types/user'
import { Action } from './index.types'

export interface UsersSuccessActionPayload {
  readonly users: User[]
}

export interface UsersSuccessAction
  extends Action<'ON_USERS_FETCH_SUCCESS', UsersSuccessActionPayload> {}

export type OnUsersSuccess = (users: User[]) => UsersSuccessAction

export type OnUsersFetch = () => (dispatch: Dispatch) => Promise<void>
