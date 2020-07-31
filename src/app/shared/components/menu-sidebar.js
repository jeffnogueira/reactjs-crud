import React from 'react';
import { Link } from 'react-router-dom'
import { Sidebar } from './styles';
import Logo from "../../../assets/images/logo.svg";
import HomeIcon from '@material-ui/icons/Home';
import PlaceIcon from '@material-ui/icons/Place';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const MenuSidebar = () => (
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
            <Link className="nav-link" to="/auth/places"><PlaceIcon /> Places</Link>
            <Link className="nav-link" to="/auth/logout"><ExitToAppIcon /> Logout</Link>
        </div>
    </Sidebar>
);

export default MenuSidebar;