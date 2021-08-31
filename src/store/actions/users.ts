import { OnUsersFetch, OnUsersSuccess } from './users.types'

const ON_USERS_FETCH_SUCCESS = 'ON_USERS_FETCH_SUCCESS'

const onUsersSuccess: OnUsersSuccess = (users) => ({
  type: ON_USERS_FETCH_SUCCESS,
  payload: {
    users
  }
})

const onUsersFetch: OnUsersFetch = () => (
  async (dispatch) => {
    const res = await fetch('http://localhost:3005/users')
    const users = await res.json()

    dispatch(onUsersSuccess(users))
  }
)

export {
  ON_USERS_FETCH_SUCCESS,
  onUsersFetch
}
