import React from 'react';
import CardHeader from '../../../shared/components/card-header';
import { Container } from './styles';
import PlaceIcon from '@material-ui/icons/Place';

const Home = () => (
	<Container>
		<CardHeader icon={PlaceIcon} title="Places" />
		<div className="card-data-table">

		</div>
		
	</Container>
);

export default Home;