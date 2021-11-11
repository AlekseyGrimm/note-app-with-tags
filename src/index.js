import React from 'react';
import ReactDOM from 'react-dom';
import Notes from './notes';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/index'
import { Provider } from 'react-redux';
const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Notes/>
        </PersistGate>
    </Provider>
)
ReactDOM.render(
    <App />,
    document.getElementById('root'));
