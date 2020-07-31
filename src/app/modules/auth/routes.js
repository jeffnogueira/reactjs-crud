import React from "react";
import Home from "./home";
import Place from "./place";

const Routes = () => (
    <div className="container-content">
        {window.location.pathname === '/auth/home' && <Home />}
        {window.location.pathname === '/auth/places' && <Place />}
    </div>
);

export default Routes;