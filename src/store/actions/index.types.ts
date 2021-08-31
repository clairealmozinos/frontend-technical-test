import { ConversationsSuccessAction } from './conversations.types'
import { MessagesSuccessAction } from './messages.types'
import { UsersSuccessAction } from './users.types'

export type RegisteredAction =
  | ConversationsSuccessAction
  | MessagesSuccessAction
  | UsersSuccessAction

export interface Action<T, P> {
  type: T
  payload: P
}
