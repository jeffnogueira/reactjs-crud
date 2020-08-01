import Column from '../../../shared/components/column';

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
], size: 0};

export default config;