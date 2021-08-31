import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import * as Actions from 'store/actions/index'

const ConversationsList = ({ id }) => {
  const conversations = useSelector((state) => Object.values(state.conversations))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Actions.conversations.onConversationsFetch(id))
  }, [dispatch, id])

  return (
    <div>
      {
        conversations.map((conversation) => (
          <div key={conversation.id}>
            <Link href={`/messages/${conversation.id}`}>
              {JSON.stringify(conversation)}
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default ConversationsList