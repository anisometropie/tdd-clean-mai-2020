import { createStore, Store } from 'redux'
import { InMemoryAgencyGateway } from '../../adapters/secondary/InMemoryAgencyGateway'
import { AppState } from '../store/AppState'
import { buildingsReducer } from '../store/buildings.reducer'
import { createReduxStore } from '../store/reduxStore'

describe('Buildings retrieval', () => {
  it('should retrieve zero building if there is no building available', () => {
    // GIVEN
    const store: Store<AppState> = createStore((state = { buildings: [] }, action) => {
      return state
    })

    // WHEN
    store.dispatch({
      type: 'RETRIEVE_BUILDINGS',
      payload: { cityName: 'Paris' }
    })

    // THEN
    expect(store.getState()).toEqual({ buildings: [] })
  })

  it('should retrieve one building', () => {
    // GIVEN
    const agencyGateway: InMemoryAgencyGateway = new InMemoryAgencyGateway()
    const store: Store<AppState> = createReduxStore({ agencyGateway })

    agencyGateway.buildings = new Map([['Paris', { id: '123abc', address: '4 avenue Foch 75008 Paris' }]])

    // WHEN
    store.dispatch({
      type: 'RETRIEVE_BUILDINGS',
      payload: { cityName: 'Paris' }
    })

    // THEN
    expect(store.getState()).toEqual({ buildings: [{ id: '123abc', address: '4 avenue Foch 75008 Paris' }] })
  })
})
