import { React } from 'react'
import { Routes, Route } from "react-router-dom";
import SidePanel from "./components/side_panel/SidePanel";
import { Switch, Redirect } from 'react'
import Homepage from './pages/home/Home'
import Aboutpage from './pages/about/About'
import Page404 from './pages/page404/page404'
import ThemeSwitcher from './components/theme_switcher/ThemeSwitcher';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from './assets/redux/actions'


function App(state) {
    console.log('App state', state);

    //setTimeout(() => store.setStore({type: 'setTheme', payload: 'dark'}), 2000)

    return (
        <>
            <ThemeSwitcher state={state}/>
            <SidePanel />
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="home" element={<Homepage />} />
                <Route path="about" element={<Aboutpage />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </>
    )
}


const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),

})

export default connect(mapStateToProps, mapDispatchToProps)(App);