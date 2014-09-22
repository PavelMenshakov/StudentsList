Ext.define('studentlist.model.Subject', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'Id',
            type: 'int'
        },
        {
            name: 'Name',
            type: 'string'
        },
        {
            name: 'Hours',
            type: 'int'
        }
    ]
    ,
    idProperty: 'Id'
});