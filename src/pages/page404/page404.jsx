import React from "react";
import { NavLink } from 'react-router-dom';
import './page404.scss';

function Page404({ store, task }) {
    return (
        <div className="page-404">
            <h1>Page <em>{ window.location.pathname.slice(1) }</em> was not found</h1>
            <NavLink to="/home"> <span>Click here to return to Home page</span></NavLink>
        </div>
    )
}

export default Page404;

