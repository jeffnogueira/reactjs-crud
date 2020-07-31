import React from 'react';
import { Nav } from './styles';
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => {

	const changeNav = () => {
		console.log('open');
	}
    
    return (
        <Nav>
            <div className="container">
                <button className="navbar-toggler" type="button" onClick={changeNav}>
                    <span className="navbar-toggler-icon"><MenuIcon /></span>
                </button>
            </div>
        </Nav>
    );
}

export default NavBar;