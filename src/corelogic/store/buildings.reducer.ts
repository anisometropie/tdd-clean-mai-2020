import { AppState } from './AppState'

export const buildingsReducer = (state: AppState = { buildings: [] }, action: any) => {
  if (action.type === 'BUILDINGS_RETRIEVED') {
    return {
      ...state,
      buildings: action.payload
    }
  }
  return state;
}
