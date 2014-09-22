﻿Ext.define('studentlist.model.Group', {
    extend: 'Ext.data.Model',
    requires: [
        'studentlist.model.Student'
    ],
    idProperty: 'Id',
    fields: [
        {
            name: 'Id',
            type: 'int'
        },
        {
            name: 'Name',
            type: 'string'
        }
    ],

    hasMany: [
    {
        name: 'Students',              
        model: 'studentlist.model.Student' 
    }
    ],
    proxy: {
        type: 'rest',
        url: 'api/Groups',
        reader: {
            type: 'json'
        }
    }
});