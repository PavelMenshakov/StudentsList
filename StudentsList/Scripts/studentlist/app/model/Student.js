Ext.define('studentlist.model.Student', {
    extend: 'Ext.data.Model',
    requires: [
       'studentlist.model.Subject'
    ],
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'firstName',
            type: 'string'
        },
        {
            name: 'lastName',
            type: 'string'
        },
        {
            name: 'secondName',
            type: 'string'
        },
        {
            name: 'sex',
            type: 'string'
        },
        {
            name: 'birthDate',
            type: 'date',
            dateFormat: 'c',
            format: 'Y-m-d'
        },
        {
            name: 'incomDate',
            type: 'date',
            dateFormat: 'c',
            format: 'Y-m-d'
        }
    ],

    hasMany: [{
        model: 'studentlist.model.Subject',
        name: 'Subjects'
    }] ,

    proxy: {
        type: 'rest',
        url: 'api/Students/',
        reader: {
            type: 'json'
        }
    },

    
});