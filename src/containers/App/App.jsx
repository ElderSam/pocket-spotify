import React from 'react';
import { RouteHeader, WelcomeBox } from './../../components';

import './App.scss';

const App = () => (
    <div className="app">
        <h1>Hello World!</h1>
        <WelcomeBox name={'Samuel'}/>
        {/*<RouteHeader />*/}

    </div>
);

export default App;
