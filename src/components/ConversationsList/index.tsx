import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import * as Actions from 'src/store/actions/index'
import { State } from 'src/store/reducers/index.types'
import styles from './style.module.css'
import { Props } from './types'

const ConversationsList: FC<Props> = ({ id }) => {
  const conversations = useSelector((state: State) => Object.values(state.conversations))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Actions.conversations.onConversationsFetch(id))
  }, [dispatch, id])

  return (
    <div className={styles.wrapper}>
      {
        conversations.map((conversation) => {
          const isContactRecipient = (id === conversation.recipientId)

          const contactId = (isContactRecipient)
            ? conversation.senderId
            : conversation.recipientId

          const name = (isContactRecipient)
            ? conversation.senderNickname
            : conversation.recipientNickname

          return (
            <Link
              passHref
              key={conversation.id}
              href={`/messages/${conversation.id}`}
            >
              <div className={styles.conversation}>
                <div className={styles.profileImageWrapper}>
                  <Image
                    className={styles.profileImage}
                    src={`https://picsum.photos/seed/${contactId}/40/40`} alt='ramdon-profile-img'
                    layout='responsive'
                    height={40}
                    width={40}
                  />
                </div>
                <div className={styles.infos}>
                  <div className={styles.name}>{name}</div>
                  <div className={styles.date}>{dayjs(conversation.lastMessageTimestamp).format('MMM DD')}</div>
                </div>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default ConversationsList
