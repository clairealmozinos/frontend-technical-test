import ConversationsList from 'src/components/ConversationsList'

const Conversations = ({ id }) => (
  <ConversationsList id={id} />
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
