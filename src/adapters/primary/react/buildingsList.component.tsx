import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../../store/AppState";
import * as React from 'react';
import {useEffect} from "react";
import * as actionCreators from '../../../corelogic/usecases/actionCreators';
import {getZipCodes} from "./selectors";
import {createSelector} from "reselect";
import {Building} from "../../../corelogic/models/Building.interface";

const getBuildings = createSelector<AppState, Building[], string[],
    { buildings: Building[], zipCodes: string[] }>(
    state => state.buildings,
    getZipCodes,
    (buildings, zipCodes) => ({
        buildings: buildings.map(b =>
            ({id: b.id, address: b.address.toUpperCase()})),
        zipCodes
    })
);

export const BuildingsList = () => {

    const buildingsVM = useSelector(getBuildings)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionCreators.Actions.retrieveBuildings('PARIS'))
    }, [])

    return <div>
        Les arrondissements trouvés :
        <ul>
            {buildingsVM.zipCodes.map(zipCode => <li key={zipCode}>{zipCode}</li>)}
        </ul>
        Voici les appartements disponibles sur Paris :
        <ul>
            {buildingsVM.buildings.map(building =>
                <li key={building.id}>{building.address}</li>)
            }
        </ul>
    </div>

};