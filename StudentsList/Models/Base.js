Ext.define('Fiddle.model.Base', {
    extend: 'Ext.data.Model',

    schema: {
        namespace: 'studentlist.model',

        proxy: {
            type: 'ajax',
            url: '{entityName}.json',
            reader: {
                type: 'json',
                rootProperty: '{entityName:lowercase}'
            }
        }
    }
});