import type { AppProps } from 'next/app'  
import { Provider } from 'react-redux'
import { useStore } from 'store/index'
import { getLoggedUserId } from 'utils/getLoggedUserId'
import 'styles/globals.css'
import styles from './__app.style.module.css'

// Default way to get a logged user
export const loggedUserId = getLoggedUserId()

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore()

  return (
    <div className={styles.container}>
      <Provider store={store}>
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
      </Provider>
    </div>
  )
}

export default MyApp
