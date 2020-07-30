import React from 'react';
import { Link } from 'react-router-dom'
import { Sidebar } from './styles';
import Logo from "../../../assets/images/logo.svg";

const MenuSidebar = () => {

	const openNav = () => {
		console.log('open');
	}

	const closeNav = () => {
		console.log('close');
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
                <Link className="nav-link" to="/auth/home">Home</Link>
                <Link className="nav-link" to="/auth/places">Places</Link>
                <Link className="nav-link" to="/auth/logout">Logout</Link>
            </div>
            {/* <div className="container">
                <button className="navbar-toggler" type="button" onClick={openNav}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item pl-1 pr-1">
                            <Link className="nav-link" to="/places">Places</Link>
                        </li>
                        <Link className="navbar-brand pl-1 pr-1 logo-navBar" to="/home">
                            <img src={Logo} height="30" className="d-inline-block align-top" alt="logo" />
                        </Link>
                    </ul>
                </div>      

                <div id="mySidenav" className="sidenav d-flex flex-column">
                    <span className="closebtn" onClick={closeNav}>&times;</span>

                    
                    <Link className="navbar-brand pl-1 pr-1 logo-navBar" to="/home">
                        <img src={Logo} height="30" className="d-inline-block align-top" alt="logo" />
                    </Link>
                    <Link className="nav-link" to="/places">Places</Link>
                    
                </div>

            </div> */}
        </Sidebar>
    );
}

export default MenuSidebar;