import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import * as Actions from 'store/actions/index'
import { State } from 'src/store/reducers/index.types'

const UsersList = () => {
  const users = useSelector((state: State) => state.users.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Actions.users.onUsersFetch())
  }, [dispatch])

  const handleClick = (userId) => {
    dispatch(Actions.users.onSelectUser(userId))
  }

  return (
    <div>
      Please select the user you want to access:
      {
        users.map((user) => (
          <div key={user.id} onClick={() => handleClick(user.id)}>
            <Link href={`/conversations/${user.id}`}>
              {user.nickname}
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default UsersList
