import { FC, Fragment } from 'react'
import Head from 'next/head'
import UsersList from 'src/components/UsersList'

const Home: FC = () => (
  <Fragment>
    <Head>
      <title>Frontend Technical test - Leboncoin</title>
      <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
    </Head>
  
    <UsersList />
  </Fragment>
)

export default Home
