Ext.define('studentlist.model.Student', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'Id',
            type: 'int'
        },
        {
            name: 'FirstName',
            type: 'string'
        },
        {
            name: 'LastName',
            type: 'string'
        },
        {
            name: 'SecondName',
            type: 'string'
        },
        {
            name: 'Sex',
            type: 'bool'
        },
        {
            name: 'BirthDate',
            type: 'date'
        },
        {
            name: 'IncomDate',
            type: 'date'
        }
    ],
    idProperty: 'Id',
    proxy: {
        type: 'rest',
        url: 'api/Students',
        reader: {
            type: 'json'
        }
    }
});