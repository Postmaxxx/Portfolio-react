import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import store from "./assets/redux/store";
import { Provider } from "react-redux";
import Preloader from "./components/preloader/Preloader";
const LazyApp = lazy(() => import("./app"));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<HashRouter>
		<Provider store={store}>
			<Suspense fallback={<Preloader />}>
				<LazyApp />
			</Suspense>
		</Provider>
	</HashRouter>
);