import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
//import '.';
import { BrowserRouter, HashRouter } from "react-router-dom";
import { createStore } from 'redux';
import reducer from './assets/redux/reducer';
import { Provider } from 'react-redux'
import Preloader from './components/preloader/Preloader'
const LazyApp = React.lazy(() => import('./app'));

let store = createStore(reducer);
//const themeUnsubscribe = store.subscribe(() => console.log('Changed'))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Provider store={store}>
            <Suspense fallback={<Preloader />}>
                <LazyApp />
            </Suspense>
        </Provider>
    </HashRouter>
);



