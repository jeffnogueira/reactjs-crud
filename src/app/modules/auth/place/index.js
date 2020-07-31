import React, { useState, useEffect } from 'react';
import CardHeader from '../../../shared/components/card-header';
import CardDataTable from '../../../shared/components/card-data-table';
import { Container } from './styles';
import api from "../../../shared/services/api.service";
import { successSwalService, errorSwalService, confirmSwalService } from './../../../shared/services/swal.service';
import PlaceIcon from '@material-ui/icons/Place';
import Column from '../../../shared/components/column';

const Place = () => {

	const [ places, setPlaces ] = useState('');
	const [ size, setSize ] = useState(0);

	const config = {columns: [
		{
			displayedColumn: 'name',
			columnRef: 'name',
			nameColumn: 'Nome',
			type: Column.TYPE_COMMOM,
			sorted: true,
		}, {
			displayedColumn: 'city',
			columnRef: 'city',
			nameColumn: 'Cidade',
			type: Column.TYPE_COMMOM,
			sorted: true,
		}, {
			displayedColumn: 'state',
			columnRef: 'state',
			nameColumn: 'Estado',
			type: Column.TYPE_COMMOM,
			sorted: true,
		}, {
			displayedColumn: 'actions',
			columnRef: 'actions',
			nameColumn: 'Ações',
			type: Column.TYPE_ACTIONS,
			sorted: false
		  },
	], size: size};

	useEffect(() => {
		onRefresh();
	}, []);
    
    const onRefresh = () => {		
		api.get("/api/v1.0/places").then(res => {
			setSize(res.data.places.length);
			setPlaces(res.data.places)
		}).catch(error => {
			errorSwalService('Ops', error.data.description);
		});
    }
    
    const onSearch = (value = null) => {		
		api.get(`/api/v1.0/places/search/${value}`).then(res => {
			setSize(res.data.places.length);
			setPlaces(res.data.places)
		}).catch(error => {
			errorSwalService('Ops', error.data.description);
		});
    }

    const onView = (slug) => {
        console.log(slug);
    }

    const onEdit = (slug) => {
        console.log(slug);
    }

    const onDelete = (item) => {
        console.log(item);
		confirmSwalService('Deseja realmente efetuar a operação de exclusão?',
			`Tem certeza que quer excluir o local ${item.name}?`).then(response => {
			if (!response.dismiss) {
				setPlaces(places.filter(obj => obj.id != item.id));
				successSwalService('Operação realizada com sucesso.');
			}
		});
    }
	
	return (
		<Container>
			<CardHeader icon={PlaceIcon} title="Places" onSearch={(value) => onSearch(value)} onRefresh={(value) => onRefresh()} />
			<CardDataTable config={config} dataSource={places} onView={(slug) => onView(slug)} onEdit={(slug) => onEdit(slug)} 
				onDelete={(item) => onDelete(item)} />
			
		</Container>
	)
};

export default Place;