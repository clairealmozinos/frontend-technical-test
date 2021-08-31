import { Message } from 'types/message'
import * as Actions from '../actions'
import { RegisteredAction } from '../actions/index.types'

type State = Message[]

const messages = (
  state: State = [],
  action: RegisteredAction
) => {
  switch (action.type) {
    case Actions.messages.ON_MESSAGES_FETCH_SUCCESS: {
      return action.payload.messages
    }
    case Actions.messages.ON_NEW_MESSAGE: {
      return [
        ...state,
        action.payload.message
      ]
    }
    default:
      return state
  }
}

export type { State as MessagesState }
export { messages }
