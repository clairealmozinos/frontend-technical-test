import { ConversationsSuccessAction } from './conversations.types'
import { MessagesSuccessAction, NewMessageAction } from './messages.types'
import { SelectUserAction, UsersSuccessAction } from './users.types'

export type RegisteredAction =
  | ConversationsSuccessAction
  | MessagesSuccessAction
  | NewMessageAction
  | SelectUserAction
  | UsersSuccessAction

export interface Action<T, P> {
  type: T
  payload: P
}
