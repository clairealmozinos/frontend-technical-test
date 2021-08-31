import { useMemo } from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import * as Reducers from './reducers/index'

let store

const reducers = combineReducers({
  conversations: Reducers.conversations,
  messages: Reducers.messages,
  users: Reducers.users
})

const middlewares = [
  thunk,
]

const initStore = (preloadedState = {}) => createStore(
  reducers,
  preloadedState,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export const initializeStore = () => {
  let _store = store ?? initStore()

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (store) {
    _store = initStore({
      ...store.getState()
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export const useStore = () => {
  const store = useMemo(() => initializeStore(), [])
  return store
}