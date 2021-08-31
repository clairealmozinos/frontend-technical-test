import { ConversationsState } from './conversations'
import { MessagesState } from './messages'
import { UsersState } from './users'

export interface State {
  conversations: ConversationsState
  messages: MessagesState
  users: UsersState
}
