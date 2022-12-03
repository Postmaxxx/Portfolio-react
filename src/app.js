import  React, { Component, useEffect, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import SidePanel from "./components/side_panel/SidePanel";
import Homepage from './pages/home/Home';
import Aboutpage from './pages/about/About';
import Contact from './pages/contact/Contact';
import Resume from './pages/resume/Resume';
import Portfolio from './pages/portfolio/Portfolio'
import Page404 from './pages/page404/page404'
import ThemeSwitcher from './components/theme_switcher/ThemeSwitcher';
import { connect } from 'react-redux';
import * as actions from './assets/redux/actions';
import { bindActionCreators } from 'redux';
//import ModalSplide from './components/modal_splide/ModalSplide.jsx';

const LazyModalSplide = React.lazy(() => import('./components/modal_splide/ModalSplide.jsx'));
const LazyThemeSwitcher = React.lazy(() => import('./components/theme_switcher/ThemeSwitcher'));
const LazySidePanel = React.lazy(() => import('./components/side_panel/SidePanel'));
const LazyHomepage = React.lazy(() => import('./pages/home/Home'));
const LazyAboutpage = React.lazy(() => import('./pages/about/About'));
const LazyResume = React.lazy(() => import('./pages/resume/Resume'));
const LazyPortfolio = React.lazy(() => import('./pages/portfolio/Portfolio'));
const LazyContact = React.lazy(() => import('./pages/contact/Contact'));
const LazyPage404 = React.lazy(() => import('./pages/page404/page404'));
//const Lazy = React.lazy(() => import(''));

const App = (props) => {
    return (
        <>
            <LazyModalSplide />
            <LazyThemeSwitcher />
            <LazySidePanel />
            <Routes>
                <Route index element={<LazyHomepage />} />
                <Route path="/home" element={<LazyHomepage />} />
                <Route path="/" element={<LazyHomepage />} />
                <Route path="/index" element={<LazyHomepage />} />
                <Route path="/about" element={<LazyAboutpage />} />
                <Route path="/resume" element={<LazyResume />} />
                <Route path="/portfolio" element={<LazyPortfolio />} />
                <Route path="/contact" element={<LazyContact />} />
                <Route path="*" element={<LazyPage404 />} />
            </Routes>
        </>
    )

}


const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(App);


