import { OnSelectUser, OnUsersFetch, OnUsersSuccess } from './users.types'

const ON_USERS_FETCH_SUCCESS = 'ON_USERS_FETCH_SUCCESS'
const ON_SELECT_USER = 'ON_SELECT_USER'

const onUsersSuccess: OnUsersSuccess = (users) => ({
  type: ON_USERS_FETCH_SUCCESS,
  payload: {
    users
  }
})

const onUsersFetch: OnUsersFetch = () => (
  async dispatch => {
    const res = await fetch('http://localhost:3005/users')
    const users = await res.json()

    dispatch(onUsersSuccess(users))
  }
)

const onSelectUser: OnSelectUser = (userId) => ({
  type: ON_SELECT_USER,
  payload: {
    userId
  }
})

export {
  ON_SELECT_USER,
  ON_USERS_FETCH_SUCCESS,
  onSelectUser,
  onUsersFetch
}
