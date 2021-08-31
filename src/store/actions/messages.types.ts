import { Dispatch } from 'redux'
import { Message } from 'types/message'
import { Action } from './index.types'

export interface MessagesSuccessActionPayload {
  readonly messages: Message[]
}

export interface MessagesSuccessAction
  extends Action<'ON_MESSAGES_FETCH_SUCCESS', MessagesSuccessActionPayload> {}

export type OnMessagesSuccess = (messages: Message[]) => MessagesSuccessAction

export type OnMessagesFetch = (id: string) => (dispatch: Dispatch) => Promise<void>
