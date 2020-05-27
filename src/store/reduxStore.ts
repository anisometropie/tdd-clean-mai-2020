import {applyMiddleware, createStore} from 'redux'
import {buildingsReducer} from './buildings.reducer'
import {combineEpics, createEpicMiddleware} from 'redux-observable'
import {retrieveBuildings} from '../corelogic/usecases/retrieveBuildings'
import {composeWithDevTools} from "redux-devtools-extension";

export const createReduxStore = (dependencies: any) => {
    const epicMiddleware = createEpicMiddleware(
        {dependencies}
    )

    const rootEpic = combineEpics<any>(
        retrieveBuildings
    )

    const store = createStore(
        buildingsReducer,
        composeWithDevTools(applyMiddleware(epicMiddleware))
    )

    epicMiddleware.run(rootEpic)
    return store
}
