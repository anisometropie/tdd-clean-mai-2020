import { ActionsObservable, ofType, StateObservable } from 'redux-observable'
import { map, switchMap } from 'rxjs/operators'
import { AppState } from '../../store/AppState'
import { AgencyGateway } from '../gateways/AgencyGateway.interface'
import * as actionCreators from './actionCreators'

export const retrieveBuildings = (action$: ActionsObservable<actionCreators.Actions>,
                                  state$: StateObservable<AppState>,
                                  { agencyGateway }: { agencyGateway: AgencyGateway }) =>
  action$.pipe(
    ofType('RETRIEVE_BUILDINGS'),
    switchMap((action) => agencyGateway.retrieveBuildings().pipe(
      map((buildings) => ({ type: 'BUILDINGS_RETRIEVED', payload: {buildings}}))
    ))
  )
