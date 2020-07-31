import React from 'react';
import { Header } from './styles';
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';

const CardHeader = ({ icon: Icon, title: title }) => {
    
    const onSearch = (value) => {
        console.log(value)
    }
    
    return (
        <Header>
            <div className="container-title">
                <Icon /> 
                <h1>{ title }</h1>
            </div>
            <div className="container-search">
                <input type="text" placeholder="Pesquisar" onChange={e => onSearch(e.target.value)} />
            </div>
            <div className="container-actions">
                <button>
                    <AddIcon />
                </button>
                <button>
                    <RefreshIcon />
                </button>
            </div>
        </Header>
    );
}

export default CardHeader;