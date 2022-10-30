import React from 'react';
import ReactDOM from 'react-dom/client';
//import '.';
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux';
import reducer from './assets/redux/reducer';
import { Provider } from 'react-redux'
//import * as actions from '../../assets/redux/actions'

import App from './app'

let store = createStore(reducer);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);




//setInterval(() => {console.log(store);}, 2000)


/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <div />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <Aboutpage />,
  },
  {
    path: "*",
    element: <div />,
  },
]);
*/