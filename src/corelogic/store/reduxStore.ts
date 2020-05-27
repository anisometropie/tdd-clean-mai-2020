import { createStore, applyMiddleware } from 'redux'
import { buildingsReducer } from './buildings.reducer'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { retrieveBuildings } from '../usecases/retrieveBuildings'
import {AppState} from "./AppState";

export const createReduxStore = (dependencies: any) => {
  const epicMiddleware = createEpicMiddleware(
    { dependencies }
  )

  const rootEpic = combineEpics<any>(
    retrieveBuildings
  )

  const store = createStore(
    buildingsReducer,
    applyMiddleware(epicMiddleware)
  )

  epicMiddleware.run(rootEpic)
  return store
}
