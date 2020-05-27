import { AppState } from './AppState'
import * as actionCreators from '../usecases/actionCreators';
import { BUILDINGS_RETRIEVED } from '../usecases/actionCreators';

export const buildingsReducer = (state: AppState = { buildings: [] }, action: actionCreators.Actions) => {
  if (action.type === BUILDINGS_RETRIEVED) {
    return {
      ...state,
      buildings: action.payload.buildings
    }
  }
  return state;
}
