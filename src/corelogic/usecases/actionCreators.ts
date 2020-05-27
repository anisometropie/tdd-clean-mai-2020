import {createAction} from "../store/createAction";
import {Building} from "../models/Building.interface";
import {ActionsUnion} from "../store/actionsUnions";

export const RETRIEVE_BUILDINGS = 'RETRIEVE_BUILDINGS';
export const BUILDINGS_RETRIEVED = 'BUILDINGS_RETRIEVED';

export const Actions = {
    retrieveBuildings: (cityName: string) =>
        createAction(RETRIEVE_BUILDINGS, {cityName}),
    buildingsRetrieved: (buildings: Building[]) =>
        createAction(BUILDINGS_RETRIEVED, {buildings})
};

export type Actions = ActionsUnion<typeof Actions>;