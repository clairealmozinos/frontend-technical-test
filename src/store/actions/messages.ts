import { Message } from 'types/message'
import { OnMessagesFetch, OnMessagesSuccess, OnNewMessage, OnNewMessageSubmit } from './messages.types'

const ON_MESSAGES_FETCH_SUCCESS = 'ON_MESSAGES_FETCH_SUCCESS'
const ON_NEW_MESSAGE = 'ON_NEW_MESSAGE'

const onMessagesSuccess: OnMessagesSuccess = (messages) => ({
  type: ON_MESSAGES_FETCH_SUCCESS,
  payload: {
    messages
  }
})

const onMessagesFetch: OnMessagesFetch = (id) => (
  async dispatch => {
    const res = await fetch(`http://localhost:3005/messages/${id}`)
    const messages = await res.json()

    dispatch(onMessagesSuccess(messages))
  }
)

const onNewMessage: OnNewMessage = (message) => ({
  type: ON_NEW_MESSAGE,
  payload: {
    message
  }
})

const onNewMessageSubmit: OnNewMessageSubmit = (authorId, conversationId, message) => (
  async dispatch => {
    const timestamp = Date.now()

    await fetch(
      `http://localhost:3005/messages/${conversationId}`,
      {
        method: 'POST',
        body: JSON.stringify({
          body: message,
          timestamp
        })
      }
    )
    .then(response => response.json())
    .then((data) => {
      const newMessage: Message = {
        authorId,
        body: message,
        conversationId,
        id: data.id,
        timestamp
      }
  
      dispatch(onNewMessage(newMessage))
    })
  }
) 

export {
  ON_MESSAGES_FETCH_SUCCESS,
  ON_NEW_MESSAGE,
  onMessagesFetch,
  onNewMessageSubmit
}
