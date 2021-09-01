import MessagesList from 'src/components/MessagesList'
import styles from './style.module.css'

const Messages = ({ id }) => (
  <div className={styles.container}>
    <main className={styles.main}>
      <MessagesList id={id} />
    </main>
  </div>
)

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      id: params.id
    }
  }
}

export const getStaticPaths = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export default Messages
