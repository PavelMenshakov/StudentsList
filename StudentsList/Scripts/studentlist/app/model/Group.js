Ext.define('studentlist.model.Group', {
    extend: 'Ext.data.Model',
    requires: [
        'studentlist.model.Student'
    ],
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'name',
            type: 'string'
        }
    ],

    hasMany: [{
        model: 'studentlist.model.Student',
        name: 'Students'
    }],
    proxy: {
        type: 'rest',
        url: 'api/Groups',
        reader: {
            type: 'json'
        }
    }
});