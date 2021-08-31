import MessagesList from 'components/MessagesList'

const Messages = ({ id }) => {
  return (
    <MessagesList id={id} />
  )
}

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