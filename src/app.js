import { React } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
    Router,
    MemoryRouter,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";
import SideBlock from "./components/nav/SideBlock";
import { Switch, Redirect } from 'react'
import Homepage from './pages/home/Home'
import Aboutpage from './pages/about/About'
import Page404 from './pages/page404/page404'


function App() {
    return (
        <>
            <SideBlock />
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="home" element={<Homepage />} />
                <Route path="about" element={<Aboutpage />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </>
    )
}



export default App;