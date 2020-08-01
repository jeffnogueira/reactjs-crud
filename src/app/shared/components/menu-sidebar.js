import React from 'react';
import { Link } from 'react-router-dom'
import { Sidebar } from './styles';
import Logo from "../../../assets/images/logo.svg";
import HomeIcon from '@material-ui/icons/Home';
import PlaceIcon from '@material-ui/icons/Place';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from "react-router-dom";
import { logout } from "../services/auth.service";

const MenuSidebar = () => {

	const history = useHistory();

    const onLogout = () => {
        logout();
        history.push("/");
    }

    return (

        <Sidebar>
            <div className="container-logo">
                <img src={Logo} height="110" className="d-inline-block align-top" alt="logo" />
                <div className="box-user-info">
                    <h3>Usuário Teste</h3>
                    <h4>usuario@email.com</h4>
                </div>
            </div>
            <hr />
            <div className="container-menu">
                <Link className="nav-link" to="/auth/home"><HomeIcon /> Home</Link>
                <Link className="nav-link" to="/auth/places"><PlaceIcon /> Locais</Link>
                <span className="nav-link" onClick={() => onLogout()}><ExitToAppIcon /> Logout</span>
            </div>
        </Sidebar>
    )
};

export default MenuSidebar;