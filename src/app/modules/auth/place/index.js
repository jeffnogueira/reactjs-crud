import React, { useState, useEffect } from 'react';
import CardHeader from '../../../shared/components/card-header';
import { Container } from './styles';
import api from "../../../shared/services/api.service";
import { errorSwalService } from './../../../shared/services/swal.service';
import PlaceIcon from '@material-ui/icons/Place';

const Home = () => {

	const [ places, setPlaces ] = useState('');

	useEffect(() => {
		onRefresh();
	}, []);
    
    const onRefresh = () => {		
		api.get("/api/v1.0/places").then(res => {
			setPlaces(res.data.places)
			console.log(res.data.places)
		}).catch(error => {
			errorSwalService('Ops', error.data.description);
		});
    }
    
    const onSearch = (value = null) => {		
		api.get(`/api/v1.0/places/search/${value}`).then(res => {
			setPlaces(res.data.places)
		}).catch(error => {
			errorSwalService('Ops', error.data.description);
		});
    }
	
	return (
		<Container>
			<CardHeader icon={PlaceIcon} title="Places" onSearch={(value) => onSearch(value)}  onRefresh={(value) => onRefresh()} />
			<div className="card-data-table">

			</div>
			
		</Container>
	)
};

export default Home;