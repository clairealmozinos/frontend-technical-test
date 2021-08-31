import { OnConversationsFetch, OnConversationsSuccess } from './conversations.types'

const ON_CONVERSATIONS_FETCH_SUCCESS = 'ON_CONVERSATIONS_FETCH_SUCCESS'

const onConversationsSuccess: OnConversationsSuccess = (conversations) => ({
  type: ON_CONVERSATIONS_FETCH_SUCCESS,
  payload: {
    conversations
  }
})

const onConversationsFetch: OnConversationsFetch = (id) => (
  async dispatch => {
    const res = await fetch(`http://localhost:3005/conversations/${id}`)
    const resJson = await res.json()

    const conversations = resJson.reduce((obj, item) => (
      Object.assign(obj, { [item.id]: item })
    ), {})

    dispatch(onConversationsSuccess(conversations))
  }
)

export {
  ON_CONVERSATIONS_FETCH_SUCCESS,
  onConversationsFetch
}
