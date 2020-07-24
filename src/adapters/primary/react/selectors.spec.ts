import { getZipCodes } from './selectors'
import { Store } from 'redux'
import { AppState } from '../../../store/AppState'
import { Actions } from '../../../corelogic/usecases/actionCreators'
import { InMemoryAgencyGateway } from '../../secondary/InMemoryAgencyGateway'
import { createReduxStore } from '../../../store/reduxStore'

describe('zip code selector', () => {
  let store: Store<AppState, Actions>
  let agencyGateway: InMemoryAgencyGateway
  let initialState: AppState
  const PARIS = 'PARIS'
  const fochBuilding = { id: '123abc', address: '4 avenue Foch 75008 Paris' }
  const foch2Building = { id: '777abc', address: '6 avenue Foch 75008 Paris' }
  const courcellesBuilding = {
    id: '456abc',
    address: '4 rue de Courcelles 75017 Paris'
  }

  beforeEach(() => {
    agencyGateway = new InMemoryAgencyGateway()
    store = createReduxStore({ agencyGateway })
    initialState = store.getState()
  })

  it('should not get any zip code when no building available', () => {
    expect(getZipCodes(store.getState())).toEqual([])
  })

  it('should get the zip code of the sole available building', () => {
    agencyGateway.buildings = new Map([[PARIS, [fochBuilding]]])
    retrieveBuildings(PARIS)
    expect(getZipCodes(store.getState())).toEqual(['75008'])
  })

  it('should get distinct zip codes from several available buildings', () => {
    agencyGateway.buildings = new Map([
      [PARIS, [fochBuilding, courcellesBuilding]]
    ])
    retrieveBuildings(PARIS)
    expect(getZipCodes(store.getState())).toEqual(['75008', '75017'])
  })

  it('should get distinct zip codes from several available buildings', () => {
    agencyGateway.buildings = new Map([
      [PARIS, [fochBuilding, foch2Building, courcellesBuilding]]
    ])
    retrieveBuildings(PARIS)
    expect(getZipCodes(store.getState())).toEqual(['75008', '75017'])
  })

  it('should not get any zip code when address is malformed', () => {
    agencyGateway.buildings = new Map([
      [PARIS, [{ ...fochBuilding, address: 'Paris' }]]
    ])
    retrieveBuildings(PARIS)
    expect(getZipCodes(store.getState())).toEqual([])
  })

  const retrieveBuildings = (cityName: string) => {
    store.dispatch(Actions.retrieveBuildings(cityName))
  }
})
