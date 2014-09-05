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
    ],
    validators: {
        FName: { type: 'length', min: 3 },
        LName: { type: 'length', min: 3 },
        SName: { type: 'length', min: 3 },
        birthDay: { type: 'format', matcher: /^(\d{4})-(\d{1,2})-(\d{1,2})$/ },
        incomDay: { type: 'format', matcher: /^(\d{4})-(\d{1,2})-(\d{1,2})$/ }
    }
});