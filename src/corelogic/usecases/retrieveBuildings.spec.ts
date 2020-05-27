import { createStore, Store } from 'redux'

describe('Buildings retrieval', () => {
  it('should retrieve zero building if there is no building available', () => {
    // GIVEN
    const store: Store<any> = createStore((state = { buildings: [] }, action) => { return state })

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
        const store: Store<any> = createStore((state = { buildings: [] }, action) => { return state })
        const agencyGateway: AgencyGateway = new InMemoryAgencyGateway()
        // WHEN
        store.dispatch({
          type: 'RETRIEVE_BUILDINGS',
          payload: { cityName: 'Paris' }
        })
    
        // THEN
        expect(store.getState()).toEqual({ buildings: [{ address: '4 avenue Foch 75008 Paris' }] })
  })
})
