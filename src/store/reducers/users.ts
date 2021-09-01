import { User } from 'src/types/user'
import * as Actions from '../actions'
import { RegisteredAction } from '../actions/index.types'

type State = {
  currentUser: number
  list: User[]
}

const initialState = {
  currentUser: null,
  list: []
}

const users = (
  state: State = initialState,
  action: RegisteredAction
) => {
  switch (action.type) {
    case Actions.users.ON_USERS_FETCH_SUCCESS: {
      return {
        ...state,
        list: action.payload.users
      }
    }
    case Actions.users.ON_SELECT_USER: {
      return {
        ...state,
        currentUser: action.payload.userId
      }
    }
    default:
      return state
  }
}

export type { State as UsersState }
export { users }
