import {Store} from 'redux'
import {InMemoryAgencyGateway} from '../../adapters/secondary/InMemoryAgencyGateway'
import {AppState} from '../../store/AppState'
import {createReduxStore} from '../../store/reduxStore'
import {Building} from "../models/Building.interface";
import {Actions} from "./actionCreators";

describe('Buildings retrieval', () => {

    let store: Store<AppState, Actions>;
    let agencyGateway: InMemoryAgencyGateway;
    let initialState: AppState;
    const PARIS = 'PARIS';

    beforeEach(() => {
        agencyGateway = new InMemoryAgencyGateway()
        store = createReduxStore({agencyGateway})
        initialState = store.getState();
    });

    describe('No building available', () => {

        it('should retrieve zero building', () => {
            retrieveBuildings(PARIS);
            expectBuildingsState({buildings: []});
        })

    });

    describe('Some buildings available', () => {

        const fochBuilding = {id: '123abc', address: '4 avenue Foch 75008 Paris'};

        beforeEach(() => {
            agencyGateway.buildings = new Map([[PARIS, [fochBuilding]]])
        });

        it('should retrieve one building', () => {
            retrieveBuildings(PARIS);
            expectBuildingsState({buildings: [fochBuilding]});
        });

    })

    const retrieveBuildings = (cityName: string) => {
        store.dispatch(Actions.retrieveBuildings(cityName));
    };

    const expectBuildingsState = (buildingsState: { buildings: Building[] }) => {
        expect(store.getState()).toEqual({
            ...initialState,
            ...buildingsState
        })
    };


})
