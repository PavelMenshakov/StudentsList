Ext.define('studentlist.model.Student', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'FName',
            type: 'string'
        },
        {
            name: 'LName',
            type: 'string'
        },
        {
            name: 'SName',
            type: 'string'
        },
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'sex',
            type: 'bool'
        },
        {
            name: 'birthDay',
            type: 'date'
        },
        {
            name: 'incomDay',
            type: 'date'
        }
    ]
});