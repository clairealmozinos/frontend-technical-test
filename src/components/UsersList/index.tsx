import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import pageStyles from 'pages/__app.style.module.css'
import * as Actions from 'store/actions/index'
import { State } from 'store/reducers/index.types'
import styles from './style.module.css'
import { HandleClick } from './types'

const UsersList: FC = () => {
  const users = useSelector((state: State) => state.users.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Actions.users.onUsersFetch())
  }, [dispatch])

  const handleClick: HandleClick = (userId) => {
    dispatch(Actions.users.onSelectUser(userId))
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Please select the user you want to access:</h1>
      <div className={styles.usersList}>
        {
          users.map((user) => (
            <Link 
              passHref
              key={user.id}
              href={`/conversations/${user.id}`}
            >
              <div
                className={styles.userBlock}
                onClick={() => handleClick(user.id)}
              >
                <div className={styles.profileImageWrapper}>
                  <Image
                    className={styles.profileImage}
                    src={`https://picsum.photos/seed/${user.id}/40/40`} alt='ramdon-profile-img'
                    layout='responsive'
                    height={40}
                    width={40}
                  />
                </div>
                <span>{user.nickname}</span>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default UsersList
