import { AppState } from './AppState'
import * as actionCreators from '../corelogic/usecases/actionCreators';
import { BUILDINGS_RETRIEVED } from '../corelogic/usecases/actionCreators';

export const buildingsReducer = (state: AppState = { buildings: [] }, action: actionCreators.Actions) => {
  if (action.type === BUILDINGS_RETRIEVED) {
    return {
      ...state,
      buildings: action.payload.buildings
    }
  }
  return state;
}
