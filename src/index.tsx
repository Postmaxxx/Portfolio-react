import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import store from "./assets/redux/store";
import { Provider } from "react-redux";
import Preloader from "./components/preloader/Preloader";
import CatchError from "./components/catch_errors/catch_errrors";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const LazyApp = lazy(() => import("./app"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<HashRouter>
		<CatchError>
			<Provider store={store}>
				<Suspense fallback={<Preloader />}>
					<LazyApp />
				</Suspense>
			</Provider>
		</CatchError>
	</HashRouter>
);

serviceWorkerRegistration.register();