Ext.define('studentlist.model.Visit', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'date',
            type: 'date'
        },
        {
            name: 'isAbson'
        }
        
    ]
});