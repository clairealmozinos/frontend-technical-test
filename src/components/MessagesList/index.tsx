import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { useRouter } from 'next/router'
import cx from 'classnames'
import { State } from 'src/store/reducers/index.types'
import * as Actions from 'src/store/actions/index'
import { Message } from 'src/types/message'
import { HandleOnChange, HandleOnSubmit, Props } from './types'
import styles from './style.module.css'

const MessagesList: FC<Props> = ({ id }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  
  const currentUserId = useSelector((state: State) => state.users.currentUser)
  const usersList = useSelector((state: State) => state.users.list)
  const currentConversation = useSelector((state: State) => state.conversations[id])
  const messages = useSelector((state: State) => state.messages)
  
  const recipientId = (id === currentConversation?.recipientId)
    ? currentConversation?.senderId
    : currentConversation?.recipientId
  const recipientUser = usersList.find((user) => user.id === recipientId)

  const [messageToSend, setMessageToSend] = useState('')

  const handleOnSubmit: HandleOnSubmit = (e) => {
    e.preventDefault()
    setMessageToSend('')
    dispatch(Actions.messages.onNewMessageSubmit(currentUserId, id, messageToSend))
  }

  const handleOnChange: HandleOnChange = (e) => {
    setMessageToSend(e.target.value)
  }

  useEffect(() => {
    if (currentConversation === undefined) {
      router.replace('/')
    }
    dispatch(Actions.messages.onMessagesFetch(id))
  }, [currentConversation, dispatch, id, router])

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
          <div className={styles.profileImageWrapper}>
            <Image
              className={styles.profileImage}
              src={`https://picsum.photos/seed/${recipientId}/40/40`} alt='ramdon-profile-img'
              layout='responsive'
              height={40}
              width={40}
            />
          </div>
        <p className={styles.recipientname}>{recipientUser?.nickname}</p>
      </div>
      <div className={styles.messagesList}>
        {
          messages.map((message: Message) => {
            const isMessageFromCurrentUser = message.authorId === currentUserId

            return (
              <div
                className={
                  `${styles.message} ${styles[cx({
                    'current': isMessageFromCurrentUser,
                    'recipient': !isMessageFromCurrentUser
                  })]}`
                }
                key={message.id}
              >
                {message.body}
              </div>
            )
          })
        }
      </div>
      <form
        className={styles.form}
        onSubmit={handleOnSubmit}
      >
        <input
          className={styles.input}
          onChange={handleOnChange}
          placeholder='Type your message...'
          type='text'
          value={messageToSend}
        />
        <input
          className={styles.button}
          type="submit"
          value="Send"
        />
      </form>
    </div>
  )
}

export default MessagesList
