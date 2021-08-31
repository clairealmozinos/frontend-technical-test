import type { AppProps } from 'next/app'  
import { Provider } from 'react-redux'
import { useStore } from 'store/index'
import { getLoggedUserId } from 'utils/getLoggedUserId'
import 'styles/globals.css'

// Default way to get a logged user
export const loggedUserId = getLoggedUserId()

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore()

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
