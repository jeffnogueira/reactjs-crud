import React from 'react';
import { DataTable } from './styles';
import Column from './column';
import ClearIcon from '@material-ui/icons/Clear';

const CardDataTable = ({ config, dataSource, onView, onEdit, onDelete }) => {
    
    return (
        <DataTable>
            { dataSource.length > 0 && <table>
                <thead>
                    <tr>
                    {config.columns.map(item => {
                        return (<th key={item.displayedColumn}>{item.nameColumn}</th>)
                    })}
                    </tr>
                </thead>
                <tbody>
                    {dataSource.map(item => {
                        return (
                            <tr key={item.id}>
                                {config.columns.map(column => {
                                    switch(column.type) {
                                        case column.TYPE_COMMOM:
                                            return (<td key={`${item.id}-${column.displayedColumn}`}>{item[column.displayedColumn]}</td>);
                                        case Column.TYPE_ACTIONS:
                                            return (<td key={`${item.id}-${column.displayedColumn}`}>
                                                        <button className="button-view" onClick={() => onView(item.slug)}>Ver</button>
                                                        <button className="button-edit" onClick={() => onEdit(item.slug)}>Editar</button>
                                                        <button className="button-delete" onClick={() => onDelete(item)}>Excluir</button>
                                                    </td>);
                                        default:
                                            return (<td key={`${item.id}-${column.displayedColumn}`}>{item[column.displayedColumn]}</td>);
                                    }
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>}

            { dataSource.length === 0 && <div className="not-dataSource">
                <ClearIcon /><h2>Não foi encontrado nenhum registro</h2>
            </div> }
        </DataTable>
    );
}

export default CardDataTable;