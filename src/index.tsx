import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {BuildingsList} from "./adapters/primary/react/buildingsList.component";
import {createReduxStore} from "./store/reduxStore";
import {InMemoryAgencyGateway} from "./adapters/secondary/InMemoryAgencyGateway";
import {HttpAgencyGateway} from "./adapters/secondary/HttpAgencyGateway";

const agencyGateway = new HttpAgencyGateway()
/* agencyGateway.buildings = new Map([
    ['PARIS', [{id: '123abc', address: '40 avenue Foch 75008 Paris'},
        {id: '456abc', address: '46 avenue de l\'Opéra 75009 Paris'}]]
])*/
const store = createReduxStore({
    agencyGateway
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BuildingsList/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
