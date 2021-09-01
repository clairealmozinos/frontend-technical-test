import { ConversationById } from 'src/types/conversation'
import * as Actions from '../actions'
import { RegisteredAction } from '../actions/index.types'

type State = ConversationById

const conversations = (
  state: State = {},
  action: RegisteredAction
) => {
  switch (action.type) {
    case Actions.conversations.ON_CONVERSATIONS_FETCH_SUCCESS: {
      return {
        ...state,
        ...action.payload.conversations
      }
    }
    default:
      return state
  }
}

export type { State as ConversationsState }
export { conversations }
