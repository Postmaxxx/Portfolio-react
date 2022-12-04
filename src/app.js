import  React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Preloader from './components/preloader/Preloader.jsx';

const LazyModalImage = React.lazy(() => import('./components/modal_splide/ModalImage.jsx'));
const LazyThemeSwitcher = React.lazy(() => import('./components/theme_switcher/ThemeSwitcher'));
const LazySidePanel = React.lazy(() => import('./components/side_panel/SidePanel'));
const LazyHomepage = React.lazy(() => import('./pages/home/Home'));
const LazyAboutpage = React.lazy(() => import('./pages/about/About'));
const LazyResume = React.lazy(() => import('./pages/resume/Resume'));
const LazyPortfolio = React.lazy(() => import('./pages/portfolio/Portfolio'));
const LazyContact = React.lazy(() => import('./pages/contact/Contact'));
const LazyPage404 = React.lazy(() => import('./pages/page404/page404'));


const App = () => {
    return (
        <>
            <Suspense fallback={<Preloader />}>
                <LazyModalImage />
            </Suspense>
            <Suspense fallback={<Preloader />}>
                <LazyThemeSwitcher />
            </Suspense>
            <Suspense fallback={<Preloader />}>
                <LazySidePanel />
            </Suspense>
            <Routes>
                <Route index element={<Suspense fallback={<Preloader />}><LazyHomepage /></Suspense>} />
                <Route path="/home" element={<Suspense fallback={<Preloader />}><LazyHomepage /></Suspense>} />
                <Route path="/" element={<Suspense fallback={<Preloader />}><LazyHomepage /></Suspense>} />
                <Route path="/index" element={<Suspense fallback={<Preloader />}><LazyHomepage /></Suspense>} />
                <Route path="/about" element={<Suspense fallback={<Preloader />}><LazyAboutpage /></Suspense>} />
                <Route path="/resume" element={<Suspense fallback={<Preloader />}><LazyResume /></Suspense>} />
                <Route path="/portfolio" element={<Suspense fallback={<Preloader />}><LazyPortfolio /></Suspense>} />
                <Route path="/contact" element={<Suspense fallback={<Preloader />}><LazyContact /></Suspense>} />
                <Route path="*" element={<Suspense fallback={<Preloader />}><LazyPage404 /></Suspense>} />
            </Routes>
        </>
    )
}

export default App;