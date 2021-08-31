const ON_MESSAGES_FETCH_SUCCESS = 'ON_MESSAGES_FETCH_SUCCESS'

const onMessagesSuccess = (messages) => ({
  type: ON_MESSAGES_FETCH_SUCCESS,
  payload: {
    messages
  }
})

const onMessagesFetch = (id) => {
  return async dispatch => {
    const res = await fetch(`http://localhost:3005/messages/${id}`)
    const messages = await res.json()

    dispatch(onMessagesSuccess(messages))
  }
}

export {
  ON_MESSAGES_FETCH_SUCCESS,
  onMessagesFetch
}
