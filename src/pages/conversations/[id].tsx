import ConversationsList from 'src/components/ConversationsList'
import styles from '../style.module.css'

const Conversations = ({ id }) => (
  <div className={styles.container}>
    <main className={styles.main}>
      <ConversationsList id={id} />
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
      paths: [],
      fallback: 'blocking'
  }
}

export default Conversations
