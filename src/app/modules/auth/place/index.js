import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
	<div className="App">
		<header className="App-header">
			<h1 className="App-title">Welcome to Place</h1>
		</header>
		<p className="App-intro">
			<Link to="/home">Ir para a página home \o/</Link>
		</p>
	</div>
);

export default Home;