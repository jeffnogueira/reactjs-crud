import React, { useState, useEffect } from 'react';
import CardHeader from '../../../shared/components/card-header';
import CardDataTable from '../../../shared/components/card-data-table';
import { Container, Form } from './styles';
import api from "../../../shared/services/api.service";
import { successSwalService, errorSwalService, confirmSwalService } from './../../../shared/services/swal.service';
import PlaceIcon from '@material-ui/icons/Place';
import Column from '../../../shared/components/column';
import Action from '../../../shared/enums/actions.enum';
import CloseIcon from '@material-ui/icons/Close';

const Place = () => {

	const itemInitial = {id: 0, name: '', slug: '', city: '', state: ''}

	const [ places, setPlaces ] = useState('');
	const [ size, setSize ] = useState(0);
	const [ open, setOpen ] = useState(false);
	const [ item, setItem ] = useState(itemInitial);
	const [ action, setAction ] = useState(0);
	const [ name, setName ] = useState('');
	const [ slug, setSlug ] = useState('');
	const [ city, setCity ] = useState('');
	const [ state, setState ] = useState('');

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
	
	const openForm = (actionName, item = null) => {
		setAction(actionName)
		if (action !== Action.NEW) {
			setItem(item);
		}
		return handleOpen();
	}

	const onSave = () => {
		if (action === Action.NEW) {
			const valueForm = {
				name: name,
				slug: slug,
				city: city,
				state: state,
			}

			api.post(`/api/v1.0/places/new`, valueForm).then(res => {
				handleClose();
				onRefresh();
				successSwalService('Operação realizada com sucesso.');
			}).catch(error => {
				handleClose();
				errorSwalService('Ops', error.data.description);
			});
			handleClose();
		} else if (action === Action.EDIT) {
			const valueForm = {
				id: item.id,
				fields : {
					name: {
						current_value: item.name,
						new_value: name,
					},
					slug: {
						current_value: item.slug,
						new_value: slug,
					},
					city: {
						current_value: item.city,
						new_value: city,
					},
					state: {
						current_value: item.state,
						new_value: state,
					},
				}
			}

			api.put(`/api/v1.0/places/edit`, valueForm).then(res => {
				handleClose();
				onRefresh();
				successSwalService('Operação realizada com sucesso.');
			}).catch(error => {
				handleClose();
				errorSwalService('Ops', error.data.description);
			});
		}
	}

	const handleOpen = () => {
		setOpen(true);
	};
	
	const handleClose = () => {
		setItem(itemInitial);
		setName('');
		setSlug('');
		setCity('');
		setState('');
		setOpen(false);
	};

	const getOne = (action, slug) => {
		api.get(`/api/v1.0/places/${slug}`).then(res => {
			const place = res.data.place;

			setItem(place)
			setName(place.name);
			setSlug(place.slug);
			setCity(place.city);
			setState(place.state);

			openForm(action, place);
		}).catch(error => {
			console.log(error)
			errorSwalService('Ops', error.data.description);
		});
	}

    const onAdd = () => {
		openForm(Action.NEW);
    }

    const onView = (slug) => {
		getOne(Action.VIEW, slug);
    }

    const onEdit = (slug) => {
		getOne(Action.EDIT, slug);
    }

    const onDelete = (item) => {
		confirmSwalService('Deseja realmente efetuar a operação de exclusão?',
			`Tem certeza que quer excluir o local ${item.name}?`).then(response => {
			if (!response.dismiss) {
				setPlaces(places.filter(obj => obj.id !== item.id));
				successSwalService('Operação realizada com sucesso.');
			}
		});
    }
	
	return (
		<Container>
			<CardHeader icon={PlaceIcon} title="Locais" onSearch={(value) => onSearch(value)} onRefresh={() => onRefresh()} 
				onAdd={() => onAdd()} />

			{open && <div className="modal">
				<div className="background-modal" onClick={() => handleClose()}></div>
				<div className="container-modal">
					<div className="header-modal">
						{action === Action.NEW && <h2>Incluindo Local</h2>}
						{action === Action.VIEW && <h2>Visualizando Local</h2>}
						{action === Action.EDIT && <h2>Editando Local</h2>}
						<CloseIcon onClick={() => handleClose()}/>
					</div>
					<div className="body-modal">
						<Form>
							<div className="div-input-modal">
								<label>Nome</label>
								<input name="name" type="text" placeholder="Nome" value={name} disabled={action === Action.VIEW}
									onChange={e => setName(e.target.value)} />
							</div>
							<div className="div-input-modal">
								<label>Slug</label>
								<input name="slug" type="text" placeholder="Slug" value={slug} disabled={action === Action.VIEW}
									onChange={e => setSlug(e.target.value.replace(' ', '').toLowerCase())} />
							</div>
							<div className="div-input-modal">
								<label>Cidade</label>
								<input name="city" type="text" placeholder="Cidade" value={city} disabled={action === Action.VIEW}
									onChange={e => setCity(e.target.value)} />
							</div>
							<div className="div-input-modal">
								<label>Estado</label>
								<input name="state" type="text" placeholder="Estado" value={state} disabled={action === Action.VIEW}
									onChange={e => setState(e.target.value)} />
							</div>
							{action !== Action.VIEW && <div className="buttons">
								<button className="button-cancel" onClick={() => handleClose()}>Cancelar</button>
								<button className="button-confirm" onClick={() => onSave()}>Salvar</button>
							</div>}
						</Form>
					</div>
				</div>
			</div>}

			<CardDataTable config={config} dataSource={places} onView={(slug) => onView(slug)} onEdit={(slug) => onEdit(slug)} 
				onDelete={(item) => onDelete(item)} />
		</Container>
	)
};

export default Place;