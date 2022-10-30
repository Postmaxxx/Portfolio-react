import React from 'react';
import ReactDOM from 'react-dom/client';
import '.';
import {
  createBrowserRouter,
  RouterProvider,
  MemoryRouter,
  BrowserRouter,
  Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { createStore } from 'redux';
import reducer from './assets/redux/reducer';
import { Provider } from 'react-redux'

import App from './app'

let store = createStore(reducer);

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);



/*
setInterval(() => {console.log('111');},
1000)
*/