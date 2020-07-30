import React from 'react';
import { Nav } from './styles';

const Header = () => {

	const changeNav = () => {
		console.log('open');
	}
    
    return (
        <Nav>
            <div className="container">
                <button className="navbar-toggler" type="button" onClick={changeNav}>
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </Nav>
    );
}

export default Header;