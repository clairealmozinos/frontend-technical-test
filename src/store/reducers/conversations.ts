import * as Actions from '../actions'

const conversations = (
  state = {},
  action
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

export { conversations }
