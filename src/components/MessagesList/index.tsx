import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { State } from 'src/store/reducers/index.types'
import * as Actions from 'store/actions/index'

const MessagesList = ({ id }) => {
  const authorId = useSelector((state: State) => state.users.currentUser)
  const currentConversation = useSelector((state: State) => state.conversations[id])
  const messages = useSelector((state: State) => state.messages)
  const dispatch = useDispatch()
  const router = useRouter()

  const [messageToSend, setMessageToSend] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setMessageToSend('')
    dispatch(Actions.messages.onNewMessageSubmit(authorId, id, messageToSend))
  }

  const handleOnChange = (e) => {
    setMessageToSend(e.target.value)
  }

  useEffect(() => {
    if (currentConversation === undefined) {
      router.replace('/')
    }
    dispatch(Actions.messages.onMessagesFetch(id))
  }, [currentConversation, dispatch, id, router])

  return (
    <div>
      {
        messages.map((message) => (
          <div key={message.id}>
            {JSON.stringify(message)}
          </div>
        ))
      }
      <form onSubmit={handleOnSubmit}>
        <input type='text' value={messageToSend} onChange={handleOnChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default MessagesList
