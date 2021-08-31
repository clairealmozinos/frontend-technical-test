import * as Actions from '../actions'

const users = (
  state = [],
  action
) => {
  switch (action.type) {
    case Actions.users.ON_USERS_FETCH_SUCCESS: {
      return action.payload.users
    }
    default:
      return state
  }
}

export { users }
