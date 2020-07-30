import React from 'react';
import { Container } from './styles';
import Header from '../../shared/components/header';
import MenuSidebar from '../../shared/components/menu-sidebar';
import Footer from '../../shared/components/footer';
import Routes from './routes';

const Auth = () => {

	return (
		<Container>
			<div style={{width: '25%',height: '100%',zIndex: 1}}> 
				<MenuSidebar />
			</div>
			<div style={{width: '75%',height: '100%',zIndex: 1}}>
				<Header />

				<Routes />

				<Footer />
			</div>
		</Container>
	);
}

export default Auth;