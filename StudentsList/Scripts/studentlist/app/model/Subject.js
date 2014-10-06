Ext.define('studentlist.model.Subject', {
    extend: 'Ext.data.Model',
    requires: [
        'studentlist.model.Visit'
    ],

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'hours',
            type: 'int'
        }

    ],
    hasMany: [{
        model: 'studentlist.model.Visit',
        name: 'Visits'
    }],
    proxy: {
        type: 'rest',
        url: 'api/Subjects/',
        reader: {
            type: 'json'
        }
    }
});