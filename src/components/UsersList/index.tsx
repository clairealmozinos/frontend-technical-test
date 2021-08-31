import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import * as Actions from 'store/actions/index'

const UsersList = () => {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Actions.users.onUsersFetch)
  }, [dispatch])


  return (
    <div>
      Please select the user you want to access:
      {
        users.map((user) => (
          <Link key={user.id} href={`/conversations/${user.id}`}>
            {user.nickname}
          </Link>
        ))
      }
    </div>
  )
}

export default UsersList