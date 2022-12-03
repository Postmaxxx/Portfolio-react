import React from 'react';
import ReactDOM from 'react-dom/client';
//import '.';
import { BrowserRouter, HashRouter } from "react-router-dom";
import { createStore } from 'redux';
import reducer from './assets/redux/reducer';
import { Provider } from 'react-redux'
import App from './app'

let store = createStore(reducer);
//const themeUnsubscribe = store.subscribe(() => console.log('Changed'))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
);



