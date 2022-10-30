import { React } from 'react'
import { Routes, Route } from "react-router-dom";
import SidePanel from "./components/side_panel/SidePanel";
import { Switch, Redirect } from 'react'
import Homepage from './pages/home/Home'
import Aboutpage from './pages/about/About'
import Page404 from './pages/page404/page404'
import ThemeSwitcher from './components/theme_switcher/ThemeSwitcher';



function App() {
    return (
        <>
            <SidePanel />
            <ThemeSwitcher />
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