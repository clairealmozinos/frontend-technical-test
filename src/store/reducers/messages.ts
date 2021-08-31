import * as Actions from '../actions'

const messages = (
  state = [],
  action
) => {
  switch (action.type) {
    case Actions.messages.ON_MESSAGES_FETCH_SUCCESS: {
      return action.payload.messages
    }
    default:
      return state
  }
}

export { messages }
