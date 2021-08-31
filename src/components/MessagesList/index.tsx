import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { State } from 'src/store/reducers/index.types'
import * as Actions from 'store/actions/index'

const MessagesList = ({ id }) => {
  const currentConversation = useSelector((state: State) => state.conversations[id])
  const messages = useSelector((state: State) => state.messages)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if (currentConversation === undefined) {
      router.replace('/')
    }
  }, [currentConversation])


  useEffect(() => {
    dispatch(Actions.messages.onMessagesFetch(id))
  }, [dispatch, id])

  return (
    <div>
      {
        messages.map((message) => (
          <div key={message.id}>
            {JSON.stringify(message)}
          </div>
        ))
      }
    </div>
  )
}

export default MessagesList
