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
            type: 'bool'
        },
        {
            name: 'birthDate',
            type: 'date'
        },
        {
            name: 'incomDate',
            type: 'date'
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