import { User } from 'types/user'
import * as Actions from '../actions'
import { RegisteredAction } from '../actions/index.types'

type State = User[]

const users = (
  state: State = [],
  action: RegisteredAction
) => {
  switch (action.type) {
    case Actions.users.ON_USERS_FETCH_SUCCESS: {
      return action.payload.users
    }
    default:
      return state
  }
}

export type { State as UsersState }
export { users }
