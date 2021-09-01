import { Dispatch } from 'redux'
import { Message } from 'src/types/message'
import { Action } from './index.types'

export interface MessagesSuccessActionPayload {
  readonly messages: Message[]
}

export interface NewMessageActionPayload {
  readonly message: Message
}

export interface MessagesSuccessAction
  extends Action<'ON_MESSAGES_FETCH_SUCCESS', MessagesSuccessActionPayload> {}

export interface NewMessageAction
  extends Action<'ON_NEW_MESSAGE', NewMessageActionPayload> {}

export type OnMessagesSuccess = (messages: Message[]) => MessagesSuccessAction
export type OnMessagesFetch = (id: number) => (dispatch: Dispatch) => Promise<void>
export type OnNewMessage = (message: Message) => NewMessageAction 
export type OnNewMessageSubmit = (authorId: number, conversationId: number, message: string) => (dispatch: Dispatch) => Promise<void>
