import { ActionsObservable, ofType, StateObservable } from 'redux-observable'
import { map, switchMap } from 'rxjs/operators'
import { AppState } from '../store/AppState'
import { AgencyGateway } from '../gateways/AgencyGateway.interface'
import { AnyAction } from 'redux'

export const retrieveBuildings = (action$: ActionsObservable<AnyAction>,
                                  state$: StateObservable<AppState>,
                                  { agencyGateway }: { agencyGateway: AgencyGateway }) =>
  action$.pipe(
    ofType('RETRIEVE_BUILDINGS'),
    switchMap((action) => agencyGateway.retrieveBuildings().pipe(
      map((buildings) => ({ type: 'BUILDINGS_RETRIEVED', payload: buildings }))
    ))
  )
