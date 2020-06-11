import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

//import Routes from '../../routes';

//import { store, persistor } from '../../store';

import { Authorize } from './../../containers';

import './App.scss';

const App = () => (
    /*<Provider store={store}>
        <PersistGate persistor={persistor}>
        <div className="app">
            <Router>
                <Routes />
            </Router>
        </div>
        </PersistGate>
    </Provider>*/

    <div className="app">         
        <Authorize />
    </div>
);

export default App;
