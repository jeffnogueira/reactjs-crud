import React from "react";
import Home from "./home";
import Place from "./place";
import User from "./user";

const Routes = () => (
    <div>
        {window.location.pathname === '/auth/home' && <Home />}
        {window.location.pathname === '/auth/places' && <Place />}
        {window.location.pathname === '/auth/user' && <User />}
    </div>
);

export default Routes;