import { Dispatch } from 'redux'
import { ConversationById } from 'src/types/conversation'
import { Action } from './index.types'

export interface ConversationsSuccessActionPayload {
  readonly conversations: ConversationById
}

export interface ConversationsSuccessAction
  extends Action<'ON_CONVERSATIONS_FETCH_SUCCESS', ConversationsSuccessActionPayload> {}

export type OnConversationsSuccess = (conversations: ConversationById) => ConversationsSuccessAction

export type OnConversationsFetch = (id: number) => (dispatch: Dispatch) => Promise<void>
