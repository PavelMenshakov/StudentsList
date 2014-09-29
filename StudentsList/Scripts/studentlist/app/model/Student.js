Ext.define('studentlist.model.Student', {
    extend: 'Ext.data.Model',
    requires: [
       'studentlist.model.Subject'
    ],
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
    hasMany:{
        name: 'Subjects',
        model: 'studentlist.model.Subject'
    },

    proxy: {
        type: 'rest',
        url: 'api/Students/',
        reader: {
            type: 'json'
        }
    },

    idProperty: 'Id'
});