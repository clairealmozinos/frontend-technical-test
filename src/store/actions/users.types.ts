import { Dispatch } from 'redux'
import { User } from 'src/types/user'
import { Action } from './index.types'

export interface UsersSuccessActionPayload {
  readonly users: User[]
}

export interface UsersSuccessAction
  extends Action<'ON_USERS_FETCH_SUCCESS', UsersSuccessActionPayload> {}

export interface SelectUserActionPayload {
  readonly userId: number
}

export interface SelectUserAction
  extends Action<'ON_SELECT_USER', SelectUserActionPayload> {}


export type OnSelectUser = (selectedUser: number) => SelectUserAction
export type OnUsersSuccess = (users: User[]) => UsersSuccessAction
export type OnUsersFetch = () => (dispatch: Dispatch) => Promise<void>
